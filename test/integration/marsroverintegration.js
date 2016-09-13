var expect = require('chai').expect;
var RoverGame = require('../../src/roverGame.js')
var Rover = require('../../src/Rover.js')

describe('Integration tests', ()=>{
  it('it should calculate our rovers position based on inputs',()=>{
    //setup
    const inputdata = ['5,5' , '1 2 N' , 'LMLMLMLMM']
    const actual = '1 3';

    //exercise
    const game = new RoverGame(inputdata[0]);
    const rover = new Rover(inputdata[1])
    game.addRover(rover);

    expect(game.rovers[0].move('LMLMLMLMM')).to.equal(actual);

  })
})
