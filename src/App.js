import React, {useState, useEffect} from 'react';
import sudoku from 'sudoku-umd';
import Controls from './components/Control';
import Grid from './components/Grid';
import Status from './components/Status';
import { initializeBoardArray,evaluateBoard } from './utils/BoardHelper';
import './App.css';

function App() {
  const [rawPuzzleStr, setRawPuzzleStr] = useState('');
  const [boardArray,setBoardArray] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const startNewGame = (difficulty = 'easy')=> {
    const puzzleString = sudoku.generate(difficulty);
    setRawPuzzleStr(puzzleString);
    setBoardArray(initializeBoardArray(puzzleString));
    setGameStatus('playing');
  };

  useEffect(()=>{
    startNewGame('easy')
  }, []);

  const handleCellChange = (index, value)=>{
    if (value !== '' && !/^[1-9]$/.test(value)) return;

    setBoardArray(prevBoard =>{
      const updated = [...prevBoard];
      updated[index] = {...updated[index], value};
      return updated;
    });
  };

  const handleValidation = () =>{
    const outcomeMessage  = evaluateBoard(boardArray,rawPuzzleStr);
    setGameStatus(outcomeMessage);    
  }

  const handleReset = () =>{
    setBoardArray(initializeBoardArray(rawPuzzleStr));
    setGameStatus('playing');
  };

  return (
    <div className="game-container">
      <h1>React Sudoku</h1>
      <Controls onStartGame={startNewGame}
      onValidate = {handleValidation}
      onReset={handleReset}/>

      <Grid board = {boardArray}
      onCellChange={handleCellChange} />

      <Status message = {gameStatus}>
        
      </Status>

    </div>
  )
 
}

export default App;
