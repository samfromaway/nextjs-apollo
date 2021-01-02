import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import GET_PRODUCT_BY_ID from '../lib/queries/getProductById';
import { initializeApollo } from '../lib/apollo';

export default function Product({ queryId }) {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { code: queryId },
  });

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.product.length === 0) return <h2>404 | Not Found</h2>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Home</h1>
          <h2>{data.product[0].usp1}</h2>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const queryId = query.product_id;

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PRODUCT_BY_ID,
    variables: { code: queryId },
  });
  return {
    props: { initialApolloState: apolloClient.cache.extract(), queryId },
  };
};
