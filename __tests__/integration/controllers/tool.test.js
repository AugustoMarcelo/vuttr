const request = require('supertest');
const server = require('../../../src/app');

describe('Tool', () => {
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
});
