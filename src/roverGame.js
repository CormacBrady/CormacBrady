
function RoverGame (inputdata){
  this.max_x = inputdata.split(',')[0];
  this.max_y = inputdata.split(',')[1];
  this.rovers = [];
}

RoverGame.prototype.addRover = function (rover) {
  this.rovers.push(rover);
};

module.exports = RoverGame;
