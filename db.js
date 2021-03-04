const data = {
  books: [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      coverPath: "/images/book-covers/harry1.jpg",
      description: "any description"
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      coverPath: "/images/book-covers/harry2.jpg",
      description: "any description"
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      coverPath: "/images/book-covers/harry3.jpg",
      description: "any description"

    },
    {
      title: "Harry Potter and the Goblet of Fire",
      coverPath: "/images/book-covers/harry4.jpg",
      description: "any description"

    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      coverPath: "/images/book-covers/harry5.jpg",
      description: "any description"

    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      coverPath: "/images/book-covers/harry6.jpg",
      description: "any description"

    },
    {
      title: "Harry Potter and the Deathly Hallows",
      coverPath: "/images/book-covers/harry7.jpg",
      description: "any description"

    },
    {
      title: "Leviathan Wakes",
      coverPath: "/images/book-covers/expanse1.jpg",
      description: "any description"

    },
    {
      title: "Caliban's War",
      coverPath: "/images/book-covers/expanse2.jpg",
      description: "any description"

    },
    {
      title: "Abaddon's Gate",
      coverPath: "/images/book-covers/expanse3.jpg",
      description: "any description"

    },
    {
      title: "Cibola Burn",
      coverPath: "/images/book-covers/expanse4.jpg",
      description: "any description"

    },
    {
      title: "Nemesis Games",
      coverPath: "/images/book-covers/expanse5.jpg",
      description: "any description"

    },
    {
      title: "Babylon's Ashes",
      coverPath: "/images/book-covers/expanse6.jpg",
      description: "any description"

    },
    {
      title: "Persepolis Rising",
      coverPath: "/images/book-covers/expanse7.jpg",
      description: "any description"

    },
    {
      title: "Tiamat's Wrath",
      coverPath: "/images/book-covers/expanse8.jpg",
      description: "any description"

    },
    {
      title: "Blood of Elves",
      coverPath: "/images/book-covers/witcher1.jpg",
      description: "any description"

    },
    {
      title: "Time of contempt",
      coverPath: "/images/book-covers/witcher2.jpg",
      description: "any description"

    },
    {
      title: "Baptism of fire",
      coverPath: "/images/book-covers/witcher3.jpg",
      description: "any description"

    },
    {
      title: "The tower of the swallow",
      coverPath: "/images/book-covers/witcher4.jpg",
      description: "any description"

    },
    {
      title: "The lady of the lake",
      coverPath: "/images/book-covers/witcher5.jpg",
      description: "any description"

    }
  ],
  authors: [
    {
      name: "J. K. Rowling",
      photoPath: "/images/book-authors/j-k-rowling.jpg",
      bio: "Author;s bio"
    },
    {
      name: "James S. A. Corey",
      photoPath: "/images/book-authors/james-s-a-corey.jpg",
      bio: "Author;s bio"
    },
    {
      name: "Andrzej Sapkowski",
      photoPath: "/images/book-authors/andrzej-sapkowski.jpg",
      bio: "Author;s bio"
    }
  ],
  users: [
    {
      name: "Alice",
      email: "alice@example.com",
      info: "Some info",
      avatar: {
        imagePath: "/images/avatars/w13.png",
        color: "yellow"
      }
    },
    {
      name: "Bob",
      email: "bob@example.com",
      info: "Some info",
      avatar: {
        imagePath: "/images/avatars/m10.png",
        color: "green"
      }
    },
    {
      name: "Celine",
      email: "celine@example.com",
      info: "Some info",
      avatar: {
        imagePath: "/images/avatars/w2.png",
        color: "red"
      }
    },
    {
      name: "Dan",
      email: "dan@example.com",
      info: "Some info",
      avatar: {
        imagePath: "/images/avatars/m25.png",
        color: "blue"
      }
    }
  ],
  bookIdsByAuthorId: {
    "1": ["1", "2", "3", "4", "5", "6", "7"],
    "2": ["8", "9", "10", "11", "12", "13", "14"],
    "3": ["15", "16", "17", "18", "19", "20"]
  },
  bookCopies: [
    {
      ownerId: "1",
      borrowerId: "2",
      bookId: "1"
    },
    {
      ownerId: "1",
      borrowerId: "2",
      bookId: "2"
    },
    {
      ownerId: "1",
      borrowerId: null,
      bookId: "3"
    },
    {
      ownerId: "1",
      borrowerId: "3",
      bookId: "4"
    },
    {
      ownerId: "1",
      borrowerId: null,
      bookId: "5"
    },
    {
      ownerId: "1",
      borrowerId: "4",
      bookId: "6"
    },
    {
      ownerId: "1",
      borrowerId: null,
      bookId: "7"
    },
    {
      ownerId: "2",
      borrowerId: null,
      bookId: "8"
    },
    {
      ownerId: "2",
      borrowerId: "3",
      bookId: "9"
    },
    {
      ownerId: "2",
      borrowerId: "4",
      bookId: "10"
    },
    {
      ownerId: "3",
      borrowerId: null,
      bookId: "1"
    },
    {
      ownerId: "3",
      borrowerId: "4",
      bookId: "4"
    },
    {
      ownerId: "3",
      borrowerId: "2",
      bookId: "11"
    },
    {
      ownerId: "3",
      borrowerId: "2",
      bookId: "12"
    },
    {
      ownerId: "3",
      borrowerId: null,
      bookId: "13"
    },
    {
      ownerId: "3",
      borrowerId: null,
      bookId: "14"
    },
    {
      ownerId: "3",
      borrowerId: "1",
      bookId: "15"
    },
    {
      ownerId: "4",
      borrowerId: null,
      bookId: "1"
    },
    {
      ownerId: "4",
      borrowerId: null,
      bookId: "8"
    },
    {
      ownerId: "4",
      borrowerId: "1",
      bookId: "16"
    },
    {
      ownerId: "4",
      borrowerId: "1",
      bookId: "17"
    },
    {
      ownerId: "4",
      borrowerId: "1",
      bookId: "18"
    },
    {
      ownerId: "4",
      borrowerId: null,
      bookId: "19"
    },
    {
      ownerId: "4",
      borrowerId: null,
      bookId: "20"
    }
  ]
};

