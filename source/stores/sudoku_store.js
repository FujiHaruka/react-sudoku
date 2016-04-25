import { createStore } from 'redux'
import sudokuReducer from '../reducers/sudoku_reducer'
import SUDOKU_UTIL from '../util/sudoku_util'

let store = createStore(sudokuReducer)

const sudokuStore = Object.assign(store, {
  getCellValue (sectionId, cellId) {
    let state = store.getState()
    let row = SUDOKU_UTIL.idToRow(sectionId, cellId)
    let col = SUDOKU_UTIL.idToCol(sectionId, cellId)
    return state[row][col].value
  },
  isCellVariable (sectionId, cellId) {
    let state = store.getState()
    let row = SUDOKU_UTIL.idToRow(sectionId, cellId)
    let col = SUDOKU_UTIL.idToCol(sectionId, cellId)
    return state[row][col].variable
  },
  isFilledAll () {
    let state = store.getState()
    return state.every(row => row.every(cell => (cell.value > 0)))
  },
  isFinished () {
    if (!this.isFilledAll()) {
      return false
    }
    // 各行、列、ブロック内で数字がただ一度だけ使われていることを確認する
    let state = store.getState()
    for (let i = 0; i < 9; i++) {
      let row = new Set()
      for (let j = 0; j < 9; j++) {
        row.add(state[i][j].value)
      }
      if (row.size !== 9) {
        return false
      }
    }
    for (let i = 0; i < 9; i++) {
      let col = new Set()
      for (let j = 0; j < 9; j++) {
        col.add(state[i][j].value)
      }
      if (col.size !== 9) {
        return false
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let block = new Set()
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            block.add(state[3 * i + k][3 * j + l].value)
          }
        }
        if (block.size !== 9) {
          return false
        }
      }
    }
    return true
  }
})

export default sudokuStore
