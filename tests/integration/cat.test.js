const request = require('supertest');
const Cat = require('../../app/models/cat.model');

require('dotenv').config();

let server;

describe('/api/cats/', () => {
  beforeEach(async () => {
    server = require('../../bin/www');
    await Cat.deleteMany({});
  });
  afterEach(async () => {
    server.close();
  });

  describe('GET /', async () => {
    it('should return 200 and all cats', async () => {
      await Cat.insertMany([{ name: 'cat1' }, { name: 'cat2' }]);
      const res = await request(server).get('/api/cats');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((cat) => cat.name === 'cat1')).toBeTruthy();
      expect(res.body.some((cat) => cat.name === 'cat2')).toBeTruthy();
    });
  });

  describe('GET /:id', async () => {
    it('should return 200 and a cat with the id', async () => {
      const cat = await Cat.create({ name: 'cat1' });
      let res = await request(server).get(`/api/cats/${cat._id}`);
      expect(res.status).toBe(200);
      expect(res.body.name).toBe(cat.name);
    });

    it('should return 404', async () => {
      const res = await request(server).get('/apu/cats/111111111111111111111111');
      expect(res.status).toBe(404);
    });

    it('should return 404 (Invalid ID)', async () => {
      const res = await request(server).get('/apu/cats/1');
      expect(res.status).toBe(404);
    });
  });
});
