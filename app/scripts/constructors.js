
function Sleep(hours){
	this.hours = (hours) * 15;
	this.life = this.hours;
}

function Classroom(){
	this.difficulty = function(difficulty, sleepInstance){
		if(difficulty === 'easy'){
			sleepInstance.life = sleepInstance.life - 10;
	}
 
		if(difficulty === 'intermediate'){
			sleepInstance.life = sleepInstance.life - 20;	
		}
		if(difficulty === 'hard'){
			sleepInstance.life = sleepInstance.life - 30;	
		}
	}
}
function AssignmentDifficulty(){
	this.levelOfToughness = function(levelOfToughness, sleepInstance){
		if(levelOfToughness === 'easy'){
			sleepInstance.life = sleepInstance.life -15;
		}
		if(levelOfToughness === 'intermediate'){
			sleepInstance.life = sleepInstance.life -30;
		}
		if(levelOfToughness === 'hard'){
			sleepInstance.life = sleepInstance.life -45;
		}
	}
}

 
 
function Coffee(cups) {
	this.cups = (cups) * 5;
	this.life = this.cups;
}

function Energydrink(cans) {
	this.cans = (cans) * 5;
	this.life = this.cans;
}

function Snacks(amount) {
	this.amount = (amount) * 3;
	this.life = this.amount;
}