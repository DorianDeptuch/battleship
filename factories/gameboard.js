const { createShip } = require("./ship");
const patrol = createShip(2, ["O", "O"], [1, 2]);
const player = { shipsRemaining: 5 };

function gameboard(gameOver) {
  return {
    gameOver() {
      if ((player.shipsRemaining = 0)) {
        return true;
      } else {
        return false;
      }
    },
    createGrid() {
      let board = Array(10)
        .fill("O")
        .map(() => Array(10).fill("O"));
      return board;
    },
    placeShip(ship, coords) {
      ship.boardLocation = coords;
      return ship.boardLocation;
    },
    recieveAttack(ship, coords) {
      if (ship.boardLocation.includes(coords)) {
        ship.hit(coords);
        return coords;
      } else {
        this.missedAttacks(coords);
        return coords;
      }
    },
    missedAttacks(coords) {
      let missedAttacks = [];
      missedAttacks.push(coords);
      return missedAttacks;
    },
  };
}

exports.gameboard = gameboard;
