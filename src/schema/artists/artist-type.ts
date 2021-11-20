import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const Artist = new GraphQLObjectType({
    name: 'Artist',
    description: 'Artist type definition',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})