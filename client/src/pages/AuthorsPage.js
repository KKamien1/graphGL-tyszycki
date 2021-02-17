import React from "react";
import { gql, useQuery } from "@apollo/client";
import Author from "../components/Author";
import { Flex, Box } from "@chakra-ui/react";

const GET_AUTHORS_QUERY = gql`
  query GetAuthors {
    authors {
      id
      name
      photo {
        url
      }
    }
  }
`;

export default function UsersPage() {
    const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load authors...</p>;
    }
    const { authors } = data;
    return (
        <Box>
            <Flex wrap="wrap" justify="space-around">
                {authors.map(author => (
                    <Author author={author} />
                ))}
            </Flex>
        </Box>
    );
}
