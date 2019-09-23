import React, { useState } from "react";
import "./App.css";
import Table from "./table/table";

function App() {
  const initialGameField = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  const [gameField, setGameField] = useState(initialGameField);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  function move(columnID) {
    const index = gameField[columnID].findIndex(el => el === 0);
    gameField[columnID][index] = currentPlayer + 1;
    setGameField(gameField);
    isGameOver(gameField);
    setCurrentPlayer((currentPlayer + 1) % 2);
  }

  function isGameOver(gameField) {
    for (let i = 0; i < gameField.length; i++) {
      let count = 0;
      for (let j = 1; j < gameField[i].length; j++) {
        if (gameField[j][i] !== 0 && gameField[j][i] === gameField[j - 1][i]) {
          count += 1;
          if (count === 3) setGameOver(true);
        } else count = 0;
      }
    }
  }

  function newGame() {
    setGameOver(false);
    setGameField(initialGameField);
  }

  return (
    <div className="App">
      {gameOver ? (
        <>
          <h1>Game Over</h1>
          <h2>Игрок {currentPlayer} потерпел поражение</h2>
        </>
      ) : (
        <>
          <h2>Ход игрока: {currentPlayer}</h2>
          <Table
            onColumnPress={move}
            field={gameField}
            currentPlayer={currentPlayer}
          />
        </>
      )}
      <button onClick={newGame}> New Game </button>
    </div>
  );
}

export default App;
