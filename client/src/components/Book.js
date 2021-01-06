import React from 'react'
import { Heading, Flex, Image } from '@chakra-ui/react'

export default function Book({ book }) {
    return (
        <Flex bg="gray.50" align="center" m="3" border="1px" borderColor="gray.200" w="100%">
            <Image boxSize="50px" objectFit="cover" src={book.cover.url} alt={book.title} />           <Flex direction="column" mx="5">
                <Heading size="md" >{book.title}</Heading>
                <Heading size="sm" color="gray.400">{book.author.name}</Heading>
            </Flex>
        </Flex>
    )
}
