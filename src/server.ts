import { DocumentNode, GraphQLSchema } from 'graphql';
import { makeExecutableSchema, IResolvers } from 'graphql-tools';

interface Options {
  schema?: GraphQLSchema;
  typeDefs?: DocumentNode | Array<DocumentNode>;
  resolvers?: IResolvers;
}

class Server {
  private schema: GraphQLSchema;

  constructor(options: Options) {
    const { schema, typeDefs, resolvers } = options;
    console.log('server');
    if (schema) {
      this.schema = schema;
    } else {
      if (!typeDefs || !resolvers) {
        throw new Error('When no schema is provided, provide typeDefs and resolvers.');
      }
      this.schema = makeExecutableSchema({
        typeDefs: Array.isArray(typeDefs) ? typeDefs : [typeDefs],
        resolvers,
        parseOptions: {},
      });
    }

  }
}

export default Server;
