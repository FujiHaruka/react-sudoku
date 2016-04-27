import { createStore } from 'redux'
import LocalStorage from '../util/localstorage'

function difficultyReducer (state = 0, action) {
  switch (action.type) {
    case 'CHANGE':
      LocalStorage.putDifficulty(action.payload)
      return action.payload
    default:
      return state
  }
}

const difficultyStore = createStore(difficultyReducer)

export default difficultyStore
