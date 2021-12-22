const { createShip } = require("../factories/ship");

describe("testing ship functions", () => {
  const patrol = createShip(2, ["O", "O"], [1, 2]);
  const sunkPatrol = createShip(2, ["X", "X"], [1, 2]);

  beforeEach(() => {
    patrol.hitLocation = ["O", "O"];
  });

  test("should recieve an 'X' at given array index", () => {
    expect(patrol.hit(1)).toEqual(patrol.hitLocation[1]);
    expect(patrol.hit(0)).toEqual(patrol.hitLocation[0]);
  });

  test("should return false", () => {
    expect(patrol.isSunk()).toBe(false);
  });

  test("should return true", () => {
    expect(sunkPatrol.isSunk()).toBe(true);
  });

  test("boardLocation should be an array", () => {
    expect(patrol.boardLocation).toEqual([1, 2]);
  });
});
