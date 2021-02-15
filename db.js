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
  }
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
    id
  };
}

const getAllUsers = () =>
  data.users.map((user, index) => getUserById(toId(index)));

const db = {
  getAllBooks,
  getAllAuthors,
  getAllUsers,
  getBookById,
  getAuthorById,
  getUserById
};
module.exports = db;
