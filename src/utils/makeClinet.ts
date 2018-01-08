import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
});

const authLink = setContext((_, { headers }) => {
  const user = String(localStorage.getItem('coolbnb_user'));
  let token = null;
  if (user) {
    token = JSON.parse(user).token;
  }
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : token,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
