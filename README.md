# UNH-14-Burger-App

### Description and usage

This app is a proof of concept for the use of my first fullstack app using the MVC concept and Handlebars. The user can create a burger by entering a name. Once created the burger moves to the eat section and a button is added to eat it. After eating the burger the burger moves to the consumed section. In the process of eating the burger the app displays a gif.

### Code structure

The app uses an express server connecting to a database that stores the burger data (name and status). The app uses an ORM to connect to the database and created, updates and reads entries. Based on the status of each burger, it gets rendered to the appropriate section.

### File sturcture

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

### Technologies

* Node.js supported by npm packages

* Handlebars

* Express Server

* ORM, MVC

* SQL Database