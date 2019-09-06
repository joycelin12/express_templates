"use strict";

exports.respondWithName = (req, res) => {

	let paramsName = req.params.myName; //assign local variable to request paramter

   	res.render("index", {name: paramsName}); //respond with a custom EJS view, pass local variabble to rendered view
};
