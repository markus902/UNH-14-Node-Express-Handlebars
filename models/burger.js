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
    update: function (id, status, cb) {
        orm.update("burgers", id, status, function (data) {
                cb(data)
            },
            conditions, cb);
    }
};

module.exports = burger