import { startStandaloneServer } from "@apollo/server/standalone";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { ApolloServer } from "@apollo/server";
import { Resolvers } from "./generated/resolvers-types";
import * as path from "path";
import { readFileSync } from "fs";
import {
  crewmembers,
  sailboat,
  sailboats,
} from "./resolvers/sailboat.resolver";
import { MemoryRepository } from "./repository/memory/memory.repository";
// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    sailboats: sailboats,
    sailboat: sailboat,
  },
  Sailboat: {
    crewmembers: crewmembers,
  },
};

export const repo = new MemoryRepository();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
});

async function main() {
  //@ts-expect-error -- hold ya horses
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
main();
