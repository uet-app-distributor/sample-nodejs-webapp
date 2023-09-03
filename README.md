# Sample NodeJS web application

## Pre-requisite
- Environment variables:

| path        | definition                              | Default    |
| ----------- | --------------------------------------- | ---------- |
| USER        | User runs the server                    | sample-app |
| PORT        | Server port                             | 8080       |
| DB_USER     | User to connect to database             | postgres   |
| DB_PASSWORD | Password of user to connect to database | podtgres   |
| DB_HOST     | Database host address                   | localhost  |
| DB_PORT     | Database port address                   | 5432       |
| DB_NAME     | Database name to connect                | postgres   |

- Volume path:

| path   | definition                    |
| ------ | ----------------------------- |
| `/tmp` | General volume to store files |

- Database:

| name     | version |
| -------- | ------- |
| postgres | 15      |

## APIs
| Path    | Action | Definition                                  |
| ------- | ------ | ------------------------------------------- |
| /       | GET    | Get homepage                                |
| /env    | GET    | Database required.Get environment variables |
| /file   | GET    | Write a file                                |
| /now    | GET    | Get current time in database                |
| /quote  | GET    | Get a random quote                          |
| /users/ | GET    | Get users                                   |
