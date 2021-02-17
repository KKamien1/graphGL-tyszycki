import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "../components/User";
import { SimpleGrid, Box } from "@chakra-ui/react";

const ALL_USERS_QUERY = gql`
  query AllUsers {
    users {
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
    const { loading, error, data } = useQuery(ALL_USERS_QUERY);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load users...</p>;
    }
    const { users } = data;
    return (
        <Box w="100%">
            <SimpleGrid columns={[1, 2, 4]}>
                {users.map(user => (
                    <User user={user} />
                ))}
            </SimpleGrid>
        </Box>
    );
}
