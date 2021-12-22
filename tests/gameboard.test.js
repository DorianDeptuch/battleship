const { gameboard } = require("../factories/gameboard");
const { createShip } = require("../factories/ship");

describe("testing thee gameboard functions", () => {
  const gameboardMock = gameboard(false);
  const patrol = createShip(2, ["O", "O"], [1, 2]);
  const player = test("should have gameOver set to false", () => {
    expect(gameboardMock.gameOver()).toBe(false);
  });

  test("should place ship to location [1,2]", () => {
    expect(gameboardMock.placeShip(patrol, [1, 2])).toBe(patrol.boardLocation);
  });

  // test("should hit the ship", () => {
  //   expect(gameboardMock.recieveAttack(2)).toBe(patrol.hitLocation[2]);
  // });

  // test("should miss the ship and place inside MissedAttacks", () => {
  //   expect(gameboardMock.recieveAttack(3)).toBe(gameboardMock.missedAttacks(3));
  // });
});
