const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
var x = 0;
var y = 0;

var result = [];

const finalPosition = function(moves) {
  for(const move of moves){
    if(move === 'north'){
      y = y + 1;
    }
    else if(move === 'south'){
      y = y - 1;
    }
    else if(move === 'east'){
      x = x + 1;
    }
    else if(move === 'west'){
      x = x - 1;
    }
  }
}


finalPosition(moves);
result = [x,y]
console.log(result);
