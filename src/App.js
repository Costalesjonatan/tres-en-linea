import { useState } from 'react';

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [actualPlayer, setActualPlayer] = useState(1)

  function handleClick(index) {
    if(squares[index] == null) {
      const nextSquares = squares.slice();

      if(actualPlayer == 1) {
        nextSquares[index] = "X";
        setActualPlayer(2)
      } else if(actualPlayer == 2) {
        nextSquares[index] = "O";
        setActualPlayer(1)
      } else {
        console.log("Unknown player.")
      }

    setSquares(nextSquares);
    }
  }

  function handleRestartClick() {
    setSquares(Array(9).fill(null))
    setActualPlayer(1)
  }

  return (
    <>
     <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div>
        <Restart onRestartClick={handleRestartClick} />
      </div>
    </>
  );
}

function Square({value, onSquareClick}) {
  return ( 
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button> 
  );
}

function Restart({onRestartClick}) {
  return (
    <button
      onClick={onRestartClick}
    >
      Restart
    </button> 
  );
}