$(document).ready(function () {
    var wanted;

    $(".submit-button").on("click", function () {

        event.preventDefault();

        wanted = $("#toDevourIt").val().trim();


        $("#toDevourIt").val("");


        $.post("/api/burgers/:id", { name: wanted }, function (data) {

        }).then(function () {
            console.log("mummy");
            location.reload();
        })
    })

    $(".buttonAdd").on("click", function (event) {
        event.preventDefault();

        var userInput = $("#tab").val().trim();
        console.log(userInput);

        var burger = {
            burger_name: userInput
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("created a new burger");
                location.reload();
            }
        )
    })

});









