import React from "react";
import Square from "./Square";
export default function Board({ squares, onClick }) {
    const renderSquares = numbs => {
        return numbs.map(num => (
            <Square value = { squares[num] }
            onClick = {
                () => onClick(num)
            }
            />
        ));
    };
    return ( <div>
        <div className = "board-row" > { renderSquares([0, 1, 2]) } </div>
            <div className = "board-row" > { renderSquares([3, 4, 5]) } </div>
            <div className = "board-row" > { renderSquares([6, 7, 8]) } </div>
    </div>
    );
}