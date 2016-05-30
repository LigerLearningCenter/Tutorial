$(document).ready(function() {
    $(".menubar").hide();

    //Will view Second
    $("#click-here").bind("click", function(event) {
        $("#page-2").show();
        $(".page-1").hide();
        $(".money").show();
        $("#page-2Next").show();
    });
    //Will view Third  
    $("#page-2Next").bind("click", function(event) {
        $(".page-3").show();
        $("page-3Next").show();
        $("#page-2Next").hide();
    });

    //Will view Fourth
    $("#page-3Next").bind("click", function(event) {
        $("#allArrow").show();
        $(".page-3").hide();
        $("#page-4Next").show();
        $(".menubar").show();
        $("header").show();
        $(".content").show();

    });
    //Will view Fifth
    $("#page-4Next").bind("click", function(event) {
        $("#allArrow").hide();
        $(".down").show();
        $("#page-4Next").hide();
        $("#page-5Next").show();


    });
    //Will view sixth
    $("#page-5Next").bind("click", function(event) {
        $(".business").hide();
        $(".show").show();
        $(".down").hide();
        $(".socialMood").show();
        $( "#topBarsDateCollection" ).show();
        $("#page-6Next").show();
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
//  //Changing the point number 
// function convertToK(){
//  var moneyReal = document.getElementById("moneyInTheBank").innerHTML;
//  var moneyDisplay = "";
//  moneyReal = parseInt(moneyReal);

//  if (moneyReal > 1000) {
//      var round = moneyReal/1000;
//      console.log(round);
//      moneyDisplay = (round.toString() + "K");
//      document.getElementById("moneyInTheBank").innerHTML = moneyDisplay;
//  }else{
//      document.getElementById("moneyInTheBank").innerHTML = moneyReal;
//  }
// }
// window.onload = convertToK;

// //6th Page code
//  //Get ting time 
// var time = new Date();
// var date = time.getDate();
// var month = time.getMonth();
// var year = time.getFullYear();

// var view = document.getElementById("timeZone").innerHTML = date + "." + month + "." + year;
// window.onload = convertToview;