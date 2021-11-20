import { GraphQLNonNull } from "graphql";
import { updateArtist } from "../../operations/artists-operations";
import { ON_ARTIST_CHANGED } from "./artist-subscriptions";
import { UpdateArtistInputType } from "./update-artist-input-type";
import { UpdateArtistPayload } from "./update-artist-payload";

export const ArtistMutations = {
    updateArtist: {
        type: UpdateArtistPayload,
        args: {
            input: {
                type: new GraphQLNonNull(UpdateArtistInputType)
            }
        },
        resolve: async (_root: any, args: any, ctx: any) => {
            const [changes, artist] = await updateArtist(ctx, { 
                id: args.input.id,
                name: args.input.name
            });

            //this will actually always resolve to true, since ID always exists,
            //but some other databases can have changes to 0 if name is not changed
            if (changes > 0) {
                ctx.pubsub.publish(ON_ARTIST_CHANGED, artist);
            }

            return { artist }
        }
    }
}