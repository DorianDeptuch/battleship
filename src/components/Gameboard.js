import React, { useState, useEffect } from "react";

function Gameboard({ isDragging, handleDragStart, handleDragEnd }) {
  const [gameboard, setGameboard] = useState([]);

  useEffect(() => {
    setGameboard(
      Array(10)
        .fill(null)
        .map(() =>
          Array(10).fill(
            <div
              className="gameboard-square"
              onClick={handleTest}
              onDragOver={handleDragOver}
            ></div>
          )
        )
    );
  }, []);

  const handleDragOver = (event) => {
    // isDragging ? event.target.style.backgroundColor = 'green' : '';
    if (isDragging) {
      event.target.style.background = "green";
    } else {
      return;
    }
  };

  const handleTest = (event) => {
    console.log(gameboard.indexOf(event.target));
  };

  return <div className="gameboard">{gameboard}</div>;
}

export default Gameboard;
