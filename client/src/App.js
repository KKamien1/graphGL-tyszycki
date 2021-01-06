import React from "react";
import { Box, Heading, Flex, Link, Divider } from '@chakra-ui/react'

import AuthorsPage from './pages/AuthorsPage';
import UsersPage from './pages/UsersPage';
import BooksPage from './pages/BooksPage';

import { Routes, Route, Link as RouterLink } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Flex direction="column" align="center" width={["95%", "60%"]} mx="auto">
                <Flex direction={["column", "row", "column", "row", "column", "row"]} align="center" justify="space-between" w="100%">
                    <Link to='/' as={RouterLink}>
                        <Heading as='h1'>Personal Library</Heading>
                    </Link>
                    <Flex >
                        <Link to="/" as={RouterLink}><Box as="span">Books</Box></Link>
                        <Divider orientation="vertical" />
                        <Link to="/users" as={RouterLink}><Box as="span">Users</Box></Link>
                        <Divider orientation="vertical" />
                        <Link to="/authors" as={RouterLink}><Box as="span">Authors</Box></Link>
                    </Flex>
                </Flex>

                <Routes>
                    <Route path='/' element={<BooksPage />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/authors' element={<AuthorsPage />} />
                </Routes>
            </Flex>
        </>
    );
}
