import {
  GraphQLObjectType,
  GraphQLSchema,
} from "graphql";
import { ArtistMutations } from "./artists/artist-mutations";
import { ArtistQueries } from "./artists/artist-queries";
import { ArtistSubscriptions } from "./artists/artist-subscriptions";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...ArtistQueries
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...ArtistMutations
    })
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: () => ({
      ...ArtistSubscriptions
    })
  })
});