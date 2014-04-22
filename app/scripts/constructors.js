
function Sleep(hours){
	this.hours = (hours) * 10;
	this.life = this.hours;
}
function Classroom(difficulty){
	this.difficulty = function(){
		if(difficulty === 'easy'){
<<<<<<< HEAD
			this.life = (this.life) - 20;
		return this.life;
		}
=======
			this.life = this.life - 20;
	}

>>>>>>> upstream/master
		if(difficulty === 'intermediate'){
			this.life = this.life - 40;	
		}
		if(difficulty === 'hard'){
			this.life = this.life - 60;	
		}
	}
	this.life= difficulty;
}


function Coffee(cups) {
	this.cups = (cups) * 5;
	this.life = this.cups;
}
