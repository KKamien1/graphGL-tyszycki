import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import Book from "../components/Book";

const GET_BOOKS_QUERY = gql`
  query GetBooks {
    books {
      id
      title
      cover {
        url
      }
      author {
        name
      }
    }
  }
`;

export default function BooksPage() {
    const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load books</p>;
    }
    const { books } = data;
    return (
        <Box w="100%">
            {books.map(book => (
                <Book {...book} />
            ))}
        </Box>
    );
}
