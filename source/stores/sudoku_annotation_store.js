// state
// {1: {2: {3: true}}}
// state[1][2][3] = true
// state[sectionId][cellId][value] = true
// PUT / DELETE arg
// action.payload = {sectionId: 1, cellId: 2, value: 3}

import { createStore } from 'redux'

function getPropertyOrCreate (obj, prop, toSet) {
  if (!obj.hasOwnProperty(prop)) {
    obj[prop] = toSet ? new Set() : {}
  }
  return obj[prop]
}

function sudokuAnnotationReducer (state = {}, action) {
  switch (action.type) {
    case 'PUT':
      ((state, action) => {
        let {sectionId, cellId, value} = action.payload
        let section = getPropertyOrCreate(state, sectionId, false)
        let cell = getPropertyOrCreate(section, cellId, true)
        cell.add(value)
      })(state, action)
      return state
    case 'DELETE':
      ((state, action) => {
        let {sectionId, cellId, value} = action.payload
        if (state.hasOwnProperty(sectionId) && state[sectionId].hasOwnProperty(cellId) && state[sectionId][cellId].has(value)) {
          state[sectionId][cellId].delete(value)
        }
      })(state, action)
      return state
    case 'CLEAR':
      return {}
    default:
      return state
  }
}

const annotationStore = Object.assign(createStore(sudokuAnnotationReducer), {
  // custom functions
  getAnnotations (sectionId, cellId) {
    let state = this.getState()
    if (state.hasOwnProperty(sectionId) && state[sectionId].hasOwnProperty(cellId)) {
      return state[sectionId][cellId]
    } else {
      return new Set()
    }
  },
  hasAnnotations (sectionId, cellId) {
    return this.getAnnotations(sectionId, cellId).size() > 0
  },
  hasAnnotationOf (sectionId, cellId, value) {
    return this.getAnnotations(sectionId, cellId).has(value)
  }
})

export default annotationStore
