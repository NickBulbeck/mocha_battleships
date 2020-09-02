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
    expect(checkForShip(playerWithOneShip,[0,0])).to.deep.equal(playerWithOneShip.ships[0]);
  });
  it('should correctly report yes ship for different coordinates', function () {
    expect(checkForShip(playerWithOneShip,[0,2])).to.deep.equal(playerWithOneShip.ships[0]);
  });

  it('should correctly report no ship at a blank location for multiple ships', function () {
    expect(checkForShip(playerWithMultipleShips,[9,9])).to.be.false;
  });
  it('should correctly report yes ship for multiple ships', function () {
    expect(checkForShip(playerWithMultipleShips,[4,4])).to.deep.equal(playerWithMultipleShips.ships[1]);
  });
});

describe('damageShip', function() {
  let damageShip = require('../game_logic/ship_methods').damageShip;
  let ship = {
    locations: [[0,0]],
    damage: []
  }
  it('should register damage on a given ship at a given location', function() {
    damageShip(ship,[0,0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage).to.deep.include([0,0]);
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });

});

describe('fire', function() {
  let fire = require('../game_logic/ship_methods').fire;
  it('should record damage on the given players ship at a given coordinate', function() {
    const player = {
      ships: [
              {
                locations: [[0,0]],
                damage: []
              }
              ]
    };
    fire(player,[0,0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0,0]);  
  })
  it('should NOT record damage if there is no ship at a given coordinate', function() {
    const player = {
      ships: [
              {
                locations: [[0,0]],
                damage: []
              }
              ]
    };
    fire(player,[0,1]);
    fire(player,[1,0]);
    fire(player,[1,1]);
    expect(player.ships[0].damage).to.be.empty;  
  })

});

