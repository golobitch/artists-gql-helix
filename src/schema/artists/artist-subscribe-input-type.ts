import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from "graphql";

export const ArtistSubscribeInputType = new GraphQLInputObjectType({
    name: 'ArtistSubscribeInputType',
    description: 'Input payload for subscribing to artist change',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    })
})