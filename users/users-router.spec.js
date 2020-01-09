const request = require('supertest')
const generateToken = require('../auth/restricted-mid')
const db = require('../data/dbConfig')
const server = require("../api/server");


describe("user router tests", () => {
    
    describe("GET /users", () => {
        it("returns status code 200", async () => {
            const token = generateToken({ id: 11, username: "maddy vaughn" });
            
            const res = await request(server)   
                .get("/api/users")
                .set("authorization", token)
            
            await expect(res.status).toBe(200);
        });

        it("returns all users in database", async () => {
            const users = await db('users');

            await expect(users).toHaveLength(0);   
        });
    });
})