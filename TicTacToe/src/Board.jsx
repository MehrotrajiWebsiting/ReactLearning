import { useState } from "react";
import Square from "./Square"
 
function Board(){    
    const [xIsNext,setX] = useState(true);
    const [squares,setSquares] = useState(Array(9).fill("-"))

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i){
        if(squares[i] != "-" || calculateWinner(squares)){
            return;
        }

        const tempSquares = squares.slice();
        tempSquares[i]= xIsNext ?'X':'O';

        setSquares(tempSquares);
        setX(!xIsNext);
    }

    return <>
        <div>
            <Square buttonClicked = {()=>handleClick(0)} value = {squares[0]}/>
            <Square buttonClicked = {()=>handleClick(1)} value = {squares[1]}/>
            <Square buttonClicked = {()=>handleClick(2)} value = {squares[2]}/>
        </div>
        <div>
            <Square buttonClicked = {()=>handleClick(3)} value = {squares[3]}/>
            <Square buttonClicked = {()=>handleClick(4)} value = {squares[4]}/>
            <Square buttonClicked = {()=>handleClick(5)} value = {squares[5]}/>
        </div>
        <div>
            <Square buttonClicked = {()=>handleClick(6)} value = {squares[6]}/>
            <Square buttonClicked = {()=>handleClick(7)} value = {squares[7]}/>
            <Square buttonClicked = {()=>handleClick(8)} value = {squares[8]}/>
        </div>
        <div>{status}</div>
    </>
}
function calculateWinner(squares) {
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
      if (squares[a]!="-" && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
export default Board;   