import sudoku from 'sudoku-umd';

export const initializeBoardArray = (puzzleString)=>{
    return puzzleString.split('').map((char,index)=>({
        id:index,
        value:char === '.'?'':char,
        isInitial: char !== '.',
    }))
}

export const convertArrayToPuzzleString = (boardArray)=>{
    return boardArray.map(cell => {
        if (cell.value === '') return '.';

        const value = Array.isArray(cell.value) ? cell.value.join('') : String(cell.value);
        return value;
    }).join('');
}

export const evaluateBoard = (currentBoard,initialBoardString)=>{
    const currentString = convertArrayToPuzzleString(currentBoard);
    const correctSolution = sudoku.solve(initialBoardString);
    
    if(currentString.includes('.'))
        return 'Incomplete Board';
    if(currentString === correctSolution)
        return 'correct! You won!';
    return 'Incorrect numbers present';
};