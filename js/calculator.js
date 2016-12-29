$(document).ready(function () {
    var totalString = "";
    $('button').on("click", function () {
        if (this.value === "AC") {
            totalString = "";
            $('#calcWin').val('0');
        }
        else {
            totalString += this.value;
            $('#calcWin').val(totalString);
        }
        console.log(totalString);
        
    });
    $('#loadWin').addClass('hidden');
    $('#mainWin').removeClass('hidden');
    $('#errWin').addClass('hidden');
    console.log("ready!");
});