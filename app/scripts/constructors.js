
function Sleep(hours){
	this.hours = (hours) * 10;
	this.life = this.hours;
}
function Classroom(difficulty){
	this.difficulty = function(){
		if(difficulty === 'easy'){
			this.life = (this.life) - 20;
		return this.life;
		}
		if(difficulty === 'intermediate'){
			this.life = (this.life) - 40;
			return this.life;
		}
		if(difficulty === 'hard'){
			this.life = (this.life) - 60;
			return this.life;
		}
	}
	
}


function Coffee(cups) {
	this.cups = (cups) * 5;
	this.life = this.cups;
}