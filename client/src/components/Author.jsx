import React from 'react'

export default function Author({ author }) {
    return (
        <>
            <img src={author.photo.url} />
            <h3>{author.name}</h3>

        </>
    )
}
