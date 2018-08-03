var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        })
    },

    insertOne: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {

        orm.updateOne("burgers", objColVals, condition, function (res) {
            console.log("dawg");
            cb(res);

        });
    }

};

module.exports = burger;