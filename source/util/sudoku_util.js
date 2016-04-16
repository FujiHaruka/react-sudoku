const SUDOKU_UTIL = {
  // shoud move to other lib
  idToRow: function (sectionId, cellId) {
    return Math.floor(sectionId / 3) * 3 + Math.floor(cellId / 3)
  },
  idToCol: function (sectionId, cellId) {
    return (sectionId % 3) * 3 + (cellId % 3)
  },
  coordToSectionId: function (row, col) {
    return Math.floor(col / 3) + Math.floor(col / 3) * 3
  },
  coordToCellId: function (row, col) {
    return (col % 3) + (row % 3) * 3
  }
}

export default SUDOKU_UTIL
