const { getResourceByIdAndType } = require('./db');
const rootValue = require('./rootValue');

const decodeBase64 = base64String => Buffer.from(base64String, 'base64').toString();
const encodeBase64 = rawstring => Buffer.from(rawstring).toString('base64');

const toExternalId = (dbId, type) => encodeBase64(`${type}-${dbId}`);
const toTypeAndDbId = externalId => decodeBase64(externalId).split('-', 2);
const toDbId = externalId => toTypeAndDbId(externalId)[1];

const getAnythingByExternalId = (externalId, db) => {
  const [type, dbId] = toTypeAndDbId(externalId);
  console.log(type, dbId)
  switch (type) {
    case "Book":
      return db.getBookById(dbId)
      break;
    case "Author":
      return db.getAuthorById(dbId)
      break;
    case "User":
      return db.getUserById(dbId)
      break;
    case "BookCopy":
      return db.getBookCopyById(dbId)
      break;

    default:
      return null;
      break;
  }
}

const getResourceByExternalId = (externalId, db) => {
  const [type, dbId] = toTypeAndDbId(externalId);
  return db.getResourceByIdAndType(dbId, type);
}

const id = resource => toExternalId(resource.id, resource.resourceType);
const resolvers = {
  Query: {
    books: (rootValue, { searchQuery }, { search, db }) => search.findBooks(searchQuery), // db.getAllBooks(),
    authors: (rootValue, args, { db }) => db.getAllAuthors(),
    users: (rootValue, args, { db }) => db.getAllUsers(),
    book: (rootValue, { id }, { db }) => db.getBookById(toDbId(id)),
    user: (rootValue, { id }, { db }) => db.getUserById(toDbId(id)),
    author: (rootValue, { id }, { db }) => db.getAuthorById(toDbId(id)),
    anything: (rootValue, { id }, { db }) => getAnythingByExternalId(id, db),
    resource: (rootValue, { id }, { db }) => getResourceByExternalId(id, db),
    everything: (rootValue, { id }, { db }) => [
      ...db.getAllBookCopies(),
      ...db.getAllAuthors(),
      ...db.getAllUsers(),
      ...db.getAllBooks()
    ],
    resources: (rootValue, { id }, { db }) => [
      ...db.getAllBookCopies(),
      ...db.getAllAuthors(),
      ...db.getAllUsers(),
      ...db.getAllBooks()
    ]
  },
  Mutation: {
    borrowBookCopy: (rootValue, {id}, {db, currentUserDbId}) => {
      db.borrowBookCopy(toDbId(id),currentUserDbId);
      return db.getBookCopyById(toDbId(id));
    },
    returnBookCopy: (rootValue, {id}, {db, currentUserDbId}) => {
      db.returnBookCopy(toDbId(id), currentUserDbId);
      return db.getBookCopyById(toDbId(id))
    }
  },
  Book: {
    id,
    author: (book, args, { db }) => db.getAuthorById(book.authorId),
    copies: (book, args, { db }) => db.getBookCopiesByBookId(book.id),
    cover: book => ({
      path: book.coverPath
    })
  },
  BookCopy: {
    id,
    owner: (bookCopy, args, { db }) => db.getUserById(bookCopy.ownerId),
    book: (bookCopy, args, { db }) => db.getBookById(bookCopy.bookId),
    borrower: (bookCopy, args, { db }) =>
      bookCopy.borrowerId && db.getUserById(bookCopy.borrowerId)
  },
  Author: {
    id,
    books: (author, args, { db }) => author.bookIds.map(db.getBookById),
    photo: author => ({
      path: author.photoPath
    })
  },
  Avatar: {
    image: avatar => ({
      path: avatar.imagePath
    })
  },
  Image: {
    url: (image, args, { baseAssetsUrl }) => baseAssetsUrl + image.path
  },
  User: {
    id,
    ownedBookCopies: (user, args, { db }) => db.getBookCopiesOwnedByUser(user.id),
    borrowedBookCopies: (user, args, { db }) => db.getBookCopiesOwnedByUser(user.id),

  },
  Anything: {
    __resolveType: (anything) => {
      if (anything.title) {
        return "Book";
      }
      if (anything.bio) {
        return 'Author';
      }
      if (anything.info) {
        return "User";
      }
      if (anything.ownerId) {
        return "BookCopy";
      }
      return null;
    }
  },
  Resource: {
    __resolveType: (resource) => resource.resourceType,
  }
};

module.exports = resolvers;
