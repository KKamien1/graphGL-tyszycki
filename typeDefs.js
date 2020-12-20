const { gql } = require('apollo-server');
const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {
        books: [Book]
    }
    type Book {
        title: String
    }
`;

module.exports = typeDefs;