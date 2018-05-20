$(document).ready(function () {
    //variables to hold the wins and losses quantities.
    var wins = 0;
    var losses = 0;
    //Variable that will hold the value of the number the user needs to reach.
    var randomNumber = Math.floor((Math.random() * 101) + 19);
    $("#random-number").html(randomNumber);
    //Variable that will hold the total score.
    var score = 0;
    $("#score").html(score);
    //Variables that will hold the value of each Crystal Button.
    var diamondButton = Math.floor((Math.random() * 12) + 1);
    var emeraldButton = Math.floor((Math.random() * 12) + 1);
    var rubyButton = Math.floor((Math.random() * 12) + 1);
    var sapphireButton = Math.floor((Math.random() * 12) + 1);
    //console.log(diamondButton);
    //console.log(emeraldButton);
    //console.log(rubyButton);
    //console.log(sapphireButton);


    //When clicking the buttons do the following
    $(".buttons").on("click", function () {
        //store the id in a var crystal
        var crystal = $(this).attr("id");
        //comparison of crystal with var buttons on top to determine how much it is worth.
        //console.log(crystal);
        if (crystal == "diamond-button") {
            //add the var value to the score
            score += diamondButton;
        } else if (crystal == "emerald-button") {
            score += emeraldButton;
        } else if (crystal == "ruby-button") {
            score += rubyButton;
        } else if (crystal == "sapphire-button") {
            score += sapphireButton;
        }
        //console.log(score);
        //check to see if the score has reached the randonNumber
        if (score === randomNumber) {
            $("#result-message").html("You Win!");
            wins++;
            $("#wins-total").html("Wins: " + wins);

            //RESET THE randonNumber, Score, and the buttons values

            //Variable that will hold the value of the number the user needs to reach.
            randomNumber = Math.floor((Math.random() * 101) + 19);
            $("#random-number").html(randomNumber);
            //Variable that will hold the total score.
            score = 0;
            $("#score").html(score);
            //Variables that will hold the value of each Crystal Button.
            diamondButton = Math.floor((Math.random() * 12) + 1);
            emeraldButton = Math.floor((Math.random() * 12) + 1);
            rubyButton = Math.floor((Math.random() * 12) + 1);
            sapphireButton = Math.floor((Math.random() * 12) + 1);
            //console.log(diamondButton);
            //console.log(emeraldButton);
            //console.log(rubyButton);
            //console.log(sapphireButton);

        } else if (score > randomNumber) {
            $("#result-message").html("You Lose!");
            losses++;
            $("#losses-total").html("Losses: " + losses);

            //RESET THE randonNumber, Score, and the buttons values

            //Variable that will hold the value of the number the user needs to reach.
            randomNumber = Math.floor((Math.random() * 101) + 19);
            $("#random-number").html(randomNumber);
            //Variable that will hold the total score.
            score = 0;
            $("#score").html(score);
            //Variables that will hold the value of each Crystal Button.
            diamondButton = Math.floor((Math.random() * 12) + 1);
            emeraldButton = Math.floor((Math.random() * 12) + 1);
            rubyButton = Math.floor((Math.random() * 12) + 1);
            sapphireButton = Math.floor((Math.random() * 12) + 1);
            //console.log(diamondButton);
            //console.log(emeraldButton);
            //console.log(rubyButton);
            //console.log(sapphireButton);

        } else {
            //print the score on the html.
            $("#score").html(score);
        }
    });


});