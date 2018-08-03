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

    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
        connection.query(queryString, [burger], function (err, results) {
            console.log("Bro4");
            if (err) {
                console.log("Error" + err);
            }

            cb(results);
        })
    },

    updateOne: function (table, objColVals, condition, cb) {
        console.log("lucky number");
        console.log(objColVals);
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured = " + objColVals.devoured;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, results) {
            console.log("gigidy");
            if (err) {
                throw err;
            }

            
            cb(results);
        })

    }
};





module.exports = orm;