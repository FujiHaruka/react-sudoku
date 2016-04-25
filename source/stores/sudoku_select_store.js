import { createStore } from 'redux'

function sudokuSelectReducer (state = 0, action) {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'OFF':
      return 0
    default:
      return state
  }
}

const sudokuSelectStore = createStore(sudokuSelectReducer)

export default sudokuSelectStore
