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

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id=" + req.params.id;
    var newBurgerStatus = 1;

    console.log("condition: ", condition)

    burger.update(
        newBurgerStatus, condition,
        function (result) {
            // Send back the ID of the new quote
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});



module.exports = router;