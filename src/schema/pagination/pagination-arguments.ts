import { GraphQLFieldConfigArgumentMap, GraphQLInt, GraphQLString } from "graphql";

export const PaginationArguments: GraphQLFieldConfigArgumentMap = {
    first: {
        type: GraphQLInt
    },
    afterCursor: {
        type: GraphQLString
    }
}