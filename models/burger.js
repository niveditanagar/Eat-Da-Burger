var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    insertOne: function(cb){
        orml.insertOne("burgers", function(res){
            cb(res);
        })
    }
};





module.exports = burger;