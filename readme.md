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
<b>GET</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">GET Users</a>                    | /api/users |<b>GET</b> request to get all users
|<a href="#userID">GET User By ID</a>              | /api/users/:id | <b>GET</b> by user id gets user by id
|<a href="#allWorkouts">GET All workouts</a>       | /api/workouts | <b>GET</b> request get all workouts
|<a href="#workoutID">GET Workout by ID</a>        | /api/workouts/:id | <b>GET</b> request to get all workouts by thier ID
|<a href="#exercises">GET exercises</a>            | /api/exercises | <b>GET</b> request to get all exercises
|<a href="#exercisesID">GET exercises by ID</a>    | /api/exercises/:id| <b>GET</b> request to get exercises by thier ID
|<a href="#userID">GET workouts_exercises</a>              | /api/w-e | <b>GET</b> request to get all workouts_exercises  

<b>POST</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">POST workout</a>                    | /api/workouts |<b>POST</b> request to add new workout
|<a href="#userID">POST exercise</a>              | /api/exercises | <b>POST</b> request to add new exercise
|<a href="#allWorkouts">POST workouts_exercises</a>       | /api/w-e | <b>POST</b> request to add new Workouts_exercises

<b>DEL</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">DEL user by ID</a>                    | /api/users/:id |<b>POST</b> request to delete user by ID



<hr />

<div id="register"></div>

## [POST] Registration 

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/registration

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
    "username": "exampleuser",
    "password": "exampleuser"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
  "user": {
    "id": 5,
    "username": "exampleuser"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGV1c2VyIiwiaWF0IjoxNTc0MDkzMzU3LCJleHAiOjE1NzQxMjIxNTd9.hbL6AISkyQP6IF0PF6_VuUka3fsHLCCO3SfAhvw0AEw"
}
```

<hr />

<div id="login"></div>

## [POST] Log In

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/login

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string (4+ characters) |
|password (required)       | string (8+ characters)    |

_An example of how the body should appear:_

```js
{
	"username": "exampleuser",
	"password": "exampleuser"
}
```

### What will be returned:

_You will receive the user object, and a JWT._

```js
{
  
  
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJ0ZXN0ZHVkZSIsImlhdCI6MTU3NDE5NTM4OSwiZXhwIjoxNTc0MjgxNzg5fQ.Cf3CLHMwKIy_IMMifdCeDmo6t8DQM5kOBnPuHTyx70w",
  "message": "Welcome username"
}
```

<hr />

<div id="users"></div>

## [GET] Users

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users

### What will be returned:
_An array of all users within the database._
```js
[
  {
    "id": 11,
    "username": "carly"
  },
  {
    "id": 4,
    "username": "elizabeth2"
  },
  {
    "id": 2,
    "username": "jade"
  },
  {
    "id": 10,
    "username": "jade Savage"
  },
  {
    "id": 3,
    "username": "lilly"
  },
  {
    "id": 1,
    "username": "maddy"
  },
  {
    "id": 7,
    "username": "savanna"
  },
  {
    "id": 8,
    "username": "savanna2"
  },
  {
    "id": 9,
    "username": "savanna23"
  }
]
```

<hr />


<div id="userID"></div>

## [GET] User by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users/:id

**NOTE:** Be sure to include the `id` of an existing user on the end of the endpoint.

### What will be returned:
_An object of the user information._

```js
{
  "id": 2,
  "username": "jade",
  "workouts": [
    {
      "id": 4,
      "name": "workout name",
      "exercises": 0
    },
    {
      "id": 5,
      "name": "leg Workout",
      "exercises": 0
    },
    {
      "id": 6,
      "name": "arm Workout",
      "exercises": 1
    }
  ]
}
```

<hr />

<div id="Allworkouts"></div>


## [GET] All workouts

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts

**NOTE:** returns all workouts in database for all users

### What will be returned:
_An object of the workouts information._

```js
[
  {
    "id": 1,
    "name": "workout name",
    "date": null,
    "user_id": 1
  },
  {
    "id": 2,
    "name": "leg Workout",
    "date": null,
    "user_id": 1
  },
  {
    "id": 3,
    "name": "arm Workout",
    "date": null,
    "user_id": 1
  },
  {
    "id": 4,
    "name": "workout name",
    "date": null,
    "user_id": 2
  },
  {
    "id": 5,
    "name": "leg Workout",
    "date": null,
    "user_id": 2
  },
  {
    "id": 6,
    "name": "arm Workout",
    "date": null,
    "user_id": 2
  },
]
```

<hr />

## [GET] All workouts by user id

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts/:id

**NOTE:** returns all workouts in database by id

### What will be returned:
_An object of the workout by id._

```js
{
  "id": 11,
  "name": "brain Workout",
  "date": null,
  "user_id": 10
}
```

<hr />

<div id="AllExercises"></div>


## [GET] All Exercises

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises

**NOTE:** returns all exercises in database

### What will be returned:
_An object of the exercise information._

```js
[
  {
    "id": 1,
    "name": "Squats",
    "region": "Quads"
  },
  {
    "id": 2,
    "name": "Curls",
    "region": "Biceps"
  },
  {
    "id": 3,
    "name": "Pushups",
    "region": "Chest"
  },
  {
    "id": 4,
    "name": "Lunges",
    "region": "Hamstrings"
  },
  {
    "id": 5,
    "name": "Pull Ups",
    "region": "Back"
  },
  {
    "id": 6,
    "name": "testExercises",
    "region": "brain"
  },
  {
    "id": 7,
    "name": "testExercises2",
    "region": "brain"
  }
]
```

<hr />

## [GET] All Exercises by user id

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises/:id

**NOTE:** returns exercises by exercise_id

### What will be returned:
_An object of the exercises by id._

```js
{
  "name": "Pushups",
  "region": "Chest"
}
```

<hr />