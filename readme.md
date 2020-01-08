## API Documentation
**BASE URL** https://weight-lift-journal-dev.herokuapp.com/
- Attach endpoints to the end of the base URL in order to make HTTP Requests.

### Table of Contents
Endpoints that do _**not**_ require authentication (Not Protected):

| Requests           | Endpoints          |
|-----------------|--------------------|
|<a href="#register">POST Registration</a>| /api/auth/register |
|<a href="#login">POST Login</a>       | /api/auth/login    |

Endpoints that **_DO_** require authentication (Protected):

| Requests                           | Endpoints |
|-----------------                   | --------------------|
|<a href="#users">GET Users</a>                           | /api/users |
|<a href="#userID">GET User By ID</a>                     | /api/users/:id |
                        |         
|<a href="#allWorkouts">GET All workouts</a>                    | /api/workouts |
|<a href="#workoutID">GET Workout by ID</a>                   | /api/workouts/:id |
|<a href="#exercises">GET exercises</a>                           | /api/exercises |
                        |
<a href="#exercisesID">GET exercises by ID</a>                           | /api/exercises/:id|
|<a href="#userID">GET User By ID</a>                     | /api/users/:id 
                        |         
|<a href="#allWorkouts">GET All workouts</a>                    | /api/workouts                             |
|<a href="#workoutID">GET Workout by ID</a>                   | /api/workouts/:id                         |
|<a href="#addExercise">POST Add exercise</a>      | /api/exercises               |
                        | 
                        |
|<a href="#addExercise">POST Add exercise</a>      | /api/exercises               |
                        |                          |

|<a href="#userID">GET User By ID</a>                     | /api/users/:id 
                        |         
|<a href="#allWorkouts">GET All workouts</a>                    | /api/workouts                             |
|<a href="#workoutID">GET Workout by ID</a>                   | /api/workouts/:id                         |
|<a href="#addExercise">POST Add exercise</a>      | /api/exercises               |
                        |
