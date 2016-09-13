function Rover (inputdata){
  this.x = inputdata.split(' ')[0];
  this.y = inputdata.split(' ')[1];
  this.orientation = inputdata.split(' ')[2];
}

Rover.prototype.move = function (movements) {
const movementsArray = movements.split('');
for (var i = 0 ; i < movementsArray.length ; i++){
movementsArray[i] === 'M' ? this.moveOne()  :  this.changeOrientation(movementsArray[i]) ;


}
};


Rover.prototype.moveOne = function () {

  console.log("MOVE ONE!!!!!")
  if (this.orientation === 'N'){
   this.y++;
  }

  if (this.orientation === 'E'){
   this.x++;
  }

  if (this.orientation === 'S'){
   this.y--;
  }

  if (this.orientation === 'W'){
   this.x--;
  }


}







Rover.prototype.changeOrientation = function (direction) {
console.log("Change Orientation!!!!!")
if (direction === 'L'){
  if(this.orientation === 'N'){

  this.orientation = 'W';

  }

  if(this.orientation === 'E'){

  this.orientation = 'N';

  }

  if(this.orientation === 'S'){

  this.orientation = 'E';

  }

  if(this.orientation === 'W'){

  this.orientation = 'S';

  }


} // deals with left end

if (direction === 'R'){
  if(this.orientation === 'N'){

  this.orientation = 'E';

  }

  if(this.orientation === 'E'){

  this.orientation = 'S';

  }

  if(this.orientation === 'S'){

  this.orientation = 'W';

  }

  if(this.orientation === 'W'){

  this.orientation = 'N';

  }


} // deals with right end







} // end of method
module.exports = Rover;
