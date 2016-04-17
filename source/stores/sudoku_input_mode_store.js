import { createStore } from 'redux'
import { INPUT_MODE } from '../util/consts'

function sudokuInputModeReducer(state = true, action) {
  switch (action.type) {
    case 'TOGGLE':
      return !state
    default:
      return state
  }
}

const inputModeStore = Object.assign(createStore(sudokuInputModeReducer), {
  toggle() {
    let store = this.dispatch({type: 'TOGGLE'})
  },
  getMode() {
    if (this.getState()) {
      return INPUT_MODE.ANSWER
    } else {
      return INPUT_MODE.ANNOTATION
    }
  }
})

export default inputModeStore
