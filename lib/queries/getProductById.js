import gql from 'graphql-tag';

const GET_PRODUCT_BY_ID = gql`
  query GetTrip($code: String!) {
    product: trip_version(where: { trip: { code: { _eq: $code } } }, limit: 1) {
      usp1
    }
  }
`;

export default GET_PRODUCT_BY_ID;
