import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import UserDetails from '../components/UserDetails'

const GET_USER_QUERY = gql`
  query GetUser($userId:ID!) {
    user(id: $userId) {
      id
      name
      info
      avatar {
        image {
          url
        }
        color
      }
    }
  }
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
        <UserDetails user={user} />
    );
}
