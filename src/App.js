import React, { useState } from "react";

import Board from "./components/Board";
import "./index.css";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let [count,setCount]=useState(0);
  const handleClick = i => {
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setSquares(squares);
    setXIsNext(!xIsNext);
    setCount(count+1);
    console.log(count);
  };

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else if(count===9){
    status="Draw";
  }
  else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={i => handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
  );
}

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

  }
  return null;
}

