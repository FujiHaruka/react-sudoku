import { createStore } from 'redux'
import sudokuReducer from '../reducers/sudoku_reducer'
import SUDOKU_UTIL from '../util/sudoku_util'
import sha1 from 'sha1'
import sudokuAnswerStore from './sudoku_answer_store'

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
    let state = store.getState()
    let string = state.map(row => row.map(cell => cell.value).join('')).join('')
    let hash = sha1(string)
    return hash === sudokuAnswerStore.getState()
  }
})

export default sudokuStore
