import { createStore } from 'redux'
import sudokuSelectReducer from '../reducers/sudoku_select_reducer'

const sudokuSelectStore = createStore(sudokuSelectReducer)

export default sudokuSelectStore
