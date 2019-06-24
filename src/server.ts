import Koa from 'koa';
import corsMiddleware from '@koa/cors';

interface MiddleWareOptions {
  app: Koa;
  cors?: false;
  path?: string;
}

class Server {

  public applyMiddleware({ app, cors = false, path = '/graphql' }: MiddleWareOptions) {
    if (cors) {
      app.use(corsMiddleware)
    }
  }
}