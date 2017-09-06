'use strict';


function cards(face, value, suit){
	this.face = face;
	this.value = value;
	this.suit = suit;
}

function deck(){
	var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
	var value = [1,2,3,4,5,6,7,8,9,10];
	var face = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
	this.contents = [];
	for(var i = 0; i < 4; i++){
		for(let j = 0; j < face.length; j++){
			for(var x = 0; x< face.length; x++){
				face[x]=value[x+1];
				
			}
			let new_card = new card(suit[i], face[j], value)
			this.contents.push(new_card);
		}
	}

}