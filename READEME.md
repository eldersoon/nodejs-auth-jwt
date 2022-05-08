# Shared repository

### Running project

- Run `npm install` or `yarn install`
- Run `cp .env.exaple .env` or create .env file based in .env.example
- Change database credentials
- Run `npm run dev` or `yarn dev`

## Endpoints

#### authentication
- Register: POST `/register` body { name: string, email: string, password: string }
- Auth: POST `/login` dody { email: string, password: string }

#### users
- Return all users: GET `/users` body {} , heraders { Authorization: Bearer <token> }
- Register new user: POST `/users/store` body { name: string, email: string, password: string } , heraders { Authorization: Bearer <token> }