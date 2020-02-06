// importing data base config
const db = require('../database/dbConfig.js');

// importing supertest, calling it "request" is a common practice 
const request = require('supertest');

// importing server
const server = require('../api/server.js')

  // pass
describe('server', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })
})

// pass
describe('GET /users', () => {
    beforeEach(async() => {
        await db('users')
            .truncate();
    })

    it('should return status 200 on login', async () => {    
        // new user register
        const user = await request(server).post('/api/auth/register')
        .send({ username: 'Artanis', password: 'my_life_for_aiur' })
        
        // same user login
        const userLogin = await request(server).post('/api/auth/login')
            .send({ username: 'Artanis', password: 'my_life_for_aiur' })
            expect(userLogin.status).toBe(200)
    })
})

//pass
describe('GET /', () =>{
    it('has process.env.DB as "testing"', () =>{
        expect(process.env.DB_env).toBe('testing')
    });
    it ('returns 200 Ok', () =>{
        return request(server).get('/')
        .expect(200)
        .expect('Content-Type', /text/)
        .expect('Content-Length', '48')
    })
})

//pass
describe("users-router", () => {
  
    beforeEach(done => {
      request(server)
        .post("/api/auth/login")
        .send({ username: "Ale", password: "pass" })
        .end((req, res) => {
          token = res.body.token;
          done();
        });
    });
  });