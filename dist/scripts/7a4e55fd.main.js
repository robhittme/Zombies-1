function Sleep(a){this.hours=15*a,this.life=this.hours}function Classroom(){this.difficulty=function(a,b){"easy"===a&&(b.life=b.life-10),"intermediate"===a&&(b.life=b.life-20),"hard"===a&&(b.life=b.life-30)}}function AssignmentDifficulty(){this.levelOfToughness=function(a,b){"easy"===a&&(b.life=b.life-15),"intermediate"===a&&(b.life=b.life-30),"hard"===a&&(b.life=b.life-45)}}function Coffee(a){this.cups=5*a,this.life=this.cups}function Energydrink(a){this.cans=5*a,this.life=this.cans}function Snacks(a){this.amount=3*a,this.life=this.amount}$(document).ready(function(){$(".btn").click(function(a){a.preventDefault(),console.log("im working");var b=Number($(".sleepSelect").val()),c=new Sleep(b),d=Number($(".coffeeSelect").val()),e=new Coffee(d),f=Number($(".energySelect").val()),g=new Energydrink(f),h=Number($(".snackSelect").val()),i=new Snacks(h),j=$(".classroomSelect").val(),k=new Classroom;k.difficulty(j,c),console.log(c.life);var l=$(".assignmentSelect").val(),m=new AssignmentDifficulty;m.levelOfToughness(l,c),console.log(c.life);var n=e.life+c.life+g.life+i.life;console.log(e.life),console.log(k.life),console.log(g.life),console.log(i.life),$(".results").children().remove(),$(".results").append("<li>"+n+"</li>"),30>=n&&$(".alert").text("Your alertness is low, you should get some sleep, get food, or a drink!")});var a=_.template($("#aboutInfo").html(),aboutData);$(".col-lg-5").append(a)});