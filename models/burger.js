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
    update: function (status, condition, cb) {
        orm.update("burgers", status, condition, function (data) {
                cb(data)
            },
            condition, cb);
    }
};

module.exports = burger