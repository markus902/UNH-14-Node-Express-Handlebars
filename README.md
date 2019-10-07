# UNH-14-Burger-App

### Description and usage

This app is a proof of concept for the use of my first fullstack app using the MVC concept and Handlebars. The user can create a burger by entering a name. Once created the burger moves to the eat section and a button is added to eat it. After eating the burger the burger moves to the consumed section. In the process of eating the burger the app displays a gif.

### Code structure

The app uses an express server connecting to a database that stores the burger data (name and status). The app use and ORM to 

 with routes pointing to the home and the survey page with GET requests. When the form on the survey page is submitted a POST request gets triggered and sends the selected values to an array in the friends.js module (as an improvement a database could be implemented here). The logic in the api route compares this array with the predefinded arrays of the fiends and calculated the minimal ablolute difference for each index and sums up all results. Finally, the api responds with and array of the friend that had the lowes total difference to the users inputs. This array is converted into front-end visuals.

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