// index = id -1
// id = index +1 

const toIndex = id => parseInt(id, 10) - 1;
const toId = index => `${index + 1}`;

const getAuthorIdByBookId = bookId =>
  Object.entries(data.bookIdsByAuthorId).find(([authorId, bookIds]) =>
    bookIds.includes(bookId)
  )[0]
  ;

const getBookById = id => {
  const index = toIndex(id);
  if (index < 0 || index >= data.books.length) {
    return null
  }

  return {
    ...data.books[toIndex(id)],
    id,
    resourceType:'Book',
    authorId: getAuthorIdByBookId(id)
  }
};
const getAllBooks = () =>
  data.books.map((book, index) => getBookById(toId(index)));

const getAuthorById = id => {

  const index = toIndex(id);
  if (index < 0 || index >= data.authors.length) {
    return null
  }
  return {
    ...data.authors[toIndex(id)],
    id,
    resourceType:'Author',
    bookIds: data.bookIdsByAuthorId[id]
  };
}

const getAllAuthors = () =>
  data.authors.map((author, index) => getAuthorById(toId(index)));

const getUserById = id => {
  const index = toIndex(id);
  if (index < 0 || index >= data.users.length) {
    return null
  }
  return {
    ...data.users[toIndex(id)],
    id,
    resourceType:'User'
  };
}

const getAllUsers = () =>
  data.users.map((user, index) => getUserById(toId(index)));

const getBookCopyById = id => ({
  ...data.bookCopies[toIndex(id)],
  id,
  resourceType:'BookCopy'
});

const getAllBookCopies = () =>
  data.bookCopies.map((bookCopy, index) => getBookCopyById(toId(index)));

const getBookCopiesByBookId = bookId =>
  getAllBookCopies().filter(bookCopy => bookCopy.bookId === bookId);

const getBookCopiesOwnedByUser = userId =>
  getAllBookCopies().filter(bookCopy => bookCopy.ownerId === userId);

const getBookCopiesBorrowedByUser = userId =>
  getAllBookCopies().filter(bookCopy => bookCopy.borrowerId === userId);


const borrowBookCopy = (bookCopyId, borrowedId) => {
  const index = toIndex(bookCopyId);
  if(index < 0 || index >= data.bookCopies.length) {
    throw new Error('Cannot borrow the book copy.')
  }
  const bookCopy = data.bookCopies[index];
  if(!!bookCopy.borrowerId) {
    throw new Error("Cannot borrow the copy. It is already borrowed");
  }
  bookCopy.borrowerId = borrowedId;
}

const returnBookCopy = (bookCopyId, borrowedId) => {
  const index = toIndex(bookCopyId);
  if(index < 0 || index >= data.bookCopies.length) {
    throw new Error('Cannot find the book copy.')
  }
  const bookCopy = data.bookCopies[index];
  if(!bookCopy.borrowerId) {
    throw new Error("Cannot return the copy. It's hasn's been borrowed");
  }
  if (bookCopy.borrowerId !== borrowedId) {
    throw Error('You did not borrow this book!');
  }
  bookCopy.borrowerId = null;
}

const getResourceByIdAndType = (id, type) => {
  switch (type) {
    case "Book":
      return getBookById(id)
      break;
    case "Author":
      return getAuthorById(id)
      break;
    case "User":
      return getUserById(id)
      break;
    case "BookCopy":
      return getBookCopyById(id)
      break;

    default:
      return null;
      break;
  }
}


const db = {
  getAllBooks,
  getAllAuthors,
  getAllUsers,
  getAllBookCopies,
  getBookCopiesByBookId,
  getBookById,
  getAuthorById,
  getUserById,
  getBookCopyById,
  getBookCopiesOwnedByUser,
  getBookCopiesBorrowedByUser,
  borrowBookCopy,
  returnBookCopy,
  getResourceByIdAndType
};
module.exports = db;
