
# My Space Server


## API Reference

####  Register user

```http
  POST /api/v1/auth/register
  @Public
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fullName`| `string` | **Required**.              |
| `email`   | `string` | **Required**.              |
| `password`| `string` | **Required**.              |

#### Login user

```http
  POST /api/v1/auth/login
  @Public
```

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**.                     |
| `password`| `string` | **Required**.                     |


####  Get all columns

```http
  GET /api/v1/columns
  @Private
```


####  Create new column

```http
  POST /api/v1/columns
  @Private
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required**.              |
| `order`   | `number` | **Required**.              |
| `userId`  | `Schema.Types.ObjectId` | **Required**.|

####  Update a column

```http
 PUT /api/v1/columns/:id
  @Private
```

| Parameters| Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**.              |

####  Delete a column

```http
 DELETE /api/v1/columns/:id
  @Private
```

| Parameters| Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**.              |


####  Create a new card

```http
  POST /api/v1/cards
  @Private
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required**.              |
| `order`   | `number` | **Required**.              |
| `content`  | `strint` | |
| `column`  | `Schema.Types.ObjectId` | **Required**.|

####  Update a card

```http
 PUT /api/v1/cards/:id
  @Private
```

| Parameters| Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**.              |

####  Delete a card

```http
 DELETE /api/v1/cards/:id
  @Private
```

| Parameters| Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**.              |
