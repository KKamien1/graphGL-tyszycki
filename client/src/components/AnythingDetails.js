import React from "react";
import {gql} from '@apollo/client'
import BookDetails from './BookDetails';
import AuthorDetails from './AuthorDetails';
import UserDetails from './UserDetails';

import { BOOK_DETAILS_FIELDS_FRAGMENT } from './BookDetails';
import { AUTHOR_DETAILS_FIELDS_FRAGMENT } from './AuthorDetails';
import { USER_DETAILS_FIELDS_FRAGMENT } from './UserDetails';

export const ANYTHING_DETAILS_FIELDS_FRAGMENT = gql`
    fragment anythingDetailsFields on Anything {
        ...bookDetailsFields
        ...authorDetailsFields
        ...userDetailsFields
    }
${BOOK_DETAILS_FIELDS_FRAGMENT}
${AUTHOR_DETAILS_FIELDS_FRAGMENT}
${USER_DETAILS_FIELDS_FRAGMENT}
`

export default function AnythingDetails({ anything }) {
    switch (anything.__typename) {
        case "Book": {
            return <BookDetails book={anything} />
        }
        case "Author": {
            return <AuthorDetails author={anything} />
        }
        case "User": {
            return <UserDetails user={anything} />
        }
        default: {
            return <p>Unsupported __typename - [{anything.__typename}]</p>;
        }
    }
}
