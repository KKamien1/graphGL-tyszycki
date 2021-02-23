import React from "react";
import { gql, useQuery } from "@apollo/client";
import Author from "../components/Author";
import SearchBox, {useSearchQuery} from '../components/SearchBox';
import { Flex, Box } from "@chakra-ui/react";

const GET_AUTHORS_QUERY = gql`
  query GetAuthors($searchQuery: String) {
    authors(searchQuery: $searchQuery) {
      id
      name
      photo {
        url
      }
    }
  }
`;

export default function UsersPage() {
  const [searchQuery, handleSearchQueryChange] = useSearchQuery(`/authors/search/`);

    const { loading, error, data } = useQuery(GET_AUTHORS_QUERY, {variables: { 
      searchQuery
  }});
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load authors...</p>;
    }
    const { authors } = data;
    const hasAuthors = authors.length > 0;
    return (
        <Box>
            <SearchBox searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange}/>

            <Flex wrap="wrap" justify="space-around">
              {hasAuthors ? (
                authors.map(author => <Author author={author} />)
              ) 
                : (
                    <p>Authors not found</p>
                  )
                }
            </Flex>
        </Box>
    );
}
