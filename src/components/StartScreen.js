import React, { useState } from "react";
import Destroyer from "./ships/Destroyer";
import Battleship from "./ships/Battleship";
import Patrol from "./ships/Patrol";
import Carrier from "./ships/Carrier";
import Submarine from "./ships/Submarine";
import Gameboard from "./Gameboard";

function StartScreen() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  return (
    <div>
      <h1 className="battleship-title">Battleship</h1>
      <button>Press start to begin</button>
      <div className="boatBoard">
        <Destroyer onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
        <Battleship onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
        <Patrol onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
        <Carrier onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
        <Submarine onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
      </div>
      <div className="playerBoard">
        <Gameboard
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          isDragging={isDragging}
        />
      </div>
    </div>
  );
}

export default StartScreen;
