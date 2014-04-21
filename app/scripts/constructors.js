function Sleep(hours){
	this.hours = (hours) * 10;
}
function Classroom(difficulty){
	this.difficulty = function(){
		if(difficulty === 'easy'){
			this.life = this.life - 20;
		}
		if(difficulty === 'intermediate'){
			this.life = this.life - 40;
		}
		if(difficulty === 'hard'){
			this.life = this.life - 60;
		}
	}
}


function Coffee(cups) {
	this.cups = cups;
	this.life = this.life + (cups*5);
}