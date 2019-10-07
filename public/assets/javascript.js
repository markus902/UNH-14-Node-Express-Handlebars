$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("created burger");
    var newBurger = {
        name: $("#burger-name").val().trim(),
        status: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".burgerButton").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    $("#eat-gif").show();
    console.log("eat Burger");
    console.log(this);
    var id = this.id;
    var newBurgerStatus = {
        status: 1
    };

    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerStatus
    }).then(
        function () {
            console.log("updated burger status", newBurgerStatus);
            // Reload the page to get the updated list
            setTimeout(function () {
                location.reload()
            }, 2000);
        }
    );
});