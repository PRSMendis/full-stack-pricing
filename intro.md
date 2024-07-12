#Fullstack Pricing Submission

## Prerequisites

- Docker
- Postgres
- zsh

## Steps:

1. Open your terminal and navigate to the `pricing` directory:
   `$ cd pricing`
2. Install the required dependencies:
   `$ npm i`
3. If a database is not already running, start it by running the command:
   `$ ./start-database.sh`
4. Push the database schema and data:
   `$ npm run db:push`
5. Generate the types and seed the database
   `$ npm run db:generate`
6. Start the development server:
   `$ npm run dev`

Please make sure you are using the Zsh shell for these commands.

## Troubleshooting

If you are having problems with DB permissions,

make sure that your .env file has:
if you are running locally
DATABASE_URL="postgresql://user:postgres:password@localhost:5432/pricing"
as detailed in .env.example
