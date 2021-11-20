import { GraphQLObjectType } from "graphql";
import { Artist } from "./artist-type";

export const UpdateArtistPayload = new GraphQLObjectType({
    name: 'UpdateArtistPayload',
    description: 'Update artist type definition',
    fields: () => ({
        artist: {
            type: Artist
        }
    })
})