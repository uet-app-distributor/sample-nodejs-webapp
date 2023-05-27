# Sample NodeJS web application

## APIs
| path    | Action | definition                   |
| ------- | ------ | ---------------------------- |
| /       | GET    | Get homepage                 |
| /env    | GET    | Get environment variables    |
| /file   | GET    | Write a file                 |
| /now    | GET    | Get current time in database |
| /users/ | GET    | Get users                    |


## Pre-requisite
- Environment variables:

| path        | definition                              | Default   |
| ----------- | --------------------------------------- | --------- |
| USER        | User runs the server                    |           |
| PORT        | Server port                             |           |
| DB_USER     | User to connect to database             | postgres  |
| DB_PASSWORD | Password of user to connect to database |           |
| DB_HOST     | Database host address                   | localhost |
| DB_PORT     | Database port address                   | 5432      |
| DB_NAME     | Database name to connect                | postgres  |

- Volume path:

| path   | definition                    |
| ------ | ----------------------------- |
| `/tmp` | General volume to store files |

- Database:
| name     | version |
| -------- | ------- |
| postgres | 15      |