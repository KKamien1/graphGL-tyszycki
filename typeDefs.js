const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    authors: [Author!]!
    books(searchQuery: String! = "") : [Book!]!
    users: [User!]!
    book(id: ID!): Book
    user(id: ID!): User
    author(id: ID!): Author
    anything(id: ID!): Anything
    everything: [Anything!]!
  }

  type Mutation {
    borrowBookCopy(id:ID!): BookCopy!
    returnBookCopy(id:ID!): BookCopy!
  }

  union Anything = Author | Book | User | BookCopy

  type Author {
    id: ID!
    name: String!
    bio: String!
    photo: Image!
    books: [Book!]!
  }
  type Book {
    id: ID!
    title: String!
    cover: Image!
    description: String!
    author: Author!
    copies: [BookCopy!]!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    info: String!
    avatar: Avatar!
    ownedBookCopies: [BookCopy!]!
    borrowedBookCopies: [BookCopy!]!
  }
  type Image {
    url: String!
  }
  type Avatar {
    image: Image!
    color: String!
  }
  type BookCopy {
    id: ID!
    book: Book!
    owner: User!
    borrower: User
  }
`;

module.exports = typeDefs;
