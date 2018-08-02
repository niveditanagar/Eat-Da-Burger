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

    insertOne: function(burgers, cb){
        var queryString = "INSERT INTO burgers (burgers_name) VALUES(?)";
        connection.query(queryString, [burger], function(err, results){
            if (err){
                throw err;
            }

            cb(results);
        })
    }
};





module.exports = orm;