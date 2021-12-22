function computer() {
  return {
    listOfAttacks = [],
    sendAttack() {
      let outerArray = Math.floor(Math.random() * 10);
      let innerArray = Math.floor(Math.random() * 10);
      let coordinate = [outerArray][innerArray];
      if (this.listOfAttacks.includes(coordinate)){
        this.sendAttack();
      }else {
        this.listOfAttacks.push(coordinate)
        return coordinate;
      }
    },
  };
}
