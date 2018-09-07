$(document).ready();

var testTime = 5;
var intervalId;
var converted;
var corCount = 0;

function beginTest() {
    intervalId = setInterval(decrease, 1000);
    if (testTime == 0) {
        alert("Test time is up! Check your results by pressing the Results button ")
    }
}

function decrease() {
    testTime--;
    $("#timerTag").text(converted);
    // this if-else ensures proper time display
    if ((testTime > 60) && (testTime < 120) && (testTime - 60 >= 10)) {
        converted = "01:" + (testTime - 60); 
    } else if ((testTime > 60) && (testTime < 120) && (testTime - 60 < 10)) {
        converted = "01:0" + (testTime - 60);
    } else if ((testTime < 60) && (testTime > 10)) {
        converted = "00:" + testTime;
    } else if ((testTime < 10) && (testTime > 0)) {
        converted = "00:0" + testTime;
    } else if (testTime <= 0) {
        // $("#timerTag").text("00:00");
        converted = "Time's Up!";
    }
}

function results() {
    alert("Let's look at your results!")

    if (($('input[id="correct1"]:checked').val())) {
        console.log("You answered question 1 correctly!")
        corCount++;
    } else {
        console.log("Not Quite!")
    }

    if (($('input[id="correct2"]:checked').val())) {
        console.log("You answered question 2 correctly!")
        corCount++;
    } else {
        console.log("Not Quite!")
    }

    if (($('input[id="correct3"]:checked').val())) {
        console.log("You answered question 3 correctly!")
        corCount++;
    } else {
        console.log("Not Quite!")
    }

    if (corCount == 3) {
        alert("100% Correct!")
    } else if (corCount == 2) {
        alert("Around 66% Correct!")
    } else if (corCount == 1) {
        alert("Around 33% Correct")
    } else if (corCount == 0) {
        alert("Better luck next time!")
    }
};
        