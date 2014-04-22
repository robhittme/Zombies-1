
function Sleep(hours){
	this.hours = (hours) * 10;
	this.life = this.hours;
}
function Classroom(difficulty){
	this.difficulty = function(){
		if(difficulty === 'Easy'){
			this.life = this.life - 20;
		}
		if(difficulty === 'Intermediate'){
			this.life = this.life - 40;	
		}
		if(difficulty === 'Hard'){
			this.life = this.life - 60;	
		}
	};
	this.life = difficulty;
}


function Coffee(cups) {
	this.cups = (cups) * 5;
	this.life = this.cups;
}
