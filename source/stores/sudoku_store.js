import { createStore } from 'redux'
import sudokuReducer from '../reducers/sudoku_reducer'
import SUDOKU_UTIL from '../util/sudoku_util'

let store = createStore(sudokuReducer)

const sudokuStore = Object.assign(store, {
  getCellContent: function (sectionId, cellId) {
    let state = store.getState()
    let row = SUDOKU_UTIL.idToRow(sectionId, cellId)
    let col = SUDOKU_UTIL.idToCol(sectionId, cellId)
    return state[row][col]
  }
})

export default sudokuStore
