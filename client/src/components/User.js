import React from 'react'
import { Heading, Flex, Avatar } from '@chakra-ui/react'

export default function User({ user }) {
    return (
        <Flex direction="column" align="center" m="3">
            <Avatar size="xl" name={user.name} src={user.avatar.image.url} background={user.avatar.color} />
            <Heading>{user.name}</Heading>
        </Flex>
    )
}
