import { Button, useToast } from "@chakra-ui/react";
import React from "react";
import { gql, useMutation } from '@apollo/client'
import { BOOK_COPY_FIELDS_FRAGMENT } from './fragment';
import { GET_USER_QUERY } from '../../pages/UserDetailsPage'


export const RETURN_BOOK_COPY_MUTATION = gql`
  mutation ReturnBookCopy($bookCopyId: ID!) {
    returnBookCopy(id: $bookCopyId) {
      ...bookCopyFields
    }
  }
  ${BOOK_COPY_FIELDS_FRAGMENT}
`;

export default function ReturnButton({ borrowedBookCopy }) {
  const toast = useToast();
  const [returnBookCopy, { loading, data }] = useMutation(RETURN_BOOK_COPY_MUTATION, {
    variables: {
      bookCopyId: borrowedBookCopy.id
    },
    onError: (error) => {
      toast({
        title: "Could not return a the book",
        description: error.message,
        status: 'error',
        duration: 1000,
        position: "top",
        isClosable: true
      })
    },
    onCompleted: () => {
      toast({
        title: "Success!",
        description: 'You`ve returned the book',
        status: 'success',
        duration: 1000,
        position: "top",
        isClosable: true
      })
    },
    // refetchQueries: [
    //   {
    //     query: GET_USER_QUERY,
    //     variables: { userId: borrowedBookCopy.borrower.id }
    //   }
    // ],
    update: (cache, {data: {returnBookCopy}}) => {
      const cachedData = cache.readQuery(
        {
          query: GET_USER_QUERY,
          variables: { userId: borrowedBookCopy.borrower.id}
        }
      )
      console.log(cachedData);
      const data = JSON.parse(JSON.stringify(cachedData));
      data.user.borrowedBookCopies = [...data.user.borrowedBookCopies].filter(bookCopy => bookCopy.id !== borrowedBookCopy.id)
      cache.writeQuery({
        query: GET_USER_QUERY,
        variables: {userId: borrowedBookCopy.borrower.id},
        data
      })
    }
  })

  return (
    <Button onClick={returnBookCopy} disabled={loading}>
      Return
    </Button>
  );
}