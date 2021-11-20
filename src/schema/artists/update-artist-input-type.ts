import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export const UpdateArtistInputType = new GraphQLInputObjectType({
    name: 'UpdateArtistInputType',
    description: 'Input payload for updating artist',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})