import { gql, useQuery } from '@apollo/client'
import React from 'react'

import Author from '../components/Author'


const ALL_AUTHORS_QUERY = gql`
    query GetAllAuthors {
        authors {
            name
            photo {
                url
            }
    }
}`


export default function AuthorsPage() {

    const { loading, error, data } = useQuery(ALL_AUTHORS_QUERY)

    if (loading) {
        return (<p>Loading</p>)
    }
    if (error) {
        return (<p>Error: {error}</p>)
    }

    const { authors } = data;
    const content = authors.map((author) => <Author author={author} />)

    return (
        <div>
            Authors:
            {content}
        </div>
    )
}
