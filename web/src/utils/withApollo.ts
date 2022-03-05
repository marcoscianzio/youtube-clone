import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo as createApolloClient } from "next-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache: new InMemoryCache({}),
  credentials: "include",
});

export const withApollo = createApolloClient(client);
