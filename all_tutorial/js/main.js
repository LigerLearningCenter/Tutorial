$(document).ready(function() {
    $("#click-here").bind("click", function(event) {
        $("#page-2").show();
        $(".page-1").hide();
        $(".money").show();
        $("#page-2Next").show();
    });
    $("#page-2Next").bind("click", function(event) {
        $(".page-3").show();
        $( "page-4Next" ).show();
        $("#page-2Next").hide();
    });
    $( "#page-4Next" ).bind( "click", function(event){
    	$( ".page-4" ).show();
    	$( ".page-3").hide();
    	$( ".menubar" ).show();

    });
});




//Pausing Icon
$("#pause").click(function() {
    console.log("click");
    if ($(this).attr("data-selected") == "false") {
        $(this).attr("src", "img/ICONS/navagation/auto-play-white-small.png");
        $(this).attr("data-selected", "true");
    } else {
        $(this).attr("src", "img/ICONS/navagation/pause-white-small.png");
        $(this).attr("data-selected", "false");
    }
});


// //3rd Page code 
// 	//Changing the point number 
// function convertToK(){
// 	var moneyReal = document.getElementById("moneyInTheBank").innerHTML;
// 	var moneyDisplay = "";
// 	moneyReal = parseInt(moneyReal);

// 	if (moneyReal > 1000) {
// 		var round = moneyReal/1000;
// 		console.log(round);
// 		moneyDisplay = (round.toString() + "K");
// 		document.getElementById("moneyInTheBank").innerHTML = moneyDisplay;
// 	}else{
// 		document.getElementById("moneyInTheBank").innerHTML = moneyReal;
// 	}
// }
// window.onload = convertToK;

// //6th Page code
// 	//Get ting time 
// var time = new Date();
// var date = time.getDate();
// var month = time.getMonth();
// var year = time.getFullYear();

// var view = document.getElementById("timeZone").innerHTML = date + "." + month + "." + year;
// window.onload = convertToview;