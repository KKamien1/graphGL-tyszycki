import React from "react";
import { Button } from "@chakra-ui/react";
import {gql, useMutation} from '@apollo/client'
import {BOOK_COPY_FIELDS_FRAGMENT} from './fragment'


export const BORROW_BOOK_COPY_MUTATION = gql`
  mutation BorrowBookCopy($bookCopyId: ID!) {
    borrowBookCopy(id: $bookCopyId) {
      ...bookCopyFields
    }
  }
  ${BOOK_COPY_FIELDS_FRAGMENT}
`;



export default function BorrowButton({ availableBookCopy }) {

  const [borrowBookCopy, {loading, data} ] = useMutation(BORROW_BOOK_COPY_MUTATION, {
    variables: {
      bookCopyId: availableBookCopy.id
    }
  })
  // console.log(data)
  return (
    <Button onClick={borrowBookCopy} disabled={loading}>
      Borrow
    </Button>
  );
}
