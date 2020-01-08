## API Documentation
**BASE URL** https://w-l-j.herokuapp.com
- Attach endpoints to the end of the base URL in order to make HTTP Requests.

### Table of Contents
Endpoints that do _**not**_ require authentication (Not Protected):

| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#register">GET Registration</a>  | /api/auth/register | <b>POST</b> request to register new user
|<a href="#login">GET Login</a>            | /api/auth/login|  <b>POST</b> request to login new user

Endpoints that **_DO_** require authentication (Protected):
<b>GET</b> request endpoints
| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">GET Users</a>                    | /api/users |<b>GET</b> request to get all users
|<a href="#userID">GET User By ID</a>              | /api/users/:id | <b>GET</b> by user id gets user by id
|<a href="#allWorkouts">GET All workouts</a>       | /api/workouts | <b>GET</b> request get all workouts
|<a href="#workoutID">GET Workout by ID</a>        | /api/workouts/:id | <b>GET</b> request to get all workouts by thier ID
|<a href="#exercises">GET exercises</a>            | /api/exercises | <b>GET</b> request to get all exercises
|<a href="#exercisesID">GET exercises by ID</a>    | /api/exercises/:id| <b>GET</b> request to get exercises by thier ID
|<a href="#userID">GET workouts_exercises</a>              | /api/w-e | <b>GET</b> request to get all workouts_exercises  

<b>POST</b> request endpoints
| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|


|<a href="#allWorkouts">GET workouts_exercises</a>       | /api/workouts | <b>GET</b> request to register new user
|<a href="#workoutID">GET Workout by ID</a>        | /api/workouts/:id| <b>GET</b> request to register new user
|<a href="#addExercise">GET Add exercise</a>      | /api/exercises | <b>GET</b> request to register new user
|<a href="#addExercise">GET Add exercise</a>      | /api/exercises | <b>GET</b> request to register new user
|<a href="#userID">GET User By ID</a>              | /api/users/:id | <b>GET</b> request to register new user       
|<a href="#allWorkouts">GET All workouts</a>       | /api/workouts | <b>GET</b> request to register new user
|<a href="#workoutID">GET Workout by ID</a>        | /api/workouts/:id| <b>GET</b> request to register new user
|<a href="#addExercise">GET Add exercise</a>      | /api/exercises| <b>GET</b> request to register new user

