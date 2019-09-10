"use strict";

const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => { //add middle ware to handle errors

  console.error(error.stack); //log error stack
  next(error);	// pass error to next middleware function
};

exports.respondNoResourceFound = (req, res) => { //respond with 404 status code
	let errorCode = httpStatus.NOT_FOUND;
	res.status(errorCode);
 //	res.send(`${errorCode} | The page does not exist!`);
	res.sendFile(`./public/${errorCode}.html`, {root: "./"}); //send content in 404 html
};

exports.respondInternalError = (error, req, res, next) => { //catch all errors and respond with 500 status code
	let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
	console.log(`ERROR occured : ${error.stack}`);
	res.status(errorCode);
	res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};



