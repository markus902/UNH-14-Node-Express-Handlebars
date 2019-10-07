var connection = require("./connection.js");

var orm = {
    all: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log("response: " + result);
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES (?, ?)`;
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    update: function (table, id, status, cb) {
        var queryString = `UPDATE ${table} SET devoured = ${status} WHERE ${id}`

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(res)
            cb(res);
        });
    },
};

module.exports = orm;