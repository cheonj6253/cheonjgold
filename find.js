$(document).ready(function() {
    $("#item").keyup(function() {
        var k = $(this).val();
        $("#items > div").hide();
        var temp = $("#items > div:contains('" + k + "')");

        $(temp).show();
    })
})