import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from "graphql";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Artists",
    fields: () => ({
      artists: {
        type: new GraphQLList(
          new GraphQLObjectType({
            name: "Artist",
            fields: () => ({
              id: {
                type: GraphQLInt,
                resolve: async (_root, _args, ctx) => {
                  const { id } = await ctx.db.get(`SELECT 'id' from 'artists'`);
                  console.log("ID: ", id);
                  return id;
                }
              },
              name: {
                type: GraphQLString,
                resolve: async (_root, _args, ctx) => {
                  const { name } = await ctx.db.get(
                    `SELECT 'name' from 'artists'`
                  );
                  return name;
                }
              }
            })
          })
        )
      }
    })
  })
});

// export const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "Artists",
//     type: new GraphQLList(new GraphQLObjectType({
//       fields: () => ({
//         id: {
//           type: GraphQLInt,
//           resolve: async (_root, _args, ctx) => {
//             return ctx.db.get(`SELECT 'id' from 'artists'`);
//           }
//         },
//         name: {
//           type: GraphQLString,
//           resolve: async (_root, _args, ctx) => {
//             return ctx.db.get(`SELECT 'name' from 'artists'`);
//           }
//         }
//       })
//     }))
//   })
// });
