var router = require("express").Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data);
        let burgers = [];
        data.forEach(element => {
            burgers.push({
                burger_name: element.burger_name,
                devoured: element.devoured,
                id: element.id
            })
        });
        let hbsObject = {
            burgers: burgers
        }
        res.render("index", hbsObject)

    })
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "status"
    ], [req.body.name, req.body.status], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

module.exports = router;