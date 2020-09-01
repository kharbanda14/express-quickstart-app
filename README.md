# Express API QuickStart

## Introduction
Express QuickStarter is basically a Express application organized with all the necessary features and modules you need
to quickly start building your web applications. **Currently it is under development** and so is the documentation.

- [Express API QuickStart](#express-api-quickstart)
  - [Introduction](#introduction)
  - [Documentation](#documentation)
  - [Features](#features)
  - [Purpose](#purpose)
  - [Packages/Modules used](#packagesmodules-used)
  - [Installation](#installation)
  - [Running Application](#running-application)

## Documentation
[Read Documentation](https://kharbanda14.github.io/express-quickstart-app/#/)

## Features
1. Passport JWT Authentication Configured
2. Dotenv support
3. Queues
4. Mails and Mailable
5. Response Data Mapper
6. Scheduler
7. Caching
8. Logging
9. Data Validation (joi)
10. Email rendering with Pug.js
11. Event Dispatching and Listeners
12. FileSystem (Local supported only)

## Purpose
Purpose of this application is to save time while starting/creating Express web applications from scratch.

## Packages/Modules used
1. [winston](https://www.npmjs.com/package/winston)
2. [passport](https://www.npmjs.com/package/passport)
3. [passport-jwt](https://www.npmjs.com/package/passport-jwt)
4. [node-cache](https://www.npmjs.com/package/node-cache)
5. [dotenv](https://www.npmjs.com/package/dotenv)
6. [nodemailer](https://www.npmjs.com/package/nodemailer)
7. [mongoose](https://www.npmjs.com/package/mongoose)
8. [bull](https://www.npmjs.com/package/bull)
9. [node-schedule](https://www.npmjs.com/package/node-schedule)
10. [joi](https://www.npmjs.com/package/joi)

## Installation
1. Install Packages
```bash
npm i
or 
yarn install
```
2. Create `.env` file from `.env.sample` and update the values accordingly.

## Running Application
```bash
npm run start
// or
npm run dev
```