import { createStore } from 'redux'
import sudokuReducer from '../reducers/sudoku_reducer'

let store = createStore(sudokuReducer)

const sudokuStore = Object.assign(store, {
  getCellContent: function (sectionId, cellId) {
    let state = store.getState()
    let row = Math.floor(sectionId / 3) * 3 + Math.floor(cellId / 3)
    let col = (sectionId % 3) * 3 + (cellId % 3)
    return state[row][col]
  }
})

export default sudokuStore
