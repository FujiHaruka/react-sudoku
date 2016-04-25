let {localStorage} = window

const LocalStorage = {
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
  }
}

export default LocalStorage
