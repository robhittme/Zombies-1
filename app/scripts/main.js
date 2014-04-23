$(document).ready(function() {
$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");
	var hours = Number($(".sleepSelect").val());
	var varSleep = new Sleep(hours);
	
	var cups = Number($(".coffeeSelect").val());
	var varCoffee= new Coffee(cups);
	
	var difficulty = $(".classroomSelect").val();
	var varClassroom = new Classroom() 
	varClassroom.difficulty(difficulty, varSleep);
	console.log(varSleep.life);

var varLife=(varCoffee.life + varSleep.life);
console.log(varCoffee.life);
console.log(varClassroom.life);
$(".results").children().remove();
$(".results").append("<li>" + varLife + "</li>");

});

var aboutTemplate = _.template ($('#aboutInfo').html(),(aboutData));
				$('.jumbotron').append(aboutTemplate);







