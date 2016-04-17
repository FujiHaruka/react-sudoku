import { createStore } from 'redux'
import sudokuSelectReducer from '../reducers/sudoku_select_reducer'

const writingSelectStore = createStore(sudokuSelectReducer)

export default writingSelectStore
