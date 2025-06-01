import { useState } from 'react';

export default function Game() {
  return (
    <>
      <Board />
    </>
  );
}

function Board() {
  //Pasar cosas a Game!
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [actualPlayer, setActualPlayer] = useState(1)
  const [boardState, setBoardState] = useState("PLAY")
  const [winner, setWinner] = useState("null")
  const [winnerSquares, setWinnerSquares] = useState(Array(3).fill(null))

  function handleClick(index) {
    if (squares[index] == null) {
      if (boardState == "PLAY") {
        const nextSquares = squares.slice();

        if (actualPlayer == 1) {
          nextSquares[index] = "X";
          setActualPlayer(2)
        } else if (actualPlayer == 2) {
          nextSquares[index] = "O";
          setActualPlayer(1)
        } else {
          console.log("Unknown player.")
        }

        const actualWinner = privateFunctionGetWinner(nextSquares)

        if (actualWinner[1] !== "NONE") {
          setBoardState("WINNER")
        } else if (nextSquares.filter(square => square === null).length === 0) {
          setBoardState("COMPLETE")
          console.log("Tablero completo")
        }

        setWinnerSquares(actualWinner[0])
        setWinner(actualWinner[1])
        setSquares(nextSquares);
      }
    }
  }

  function handleRestartClick() {
    setSquares(Array(9).fill(null))
    setActualPlayer(1)
    setBoardState("PLAY")
    setWinner(null)
    setWinnerSquares(Array(3).fill(null))
  }

  console.log(boardState)

  return (
    <div className='container'>
      <ActualPlayerView actuaPlayer={actualPlayer} />
      <div className='content'>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <ActualWinnerView winner={winner} />
      <NoWinnerView actualBoardState={boardState} />
      <Restart onRestartClick={handleRestartClick} />
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Restart({ onRestartClick }) {
  return (
    <div className='inner-content'>
      <button
        onClick={onRestartClick}
      >
        Restart
      </button>
    </div>
  );
}

function ActualPlayerView({ actuaPlayer }) {
  return (
    <div className='inner-content'>
      <p>
        Jugador actual: {actuaPlayer}
      </p>
    </div>
  );
}

function ActualWinnerView({ winner }) {
  if (winner !== "NONE" && winner !== null) {
    return (
      <div className='inner-content'>
        <p>
          Bien hecho Jugador {winner} has ganado!
        </p>
        <p>
          Si quieren jugar de nuevo presionen el botón restart...
        </p>
      </div>
    );
  } 
  return (
    <div className='inner-content'>
        <p>
                                                         
        </p>
        <p>
                                                       
        </p>
      </div>
  );
}

function NoWinnerView({ actualBoardState }) {
  if (actualBoardState === "COMPLETE") {
    return (
      <div className='inner-content'>
        <p>
          Empate!
        </p>
        <p>
          Si quieren jugar de nuevo presionen el botón restart...
        </p>
      </div>
    );
  }
}

const privateFunctionGetWinner = (squares) => {
  var winnerIndexs = Array(3).fill(null)
  var winner = "NONE"

  if (privateFunctionIsWinner(squares, 0, 1, 2, "X")) {
    winnerIndexs[0] = 0
    winnerIndexs[1] = 1
    winnerIndexs[2] = 2
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 0, 1, 2, "O")) {
    winnerIndexs[0] = 0
    winnerIndexs[1] = 1
    winnerIndexs[2] = 2
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 3, 4, 5, "X")) {
    winnerIndexs[0] = 3
    winnerIndexs[1] = 4
    winnerIndexs[2] = 5
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 3, 4, 5, "O")) {
    winnerIndexs[0] = 3
    winnerIndexs[1] = 4
    winnerIndexs[2] = 5
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 6, 7, 8, "X")) {
    winnerIndexs[0] = 6
    winnerIndexs[1] = 7
    winnerIndexs[2] = 8
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 6, 7, 8, "O")) {
    winnerIndexs[0] = 6
    winnerIndexs[1] = 7
    winnerIndexs[2] = 8
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 0, 4, 8, "X")) {
    winnerIndexs[0] = 0
    winnerIndexs[1] = 4
    winnerIndexs[2] = 8
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 0, 4, 8, "O")) {
    winnerIndexs[0] = 0
    winnerIndexs[1] = 4
    winnerIndexs[2] = 8
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 2, 4, 6, "X")) {
    winnerIndexs[0] = 2
    winnerIndexs[1] = 4
    winnerIndexs[2] = 6
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 2, 4, 6, "O")) {
    winnerIndexs[0] = 2
    winnerIndexs[1] = 4
    winnerIndexs[2] = 6
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 0, 3, 6, "X")) {
    winnerIndexs[0] = 0
    winnerIndexs[1] = 3
    winnerIndexs[2] = 6
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 0, 3, 6, "O")) {
    winnerIndexs[0] = 0
    winnerIndexs[1] = 3
    winnerIndexs[2] = 6
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 1, 4, 7, "X")) {
    winnerIndexs[0] = 1
    winnerIndexs[1] = 4
    winnerIndexs[2] = 7
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 1, 4, 7, "O")) {
    winnerIndexs[0] = 1
    winnerIndexs[1] = 4
    winnerIndexs[2] = 7
    winner = "O"
  } else if (privateFunctionIsWinner(squares, 2, 5, 8, "X")) {
    winnerIndexs[0] = 2
    winnerIndexs[1] = 5
    winnerIndexs[2] = 8
    winner = "X"
  } else if (privateFunctionIsWinner(squares, 2, 5, 8, "O")) {
    winnerIndexs[0] = 2
    winnerIndexs[1] = 5
    winnerIndexs[2] = 8
    winner = "O"
  }

  return [winnerIndexs, winner]
}

const privateFunctionIsWinner = (squares, indexOne, indexTwo, indexThree, value) => {
  return squares[indexOne] === value && squares[indexTwo] === value && squares[indexThree] === value
}