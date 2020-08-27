const expect = require('chai').expect;

describe('checkForShip',function(){
  let checkForShip = require('../game_logic/ship_methods').checkForShip;
  playerWithOneShip = {
    ships: [
      {
        locations: [[0,0],[0,1],[0,2]]
      }
    ]
  };

  playerWithMultipleShips = {
    ships: [
      {
        locations: [[0,0],[0,1],[0,2]]
      },
      {
        locations: [[3,4],[4,4],[5,4]]
      },
      {
        locations: [[6,2],[6,3],[6,4],[6,5]]
      }
    ]
  };


  it('should correctly report no ship at a given players coordinate', function () {
    expect(checkForShip(playerWithOneShip,[9,9])).to.be.false;
  });
  it('...even with one common coordinate (i.e., a near-miss)', function () {
    expect(checkForShip(playerWithOneShip,[1,0])).to.be.false;
  });
  it('should correctly report yes ship at a given players coordinate', function () {
    expect(checkForShip(playerWithOneShip,[0,0])).to.be.true;
  });
  it('should correctly report yes ship for different coordinates', function () {
    expect(checkForShip(playerWithOneShip,[0,2])).to.be.true;
  });

  it('should correctly report no ship at a blank location for multiple ships', function () {
    expect(checkForShip(playerWithMultipleShips,[9,9])).to.be.false;
  });
  it('should correctly report yes ship for multiple ships', function () {
    expect(checkForShip(playerWithMultipleShips,[4,4])).to.be.true;
  });
});

// should handle multiple ships