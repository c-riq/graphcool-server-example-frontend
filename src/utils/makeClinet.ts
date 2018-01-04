import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
});

const authLink = setContext((_, { headers }) => {
  // add auth token
  const token = null;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
