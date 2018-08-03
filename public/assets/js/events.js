$(document).ready(function () {

    $(".submit-button").on("click", function () {

        event.preventDefault();

        userInput2 = $("#toDevourIt").val().trim();


        $("#toDevourIt").val("");


        $.post("/api/burgers/:id", { name: userInput2 }, function (data) {

        }).then(function () {
           
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









