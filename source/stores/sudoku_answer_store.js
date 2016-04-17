/**
 * answer string hashed by sh1
 */
import { createStore } from 'redux'

function sudokuAnswerReducer(state = '', action) {
  switch (action.type) {
    case 'INIT':
      return action.payload
    default:
      return state
  }
}

const sudokuAnswerStore = createStore(sudokuAnswerReducer)

export default sudokuAnswerStore
