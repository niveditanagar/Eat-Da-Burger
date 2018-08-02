var express = require("express");

var router = express.Router();

//Importing model burger.js to use its database functions
var burger = require("../models/burger.js");


//Creating all routes
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/", function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function(){
        res.redirect("/");
    });
});


//exports routes for the server.js to use
module.exports = router;