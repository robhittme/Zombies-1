$(document).ready(function(){

$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");
	var hours = Number($(".sleepSelect").val());
	var varSleep = new Sleep(hours);
	var cups = Number($(".coffeeSelect").val());
	var varCoffee= new Coffee(cups);
	var difficulty = $(".classroomSelect").val();
	var varClassroom = new Classroom(difficulty);

 
var varLife =(varSleep.life + varCoffee.life + varClassroom.life) 
console.log(varSleep.life);
console.log(varCoffee.life);
console.log(varClassroom.life);
$(".results").append("<li>" + varLife + "</li>");
});

});
