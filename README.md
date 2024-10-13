# Todo-List

This is a project for learning the PERN stack

## P.E.R.N. Tech Stack

- PostgreSQL
- ExpressJS
- ReactJS
- NodeJS

## To run project in dev mode
- start postgresql database in terminal window
  - run: psql -U DB_USERNAME
    - enter DB_PASSWORD
  - in psql command line
    - Connect to "perntodo" database: \c perntodo
      - to list databases: \l
      - to see schema: \dt
- set up .env file in server directory
  - DB_USERNAME=...
  - DB_PASSWORD=...
  - DB_NAME=...
  - HOST=...
  - PORT=...
- in another terminal, in server directory run: nodemon
  - make sure corsConfig.js allows the address and port# from front-end
- in another terminal, in frontend/vite-project directory run: npm run dev
  - while in vite CLI enter "o" if a browser did not open yet

## to close everything, ^C each terminal session

## Things done so far

### General

- set up .gitignore and .env files

### Set up postgresql database

- in terminal run psql and enter the username(the superuser) and password
- now you can perform the sql commands
- create database
- create tables

### Set up nodeJS server

- on first start
  - npm init //to install node
  - npm i express cors pg //to install cors expressJS and postgres
- as seen in db.js create the pool to access the postgresql database
  - good practice to use env file to not share private info in a public repository
- as seen in index.js set up the require statements and middleware
- create CRUD operations in index.js
- have server start listening on a port (ex: port 5000)

## Notes

- when using localhost port 5000 on a MacOS you have to disable General>AirDrop & Handoff>AirPlay Reciever in order to free up port 5000
- when installing postgresql for first time, the command psql was not found. So to fix it, go into terminal
  1. vi ~/.zshrc
  2. go to bottom of file with arrow keys, press i to insert
  3. type: export PATH=/Library/PostgreSQL/17/bin/:$PATH
  4. press ESC then :wq to save and quit the editor
  5. restart terminal session and run the psql command
