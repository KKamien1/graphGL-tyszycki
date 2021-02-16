const lunr = require("lunr");

function initBooksIndex(db) {
  return lunr(function() {
    this.ref("id");
    this.field("title", { boost: 10 });
    this.field("description");
    db.getAllBooks().forEach(function(book) {
      this.add(book);
    }, this);
  });
}


class Search {
    constructor(db){
        this.db = db;
        this.bookIndex = initBooksIndex(this.db);

    }

    findBooks(searchQuery) {
        const result = this.bookIndex.search(searchQuery);
        console.log(result);
        const foundIds = result.map(res => res.ref);
        return foundIds.map(this.db.getBookById);
    }
}

module.exports = {
    Search
}