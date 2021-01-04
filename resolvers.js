const db = require("./db");

const resolvers = {
  Book: {
    author: parent => db.getAuthorById(parent.authorId),
    cover: parent => ({
      path: parent.coverPath
    })
  },
  Author: {
    books: parent => parent.bookIds.map(db.getBookById),
    photo: parent => ({
      path: parent.photoPath
    })
  },
  Avatar: {
    image: parent => ({
      path: parent.imagePath
    })
  },
  Image: {
    url: (parent, args, context) => context.baseAssetsUrl + parent.path
  }
};

module.exports = resolvers;
