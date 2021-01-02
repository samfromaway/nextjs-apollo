import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: publicRuntimeConfig.API_URL,
      headers: {
        'X-hasura-admin-secret': publicRuntimeConfig.API_KEY,
        lang: 'en',
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
