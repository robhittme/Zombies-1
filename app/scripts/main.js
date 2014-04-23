$(document).ready(function() {
$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");
	var hours = Number($(".sleepSelect").val());
	var varSleep = new Sleep(hours);
	
	var cups = Number($(".coffeeSelect").val());
	var varCoffee= new Coffee(cups);

	var cans = Number($(".energySelect").val());
	var varEnergyDrink = new Energydrink(cans);

	var amount = Number($(".snackSelect").val());
	var varSnacks = new Snacks(amount);

	var difficulty = $(".classroomSelect").val();
	var varClassroom = new Classroom() 

	varClassroom.difficulty(difficulty, varSleep);
	console.log(varSleep.life);

var varLife=(varCoffee.life + varSleep.life + varEnergyDrink.life + varSnacks.life);
console.log(varCoffee.life);
console.log(varClassroom.life);
console.log(varEnergyDrink.life);
console.log(varSnacks.life);
$(".results").children().remove();
$(".results").append("<li>" + varLife + "</li>");
	if (varLife <= 30) {
		alert("Your alertness is low, you should get some sleep, get food, or a drink!");
	}

});

var aboutTemplate = _.template ($('#aboutInfo').html(),(aboutData));
				$('.jumbotron').append(aboutTemplate);

});







