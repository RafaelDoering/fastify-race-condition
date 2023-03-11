import { FastifyInstance } from 'fastify';

import Builder, { builder } from '../helpers/builder';

class RaceConditionController {
  private server: FastifyInstance;

  constructor(server: FastifyInstance) {
    this.server = server;
    this.initialize();
  }

  private initialize(): void {
    this.server.get('/race-condition/true', async (request, reply) => {
      builder.withProduct();
      setTimeout(() => {
        const value = builder.build();
        console.log(value);

        return value;
      }, 2000);
    });

    this.server.get('/race-condition/false', async (request, reply) => {
      const newBuilder = new Builder();
      newBuilder.withProduct();
      setTimeout(() => {
        const value = newBuilder.build();
        console.log(value);

        return value;
      }, 2000);
    });
  }
}

export default RaceConditionController;
