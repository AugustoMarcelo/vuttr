const request = require('supertest');

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const server = require('../../../src/app');

describe('Tool', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    process.env.MONGO_URL = await mongoServer.getConnectionString();

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
  });

  afterAll(async done => {
    mongoose.disconnect(done);
    await mongoServer.stop();
    await server.stop();
  });

  it('should be able to add a new tool', async () => {
    const response = await request(server)
      .post('/tools')
      .send({
        name: 'json-server',
        description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        link: 'https://github.com/typicode/json-server',
        tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
      });

    expect(response.body).toHaveProperty('_id');
  });

  it('should be able to list all tools registered', async () => {
    const response = await request(server).get('/tools');
    expect(response.body).not.toContain([]);
  });

  it('should be able to find tools by send a query parameter', async () => {
    const response = await request(server).get('/tools?tag=api');
    expect(response.body[0].tags).toContain('api');
  });

  it('should be able to remove a tool by id', async () => {
    const newTool = await request(server)
      .post('/tools')
      .send({
        name: 'json-server',
        description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        link: 'https://github.com/typicode/json-server',
        tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
      });

    const response = await request(server).delete(`/tools/${newTool._id}`);

    expect(response.status).toBe(204);
  });
});
