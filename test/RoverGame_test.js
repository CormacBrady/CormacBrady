var expect = require('chai').expect;
var RoverGame = require('../src/roverGame.js')

describe('Unit test', ()=>{
  it('RoverGame' , ()=> {
      const inputdata = ['5,5' , '1 2 N' , 'LMLMLMLMM'];
      const expected = '5';
      const game = new RoverGame(inputdata[0]);
      expect(game.max_x).equal(expected);
      expect(game.max_y).equal(expected);
  })
})
