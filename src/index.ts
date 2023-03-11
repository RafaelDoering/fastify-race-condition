import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';

import RaceConditionController from './controllers/race-condition';

const server: FastifyInstance = Fastify({ logger: true });

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
};

server.get('/', opts, async (request, reply) => {
  return { hello: 'world' };
});

new RaceConditionController(server);

const start = async () => {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port;

    console.log(`Server is running on port: ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
