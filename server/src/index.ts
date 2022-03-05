import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { Context, prisma } from "./context";
import { withGithub } from "./utils/github";

const main = async () => {
  const app = express();

  const RedisStore = connectRedis(session);
  const client = new Redis();

  app.set("trust proxy", true);

  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({ client, disableTouch: true }),
      cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 100 * 60 * 60 * 24 * 1000,
      },
      saveUninitialized: false,
      secret: "oiteroietrioweuiowqhwqhsdhjksndfnsd",
      resave: false,
    })
  );

  await withGithub(app, prisma);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      validate: false,
      resolvers: [__dirname + "/resolver/**/*.js"],
    }),
    context: ({ req, res }: Context) => ({ req, res, prisma }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: "/api",
    cors: false,
  });

  const port = 4000 || process.env.PORT;
  app.listen(port, () => {
    console.log("listening on port " + port);
  });
};

main();
