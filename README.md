# Apollo Example

[Apollo](https://www.apollographql.com/client/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run.

In this simple example, we integrate Apollo seamlessly with [Next.js data fetching methods](https://nextjs.org/docs/basic-features/data-fetching) to fetch queries in the server and hydrate them in the browser.

This example is inspired by the [Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-apollo) and the [blog post from apollo](https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/)
