# Dok-Kan
Dok-Kan is an e-commerce application built from scratch using NodeJS/Express, custom file based database and BulmaCSS.
## Installation
After you cloned the repo, run:
```bash
npm install
npm start
```
For development, run
```bash
npm run dev
```
## Features
* Complete Authentication system.
* Authorization system: Admin and non admin users.
  * Full product CRUD only for admin users.
* Shopping cart.
## Fun facts
This project use a custom build database (JSON Files) and a custom ORM to make queries to the database. The intent was not to build a production ready database (in this case we can use a ready solution like MongoDB), But We choose to build it by ourselves in order learn the fundamentals of database and principles of programming like DRY and modularity code design.

We store users uploaded images in JSON, yes you read it right! XD it was a fun thing to learn about base64 encoding and how to use it to store images and show them on the browser later.

The authentication system was built from scratch with almost no libraries!
