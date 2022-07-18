## Table of Contents:  
1. [Create user](#create-a-user)
2. [Get all users](#get-all-users)
3. [Get one user](#get-a-user-by-id)
4. [Update user](#update-a-user)
5. [Delete user](#delete-a-user)
6. [Add friend](#add-friend-to-a-user)
7. [Remove friend](#remove-friend-from-a-user)


# Create a user

**Method** : `POST`

**URL** : `/api/users`

**Body** : 
```json
{
	"username": "fullerHouse",
	"email": "jstamos63@gmail.com"
}
```

## Success Responses

**Code** : `200 OK`

```json
{
	"username": "fullerHouse",
	"email": "jstamos63@gmail.com",
	"thoughts": [],
	"friends": [],
	"_id": "62d566fb4b20f004d6ec7a3a",
	"__v": 0,
	"friendCount": 0
}
```


# Get all users

**Method** : `GET`

**URL** : `api/users`

## Success Responses

**Code** : `200 OK`

```json
[
	{
		"_id": "62d8b9fbb4dec6f43b4930bc",
		"username": "ballsFromSpace",
		"email": "rmoranis53@gmail.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	},
	{
		"_id": "62d566fb4b20f004d6ec7a3a",
		"username": "fullerHouse",
		"email": "jstamos63@gmail.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	},
    ...
]
```


# Get a user by ID

**Method** : `GET`

**URL** : `/api/users/:userId`

## Success Responses

**Code** : `200 OK`

```json
{
	"_id": "62d566fb4b20f004d6ec7a3a",
	"username": "fullerHouse",
	"email": "jstamos63@gmail.com",
	"thoughts": [],
	"friends": [],
	"__v": 0,
	"friendCount": 0
}
```


# Update a user

**Method** : `PUT`

**URL** : `/api/users/:userId`

**Body** : 
```json
{
	"username": "fullestHouse",
	...
}
```

## Success Responses

**Code** : `200 OK`

```json
{
	"_id": "62d566fb4b20f004d6ec7a3a",
	"username": "fullestHouse",
	"email": "jstamos63@gmail.com",
	"thoughts": [],
	"friends": [],
	"__v": 0,
	"friendCount": 0
}
```


# Delete a user

**Method** : `DELETE`

**URL** : `/api/users/:userId`

## Success Responses

**Code** : `200 OK`

```json
{
	"message": "User galaxyFarFarAway deleted successfully"
}
```


# Add friend to a user

**Method** : `POST`

**URL** : `/api/users/:userId/friends/:friendId`

## Success Responses

**Code** : `200 OK`

```json
{
	"_id": "62d566fb4b20f004d6ec7a3a",
	"username": "fullestHouse",
	"email": "jstamos63@gmail.com",
	"thoughts": [],
	"friends": [
		"62d9b9fbb4dec6f43b4930bc"
	],
	"__v": 0,
	"friendCount": 10
}
```


# Remove friend from a user

**Method** : `DELETE`

**URL** : `/api/users/:userId/friends/:friendId`

## Success Responses

**Code** : `200 OK`

```json
{
	"_id": "62d566fb4b20f004d6ec7a3a",
	"username": "fullestHouse",
	"email": "jstamos63@gmail.com",
	"thoughts": [],
	"friends": [],
	"__v": 0,
	"friendCount": 0
}
```