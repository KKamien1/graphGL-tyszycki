import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import App from "./App";

const GRAPHQL_ENDPOINT = "https://examples.devmastery.pl/library-lists/graphql";

const cache = new InMemoryCache({
    addTypename: false,
    resultCaching: false
});
const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache
});

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    rootElement
);
