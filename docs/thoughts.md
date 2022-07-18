## Table of Contents:  
1. [Create thought](#create-a-thought)
2. [Get all thoughts](#get-all-thoughts)
3. [Get one thought](#get-a-thought-by-id)
4. [Update thought](#update-a-thought)
5. [Delete thought](#delete-a-thought)
6. [Add reaction](#add-reaction-to-a-thought)
7. [Remove reaction](#remove-reaction-from-a-thought)


# Create a thought

**Method** : `POST`

**URL** : `/api/thoughts`

**Body** : 
```json
{
	"thoughtText": "Do you think there's more legs or eyes in the world?",
	"username": "fullestHouse"
}
```

## Success Responses

**Code** : `200 OK`

```json
{
	"thoughtText": "Do you think there's more legs or eyes in the world?",
	"username": "fullestHouse",
	"_id": "62d1bc5d5b56c5b932bf4acd",
	"createdAt": "2022-07-15T19:13:33.709Z",
	"reactions": [],
	"__v": 0,
	"reactionCount": 0
}
```


# Get all thoughts

**Method** : `GET`

**URL** : `api/thoughts`

## Success Responses

**Code** : `200 OK`

```json
[
	{
		"_id": "62d1bc5d5b56c5b932bf4acd",
		"thoughtText": "Do you think there's more legs or eyes in the world?",
		"username": "fullestHouse",
		"createdAt": "2022-07-15T19:13:33.709Z",
		"reactions": [],
		"__v": 0,
		"reactionCount": 1
	},
    ...
]
```


# Get a thought by ID

**Method** : `GET`

**URL** : `/api/thoughts/:thoughtId`

## Success Responses

**Code** : `200 OK`

```json
{
		"_id": "62d1bc5d5b56c5b932bf4acd",
		"thoughtText": "Do you think there's more legs or eyes in the world?",
		"username": "fullestHouse",
		"createdAt": "2022-07-15T19:13:33.709Z",
		"reactions": [],
		"__v": 0,
		"reactionCount": 1
	}
```


# Update a thought

**Method** : `PUT`

**URL** : `/api/thoughts/:thoughtId`

**Body** : 
```json
{
	"thoughtText": "Centipedes have 100 legs but do they have any arms?"
}
```

## Success Responses

**Code** : `200 OK`

```json
{
	"_id": "62d1bc5d5b56c5b932bf4acd",
	"thoughtText": "Centipedes have 100 legs but do they have any arms?",
	"username": "fullerHouse",
	"createdAt": "2022-07-15T19:13:33.709Z",
	"reactions": [],
	"__v": 0,
	"reactionCount": 1
}
```


# Delete a thought

**Method** : `DELETE`

**URL** : `/api/thoughts/:thoughtId`

## Success Responses

**Code** : `200 OK`

```json
{
	"message": "Thought deleted successfully"
}
```


# Add reaction to a thought

**Method** : `POST`

**URL** : `/api/thoughts/:thoughtId/reactions`

**Body** : 
```json
{
	"reactionBody": "I don't care what they're called as long as they stay far away from me",
	"username": "galaxyFarFarAway"
}
```

## Success Responses

**Code** : `200 OK`

```json
{
	"_id": "62d1bc5d5b56c5b932bf4acd",
	"thoughtText": "Centipedes have 100 legs but do they have any arms?",
	"username": "fullerHouse",
	"createdAt": "2022-07-15T19:13:33.709Z",
	"reactions": [
		{
			"reactionBody": "I don't care what they're called as long as they stay far away from me",
			"username": "galaxyFarFarAway",
			"_id": "62d568124b20f004d6ec7a61",
			"createdAt": "2022-07-18T14:02:58.195Z",
			"id": "62d568124b20f004d6ec7a61"
		}
	],
	"__v": 0,
	"reactionCount": 1
}
```


# Remove reaction from a thought

**Method** : `DELETE`

**URL** : `/api/thoughts/:thoughtId/reactions/:reactionId`

## Success Responses

**Code** : `200 OK`

```json
{
	"message": "Reaction removed successfully"
}
```