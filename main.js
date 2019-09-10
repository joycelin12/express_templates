"use strict";

const port = 3000,
  express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts") ;


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);

app.get("/name/:myName", homeController.respondWithName);



app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound); //add error-handling middleware to main.js
app.use(errorController.respondInternalError);

app.use(express.static("public")); // to access the files directly in the folder

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});


