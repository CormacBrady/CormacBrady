var expect = require('chai').expect;
var Rover = require('../src/Rover.js')

describe('Unit test', ()=>{
  it('Rover Constructor ' , ()=> {
      const inputdata = ['5,5' , '1 2 N' , 'LMLMLMLMM'];
      const expectedx = '1';
      const expectedy = '2';
      const expectedorientation = 'N';
      const rover = new Rover(inputdata[1]);
      expect(rover.x).equal(expectedx);
      expect(rover.y).equal(expectedy);
      expect(rover.orientation).equal(expectedorientation);
  })

  it('Rover Move ' , ()=> {
      const inputdata = ['5,5' , '1 2 N' , 'LMLMLMLMM'];
      const actual = '1 3';
      const rover = new Rover(inputdata[1]);
      rover.move('LMLMLMLMM')
      expect(rover.x).to.equal('1');
      expect(rover.y).to.equal('3');
  })
})
