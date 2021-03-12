import { Button } from "@chakra-ui/react";
import React from "react";
import {gql, useMutation} from '@apollo/client'
import {BOOK_COPY_FIELDS_FRAGMENT} from './fragment';


export const RETURN_BOOK_COPY_MUTATION = gql`
  mutation ReturnBookCopy($bookCopyId: ID!) {
    returnBookCopy(id: $bookCopyId) {
      ...bookCopyFields
    }
  }
  ${BOOK_COPY_FIELDS_FRAGMENT}
`;

export default function ReturnButton({ borrowedBookCopy }) {
  const [returnBookCopy, {loading, data}] = useMutation(RETURN_BOOK_COPY_MUTATION, {
    variables: {
      bookCopyId: borrowedBookCopy.id
    }
  })
  
  console.log(borrowedBookCopy)
  return (
    <Button onClick={returnBookCopy} disabled={loading}>
      Return
    </Button>
  );
}