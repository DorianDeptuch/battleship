function createShip(length, hitLocation, boardLocation = [1, 2]) {
  return {
    length,
    hitLocation,
    boardLocation,
    hit(number) {
      return (this.hitLocation[number] = "X");
    },
    isSunk() {
      if (hitLocation.every((location) => location === "X")) {
        return true;
      } else {
        return false;
      }
    },
  };
}

exports.createShip = createShip;
