// Display today's day and date
import moment from 'moment';

$("todaysDate").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    });

    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        });
    }

    // Get item from local storage if any
    $("#hour 5 .description").val(localStorage.getItem("hour 5"));
    $("#hour 6 .description").val(localStorage.getItem("hour 6"));
    $("#hour 7 .description").val(localStorage.getItem("hour 7"));
    $("#hour 8 .description").val(localStorage.getItem("hour 8"));
    $("#hour 9 .description").val(localStorage.getItem("hour 9"));
    $("#hour 10 .description").val(localStorage.getItem("hour 10"));
    $("#hour 11 .description").val(localStorage.getItem("hour 11"));
    $("#hour 12 .description").val(localStorage.getItem("hour 12"));
    $("#hour 13 .description").val(localStorage.getItem("hour 13"));
    $("#hour 14 .description").val(localStorage.getItem("hour 14"));

    timeTracker();
});
