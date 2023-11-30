import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

schema {
    query: Query
}

type Query {   
    greeting: String
}`;

const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(apolloServer, { listen: { port: 4000 } })

console.log(`🚀 Server running at ${url}`)


