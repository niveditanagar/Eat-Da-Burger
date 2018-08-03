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

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res){
    console.log("YOOOOO");
    var condition =  "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(req.body, condition, function(results){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
          res.status(200).end();
        }
       
    });
});


//exports routes for the server.js to use
module.exports = router;