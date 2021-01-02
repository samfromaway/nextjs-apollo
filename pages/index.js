import { useQuery } from '@apollo/client';
import GET_PRODUCT_BY_ID from '../lib/queries/getProductById';
import { initializeApollo } from '../lib/apollo';

const VARIABLE = 'cbraz';

export default function Home() {
  const { data, error, loading } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { code: VARIABLE },
  });

  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;
  if (data.product.length === 0) return <h2>404 | Product Not Found</h2>;

  console.log(data);

  return (
    <div>
      <h1>Home</h1>
      <h2>{data?.product[0].usp1}</h2>
    </div>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PRODUCT_BY_ID,
    variables: { code: VARIABLE },
  });
  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
