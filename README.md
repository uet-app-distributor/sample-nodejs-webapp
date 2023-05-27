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
  - USER: user runs this server
  - PORT: port to run this server
- Volume path:
  - `/tmp`
- Database:
  - Postgres: `>=15`