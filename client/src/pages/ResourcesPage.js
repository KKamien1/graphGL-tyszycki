import React from "react";
import { Link } from 'react-router-dom'
import { gql, useQuery } from "@apollo/client";
import { Box, Heading } from "@chakra-ui/react";
import NormalizedResource, { NORMALIZED_RESOURCE_FRAGMENT, normalizeResource } from "../components/NormalizedResource";

const GET_RESOURCES_QUERY = gql`
  query GetResources {
    resources {
        id
        ...normalizedResourceFields
    }
  }
  ${NORMALIZED_RESOURCE_FRAGMENT}
`;

export default function EverythingPage() {
    const { loading, error, data } = useQuery(GET_RESOURCES_QUERY);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load everything</p>;
    }

    const { resources } = data;
    const normalizedResources = resources.map(normalizeResource)
    return (
        <Box w="100%" bg="red.100" p={5}>
            <Heading textAlign="center" color="red.500"> Warning! Admin area!</Heading>
            {normalizedResources.map(anything => (
                <Link to={`/admin/resource/${anything.id}`} key={anything.id} >
                    <NormalizedResource normalizedResource={anything} />
                </Link>
            ))}
        </Box>
    );
}
