const db = require("./db");

const rootValue = () => {
  return {
    books: db.getAllBooks(),
    authors: db.getAllAuthors(),
    users: db.getAllUsers()
  };
};

module.exports = rootValue;
