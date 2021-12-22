const { gameboard } = require("./gameboard");

function player() {
  return {
    shipsRemaining: 5,
    sendAttack(coord) {
      gameboard.recieveAttack(coord);
      return coord;
    },
  };
}
