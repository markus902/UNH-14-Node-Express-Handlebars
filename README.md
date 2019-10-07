# UNH-14-Burger-App

### Description and usage

This app is a proof of concept for the use of an express server and its routing. The user of the app is guided from a homepage to a survey to find a potential best fiend among some predefined VIPs. The questions or statements in the survey have to be answered by selecting dropdonwns with values from 1 to 10. When the survey is submitted the user gets prompted a suggested friend with name and picture.

### Code structure

The app uses an express server with routes pointing to the home and the survey page with GET requests. When the form on the survey page is submitted a POST request gets triggered and sends the selected values to an array in the friends.js module (as an improvement a database could be implemented here). The logic in the api route compares this array with the predefinded arrays of the fiends and calculated the minimal ablolute difference for each index and sums up all results. Finally, the api responds with and array of the friend that had the lowes total difference to the users inputs. This array is converted into front-end visuals.

### Technologies

* Node.js supported by npm packages

* Express Server

* GET and POST routes