import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router";
import BookCopy from '../components/BookCopy'
import { BOOK_COPY_FIELDS_FRAGMENT } from '../components/BookCopy/fragment'
import UserDetails, { USER_DETAILS_FIELDS_FRAGMENT } from '../components/UserDetails'

export const GET_USER_QUERY = gql`
  query GetUser($userId:ID!) {
    user(id: $userId) {
      ...userDetailsFields
      ownedBookCopies {
        ...bookCopyFields 
      }
      borrowedBookCopies {
        ...bookCopyFields
      }
    }
  }
  ${USER_DETAILS_FIELDS_FRAGMENT}
  ${BOOK_COPY_FIELDS_FRAGMENT}
`;

export default function UserDetailsPage() {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: {
      userId
    }
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load books</p>;
  }
  const { user } = data;
  return (
    <>
      <UserDetails user={user} />
      <Heading as="h3" size='lg' textAlign="center"> Copies </Heading>
      <Flex wrap="wrap">
        {user.ownedBookCopies.map(bookCopy => <BookCopy key={bookCopy.id} bookCopy={bookCopy} showOwner showBorrower showActions />)}
      </Flex>
      <Heading as="h3" size='lg' textAlign="center"> Borrowed </Heading>
      <Flex wrap="wrap">
        {user.borrowedBookCopies.map(bookCopy => <BookCopy key={bookCopy.id} bookCopy={bookCopy} showOwner showBorrower showActions />)}
      </Flex>
    </>
  );
}
