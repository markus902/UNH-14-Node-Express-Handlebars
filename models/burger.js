var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all(function (data) {
            cb(data);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (data) {
            cb(data);
        });
    },
    update: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
                devoured: true
            },
            conditions, cb);
    }
};

module.exports = burger