import ENCODED from './problems'

const SUDOKU_UTIL = {
  // shoud move to other lib
  idToRow (sectionId, cellId) {
    return Math.floor(sectionId / 3) * 3 + Math.floor(cellId / 3)
  },
  idToCol (sectionId, cellId) {
    return (sectionId % 3) * 3 + (cellId % 3)
  },
  coordToSectionId (row, col) {
    return Math.floor(col / 3) + Math.floor(col / 3) * 3
  },
  coordToCellId (row, col) {
    return (col % 3) + (row % 3) * 3
  },
  getTodaysGame (difficulty) {
    let number = (new Date()).getDate() - 1
    let decoded = window.atob(ENCODED[difficulty][number])
    return decoded
  }
}

export default SUDOKU_UTIL
