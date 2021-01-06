import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { SimpleGrid } from "@chakra-ui/react";

import User from '../components/User'


const ALL_USERS_QUERY = gql`
    query GetAllUsers {
        users {
            name
            avatar {
                image {
                    url
                }
                color
            }
    }
}`


export default function UsersPage() {

    const { loading, error, data } = useQuery(ALL_USERS_QUERY)

    if (loading) {
        return (<p>Loading</p>)
    }
    if (error) {
        return (<p>Error: {error}</p>)
    }

    const { users } = data;
    const content = users.map((author) => <User user={author} />)

    return (
        <div>
            Authors:
            <SimpleGrid columns="2">
                {content}
            </SimpleGrid>
        </div>
    )
}
