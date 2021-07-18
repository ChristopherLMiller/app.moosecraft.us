import Cors from "micro-cors";
import { ApolloServer, gql } from "apollo-server-micro";
import knex from "knex";

const db = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const typeDefs = gql`
  type Query {
    albums(first: Int = 25, skip: Int = 0): [Album!]!
    nickname(): String!
  }
  type Artist {
    id: ID!
    name: String!
    url: String!
    albums(first: Int = 25, skip: Int = 0): [Album!]!
  }
  type Album {
    id: ID!
    name: String!
    year: String!
    artist: Artist!
  }
  type GemsEconomyAccount {
      id: ID!
      nickname: String
      uuid: String
      payable: Int
  }
`;

const resolvers = {
  Query: {
    albums: (_parent, args, _context) => {
      return db
        .select("*")
        .from("albums")
        .orderBy("year", "asc")
        .limit(Math.min(args.first, 50))
        .offset(args.skip);
    },
  },

  Album: {
    id: (album, _args, _context) => album.id,
    artist: (album, _args, { loader }) => {
      // return db
      //   .select("*")
      //   .from("artists")
      //   .where({ id: album.artist_id })
      //   .first();
      return loader.artist.load(album.artist_id);
    },
  },

  Artist: {
    id: (artist, _args, _context) => artist.id,
    albums: (artist, args, _context) => {
      return db
        .select("*")
        .from("albums")
        .where({ artist_id: artist.id })
        .orderBy("year", "asc")
        .limit(Math.min(args.first, 50))
        .offset(args.skip);
    },
  },

  GemsEconomyAccount: {
    nickname: (_parent, _args, _context) => {
      return db.select("*").from("gemseconomy_accounts").orderBy("id", "asc");
    },
  },
};

const cors = Cors({
  allowMethods: ["GET", "POST", "OPTIONS"],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
