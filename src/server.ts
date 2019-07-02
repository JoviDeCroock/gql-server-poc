import { DocumentNode, GraphQLSchema } from 'graphql';
import {
  makeExecutableSchema,
  GraphQLParseOptions,
} from 'graphql-tools';

type Resolver = Object | Function;

interface Options {
  schema?: GraphQLSchema;
  typeDefs?: DocumentNode | Array<DocumentNode>;
  resolvers?: Resolver
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
        schemaDirectives: null,
        resolvers,
        parseOptions: {},
      });
    }

  }
}

export default Server;
