$(document).ready(function () {

    $(".submit-button").on("click", function () {
        var id = $(this).data("id");
        event.preventDefault();

        userInput2 = $("#toDevourIt").val().trim();

        var devourThebtn = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourThebtn
        }).then(
            function(){
                console.log("it has been devoured");
                location.reload();
            }
        );
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









