import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import express from 'express';
import http from 'http';
import path from "path"
import {typeDefs}from "./modules/typeDevs.js"
import {resolvers}from "./modules/resolvers.js"


;(async()=> {
  const app = express();

  app.use(express.static(path.join(process.cwd(), "src", "public")))

  app.get("/", (req, res) => {
    return res.sendFile(path.join(process.cwd(), "src", "views", "index.html"))
  })

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground()
    ],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: 4001 }, resolve));
  console.log(`Server ready at http://localhost:4001${server.graphqlPath}`);
})()