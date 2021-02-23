import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "../components/User";
import Link from "../components/Link";
import SearchBox, {useSearchQuery} from '../components/SearchBox';

import { SimpleGrid, Box } from "@chakra-ui/react";

const ALL_USERS_QUERY = gql`
  query AllUsers($searchQuery: String) {
    users(searchQuery: $searchQuery) {
      id
      name
      avatar {
        image {
          url
        }
        color
      }
    }
  }
`;

export default function UsersPage() {
  const [searchQuery, handleSearchQueryChange] = useSearchQuery(`/users/search/`);

    const { loading, error, data } = useQuery(ALL_USERS_QUERY, {variables: { 
      searchQuery
  }});
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load users...</p>;
    }
    const { users } = data;
    const hasUsers = users.length > 0;
    return (
        <Box w="100%">
            <SearchBox searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange}/>
            <SimpleGrid columns={[1, 2, 4]}>
              {hasUsers ? (users.map(user => <Link key={user.id} to={`/users/${user.id}`}><User user={user} /></Link>))
                : (
                  <p>Users not found</p>
                )  
            }
            </SimpleGrid>
        </Box>
    );
}
