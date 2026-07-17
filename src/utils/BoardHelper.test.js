import sudoku from 'sudoku-umd';
import { initializeBoardArray, convertArrayToPuzzleString, evaluateBoard } from './BoardHelper';

describe('BoardHelper', () => {
  describe('convertArrayToPuzzleString', () => {
    it('converts a board array with string cell values into a puzzle string', () => {
      const board = [
        { id: 0, value: '5', isInitial: true },
        { id: 1, value: '3', isInitial: false },
        { id: 2, value: '', isInitial: false },
      ];

      expect(convertArrayToPuzzleString(board)).toBe('53.');
    });
  });

  describe('evaluateBoard', () => {
    let puzzleString;
    let solutionString;

    beforeAll(() => {
      puzzleString = sudoku.generate('easy');
      solutionString = sudoku.solve(puzzleString);
      if (!solutionString || typeof solutionString !== 'string') {
        throw new Error('Failed to generate a solvable puzzle for tests');
      }
    });

    it('returns Incomplete Board for a board with blank cells', () => {
      const board = initializeBoardArray(puzzleString);

      expect(evaluateBoard(board, puzzleString)).toBe('Incomplete Board');
    });

    it('returns correct! You won! for a fully solved board', () => {
      const board = initializeBoardArray(solutionString);

      expect(evaluateBoard(board, puzzleString)).toBe('correct! You won!');
    });

    it('returns Incorrect numbers present for a completed board with a wrong value', () => {
      const board = initializeBoardArray(solutionString).map(cell => ({ ...cell }));
      board[0] = { ...board[0], value: board[0].value === '1' ? '2' : '1' };

      expect(evaluateBoard(board, puzzleString)).toBe('Incorrect numbers present');
    });
  });
});
