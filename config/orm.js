var connection = require("./connection.js");

var orm = {
    all: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    newBurger: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;