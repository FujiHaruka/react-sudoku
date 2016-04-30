import { createStore } from 'redux'

function sudokuFinishReducer (state = false, action) {
  switch (action.type) {
    case 'FINISH':
      return true
    default:
      return state
  }
}

const sudokuFinishStore = Object.assign(createStore(sudokuFinishReducer), {
  finish () {
    this.dispatch({type: 'FINISH'})
  },
  isFinished () {
    return this.getState()
  }
})

export default sudokuFinishStore
