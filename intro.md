#Fullstack Pricing Submission

## Introduction

This is a repository based on the take home challenge sent by FOBOH.

I chose NextJS because that's what I'm familiar with, and think it's an awesome frontend meta framework.
I also chose TRPC, prisma, and postgres for the backend; I am familiar with prisma and postgres and like them, although have not used TRPC prior to this repository. I have been meaning to dive deep into building a trpc app and thought that it would make this task a better learning experience and more enjoyable and seeing as the BE functionality wasn't too complex thought I didn't think it'd inhibit the project much.

Overall was quite an interesting task and well formulated, I should have potentially asked some clarification questions but that would typically be easier when you are working closely with the people developing the product.

Thanks! Will be talking through this with you at 15:00 12/07/24

I wasn't sure if I was submitting prior or demonstrating during the video call.
A potential improvement to the confluence page would be a 'Submission' header detailing the time frame in which to receive the repo. (e.g. 3 hours before Video Call )

## Misc

You can find some thoughts and my opinions in the [markdowns folder](markdowns).

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
