import { GraphQLNonNull } from "graphql";
import { ArtistSubscribeInputType } from "./artist-subscribe-input-type";
import { withFilter } from "graphql-subscriptions";
import { UpdateArtistPayload } from "./update-artist-payload";

export const ON_ARTIST_CHANGED = 'ARTIST_CHANGED';

export const ArtistSubscriptions = {
    artistChanged: {
        type: UpdateArtistPayload,
        args: {
            input: {
                type: new GraphQLNonNull(ArtistSubscribeInputType)
            }
        },
        resolve: (payload: any) => {
            return { artist: payload };
        },
        subscribe: withFilter(
            (_root, _args, ctx) => ctx.pubsub.asyncIterator(ON_ARTIST_CHANGED), 
            (payload, variables) => {
                return payload.id == variables.input.id
            }
        )
    }
}