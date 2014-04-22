

function Sleep(hours){
	this.hours = (hours) * 10;
	this.life = this.hours;
}
function Classroom(){
	this.difficulty = function(difficulty, sleepInstance){
		if(difficulty === 'easy'){
			sleepInstance.life = sleepInstance.life - 20;
	}
 
		if(difficulty === 'intermediate'){
			sleepInstance.life = sleepInstance.life - 40;	
		}
		if(difficulty === 'hard'){
			sleepInstance.life = sleepInstance.life - 60;	
		}
	}
}
 
 
function Coffee(cups) {
	this.cups = (cups) * 5;
	this.life = this.cups;
}