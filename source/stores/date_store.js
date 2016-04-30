import { createStore } from 'redux'
import LocalStorage from '../util/localstorage'

function dateReducer (state = 0, action) {
  switch (action.type) {
    case 'SET_TODAY':
      let today = new Date()
      let formated = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
      LocalStorage.putDay(formated)
      return formated
    case 'SET':
      return action.payload
    default:
      return state
  }
}

const dateStore = createStore(dateReducer)

export default dateStore
