//3th Page code 
	//Changing the point number 
function convertToK(){
	var moneyReal = document.getElementById("moneyInTheBank").innerHTML;
	var moneyDisplay = "";
	moneyReal = parseInt(moneyReal);
	
	if (moneyReal > 1000) {
		var round = moneyReal/1000;
		console.log(round);
		moneyDisplay = (round.toString() + "K");
		document.getElementById("moneyInTheBank").innerHTML = moneyDisplay;
	}else{
		document.getElementById("moneyInTheBank").innerHTML = moneyReal;
	}
}
window.onload = convertToK;