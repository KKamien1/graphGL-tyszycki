import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Flex } from "@chakra-ui/react";

import Book from '../components/Book'


const ALL_BOOKS_QUERY = gql`
    query GetAllBooks {
        books {
            title
            cover {
                url
            }
            author {
                name
            }
            
    }
}`


export default function BooksPage() {

    const { loading, error, data } = useQuery(ALL_BOOKS_QUERY)

    if (loading) {
        return (<p>Loading</p>)
    }
    if (error) {
        return (<p>Error on Books Page: {error}</p>)
    }

    const { books } = data;
    const content = books.map((book) => <Book book={book} />)

    return (
        <div>
            Books:
            <Flex wrap="wrap" justify="space-around">
                {content}
            </Flex>
        </div>
    )
}
