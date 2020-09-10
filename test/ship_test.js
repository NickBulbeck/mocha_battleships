const expect = require('chai').expect;

describe('checkForShip',function(){
  let checkForShip = require('../game_logic/ship_methods').checkForShip;
  var player;
  // setup: functions that have NO side-effects can use a mock variable set up once.
  // Functions that do have side-effects need their own mock variables.
  before(function() { // 'before' has a single argument
    player = {
      ships: [
        {
          locations: [[0,0],[0,1],[0,2]],
          damage: []
        },
        {
          locations: [[3,4],[4,4],[5,4]],
          damage: []
        },
        {
          locations: [[6,2],[6,3],[6,4],[6,5]],
          damage: []
        }
      ],
    };
  });

  it('should correctly report no ship at a given players coordinate', function () {
    expect(checkForShip(player,[9,9])).to.be.false;
  });
  it('...even with one common coordinate (i.e., a near-miss)', function () {
    expect(checkForShip(player,[1,0])).to.be.false;
  });
  it('should correctly report yes ship at a given players coordinate', function () {
    expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
  });
  it('should correctly report yes ship for different coordinates', function () {
    expect(checkForShip(player,[0,2])).to.deep.equal(player.ships[0]);
  });

  it('should correctly report no ship at a blank location for multiple ships', function () {
    expect(checkForShip(player,[9,9])).to.be.false;
  });
  it('should correctly report yes ship for multiple ships', function () {
    expect(checkForShip(player,[4,4])).to.deep.equal(player.ships[1]);
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
  beforeEach(function() { // 'before' has a single argument
    player = {
      ships: [
        {
          locations: [[0,0],[0,1],[0,2]],
          damage: []
        },
        {
          locations: [[3,4],[4,4],[5,4]],
          damage: []
        },
        {
          locations: [[6,2],[6,3],[6,4],[6,5]],
          damage: []
        }
      ],
    };
  });
  after(function() {                                      // We don't really need after() in this case.
    console.log("Complete 'fire' test-suite completed");  // A better use for it is when your functions have
  });                                                     // significant side-effects, such as overwriting a
  afterEach(function() {                                  // database or altering the DOM.
    console.log("That's one 'fire' test...");             
  });

  let fire = require('../game_logic/ship_methods').fire;
  it('should record damage on the given players ship at a given coordinate', function() {
    fire(player,[0,0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0,0]);  
  })
  it('should NOT record damage if there is no ship at a given coordinate', function() {
    fire(player,[7,7]);
    fire(player,[8,7]);
    fire(player,[9,7]);
    expect(player.ships[0].damage).to.be.empty;  
    expect(player.ships[1].damage).to.be.empty;  
    expect(player.ships[2].damage).to.be.empty;  
  })

});

