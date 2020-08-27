const expect = require('chai').expect;

describe('checkForShip',function(){
  let checkForShip = require('../game_logic/ship_methods').checkForShip;
  player = {
    ships: [
      {
        locations: [[0,0],[0,1],[0,2]]
      }
    ]
  };

  it('should correctly report no ship at a given players coordinate', function () {
    expect(checkForShip(player,[9,9])).to.be.false;
  });
  it('...even with one common coordinate (i.e., a near-miss)', function () {
    expect(checkForShip(player,[1,0])).to.be.false;
  });
  it('should correctly report yes ship at a given players coordinate', function () {
    expect(checkForShip(player,[0,0])).to.be.true;
  });
  it('should correctly report yes ship for different coordinates', function () {
    expect(checkForShip(player,[0,2])).to.be.true;
  });

});