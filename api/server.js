const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const restricted = require('../auth/restricted-mid.js');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const workoutsRouter = require('../workouts/workouts-router')
const workouts_exercisesRouter = require('../workouts_exercises/workouts_exercises-router')
const exercisesRouter = require('../exercises/exercises-router')
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/workouts', workoutsRouter)
server.use('/api/exercises', exercisesRouter)
server.use('/api/w-e', workouts_exercisesRouter)

server.get('/', (req, res) => {
	res.send({api: 'up', dbenv: process.env.DB_ENV})
});

module.exports = server;