const request = require('supertest');
// const router = require('../routing/petRouter');
const server = require('../server')

describe('petRouter.js module', () => {
  it('is the testing environment', () => {
      expect(process.env.DB_ENV).toBe('testing')
  })

  describe('[GET] /', () => {
    it('works', () => {
        return request(server).get("/api")
            .expect('Content-Type', /json/)
      })
  })

  describe('[POST] /', () => {
    it('works', () => {
        return request(server).get("/api/pets")
            .expect('Content-Type', /json/)
      })
  })

  describe('[DELETE] /', () => {
    it('works', () => {
        return request(server).get("/api/pets")
            .expect('Content-Type', /json/)
      })
  })
})



