let {localStorage} = window

const LocalStorage = {
  // sudoku problem
  getSudoku () {
    let sudoku = localStorage.getItem('sudoku')
    if (sudoku) {
      return JSON.parse(sudoku)
    }
  },
  putSudoku (sudoku) {
    localStorage.setItem('sudoku', JSON.stringify(sudoku))
  },
  clearSudoku () {
    localStorage.removeItem('sudoku')
  },

  // sudoku difficulty
  getDifficulty () {
    let difficulty = localStorage.getItem('difficulty')
    if (difficulty) {
      return difficulty
    }
  },
  putDifficulty (difficulty) {
    localStorage.setItem('difficulty', difficulty)
  },
  clearDifficulty () {
    localStorage.removeItem('difficulty')
  }
}

export default LocalStorage
