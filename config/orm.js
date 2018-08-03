var connection = require("../config/connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(burger, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
        connection.query(queryString, [burger], function(err, results){
            console.log("Bro4");
            if (err){
                console.log("Error" + err);
            }

            cb(results);
        })
    },

    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function(err, results){
            if (err){
                throw err;
            }

            cb(results);
        })

    }
};





module.exports = orm;