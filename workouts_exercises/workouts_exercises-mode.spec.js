const request = require('supertest')
const db = require('../data/dbConfig')
const server = require("../api/server");

describe('w-e-Model', () => {
    beforeEach(async () => {
        await db('workouts_exercises').truncate();
    });
    const workouts_exercise = {
        id          : 1,
        reps        : 11,
        sets        : 11,
        workout_id  : 4,
        exercise_id : 4
    };
    // makes sure it is a string - sanity test with Number
    describe('workouts_exercises', () => {
        it('workouts_exercise is not empty', () => {
            expect(workouts_exercise).toMatchObject({
                reps : expect.any(Number),
            });
        });
        it('workouts_exercise is not null', () => {
            expect(workouts_exercise).not.toBeNull();
        });
    });
});