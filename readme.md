# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Install [Docker](https://www.docker.com/products/docker-desktop).

   a. Run `docker -v` and `docker compose` to double check.

2. Inside the repo, run `docker compose up`.

3. Test backend to database connectivity by accessing `http://localhost:3000/api/ping`.

4. Create a test user at http://localhost:3001/register.
