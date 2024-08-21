import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [game, setGame] = useState(Array(9).fill(null));
  const [nextGame, setNextGame] = useState(true);

  const handleClick = (i) => {
    if (game[i] || calculateWinner(game)) return;
    const gameNew = game.map((tGame, index) =>
      index === i ? (nextGame ? "X" : "O") : tGame
    );
    setGame(gameNew);
    setNextGame(!nextGame);
  };

  const calculateWinner = (game) => {
    const winningPos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPos.length; i++) {
      const [a, b, c] = winningPos[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  };
  const draw = () =>{
    return game.filter(item => item !==null) && !calculateWinner(game)
  }
  const winner = calculateWinner(game);
  return (
    <>
      <div className="divMain">
        <div>
          <label className="heading">Tic-Tac-Toe</label>
        </div>
        <div className="TheInnerDiv">
          {game.map((thegame, i) => (
            <button
              key={i}
              className="btn"
              onClick={() => handleClick(i)}
            >
              {thegame}
            </button>
          ))}
        </div>
        {winner && <div className="result">Winner: {winner}</div>}
        {draw && !winner && <div className="result">It's a Draw</div>}
      </div>
    </>
  );
};

export default TicTacToe;
