$(".btn").click(function(e) {
	e.preventDefault();
	console.log("im working");
	var hours = $(".sleepSelect").val();
	var varSleep = new Sleep(hours);
	var cups = $(".coffeeSelect").val();
	var varCoffee= new Coffee(cups);
	var difficulty = $(".classroomSelect").val();
	var varClassroom = new Classroom(difficulty);

 

varLife= (varSleep.life + varCoffee.life + varClassroom.life);
$(".results").append("<li>" + varLife + "</li>");
});