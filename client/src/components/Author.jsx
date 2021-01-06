import React from 'react'
import { Heading, Flex, Image } from '@chakra-ui/react'

export default function Author({ author }) {
    return (
        <Flex bg="gray.50" direction="column" align="center" m="3" border="1px" borderColor="gray.200">
            <Image size="100px" objectFit="cover" src={author.photo.url} alt={author.name} />
            <Heading size="md" my="10">{author.name}</Heading>

        </Flex>
    )
}
