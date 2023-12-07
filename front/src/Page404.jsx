import React, { useEffect, useState } from "react";
import "./page404.scss";
import "./App.scss";

function Page404() {
  const [grid, setGrid] = useState([]);

  //we create a 10 x 7 grid
  const createGrid = () => {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      grid.push(new Array(10).fill(9));
    }
    return grid;
  };

  const pieces = {
    0: [
      [1, 1],
      [1, 1],
    ],
    1: [[1, 1, 1, 1]],
    2: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    3: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    4: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    5: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    6: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  };

  const generateRandomPiece = () => {
    const randomPiece = Math.floor(Math.random() * 7);
    return pieces[randomPiece];
  };


  const placePiece = (piece, grid) => {
    const newGrid = grid.map((row) => [...row]);
   //we are careful to place the piece in the middle of the grid
    const middle = Math.floor(newGrid[0].length / 2);
    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece[i].length; j++) {
        newGrid[i][middle + j] = piece[i][j];
      }
    }
    return newGrid;
  }

//start of the game
  useEffect(() => {
    const grid = createGrid();
    const piece = generateRandomPiece();
    const newGrid = placePiece(piece, grid);
    setGrid(newGrid);
  }, []);
  

  return (
    <div className="tetris">
      <div id="grid">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              className={cell === 9 ? "cell" : "block"}
              key={`${i}${j}`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page404;