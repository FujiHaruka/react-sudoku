import { createStore } from 'redux'

function sudokuAnnotationSelectReducer(state = 0, action) {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'OFF':
      return 0
    default:
      return state
  }
}

const annotationSelectStore = createStore(sudokuAnnotationSelectReducer)

export default annotationSelectStore
