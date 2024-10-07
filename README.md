# Todo-List

This is a project for learning the PERN stack

## P.E.R.N. Tech Stack

- PostgreSQL
- ExpressJS
- ReactJS
- NodeJS

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
