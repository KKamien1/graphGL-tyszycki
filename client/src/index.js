import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CSSReset, ThemeProvider, theme } from "@chakra-ui/react";

import App from "./App";

const GRAPHQL_ENDPOINT = "http://localhost:4000";

const cache = new InMemoryCache({
    addTypename: true,
    resultCaching: false,
    possibleTypes: {
        Anything: ["Book", "Author", "User", "BookCopy"]
    }
});
const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache
});

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <ThemeProvider theme={theme}>
                <CSSReset />
                <App />
            </ThemeProvider>
        </Router>
    </ApolloProvider>,
    rootElement
);
