import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import Counter from './components/Counter'
import SudokuBoard from './components/sudoku_board'
import sudokuReducer from './reducers/sudoku_reducer'
import sudokuStore from './stores/sudoku_store'

// const store = createStore(counter)
const rootEl = document.getElementById('sudoku')

function render() {
  var problem = '962345678012340078012345678012000678012345078012340078012345678012345678012345008'
  // var sudokuStore = createStore(sudokuReducer)
  sudokuStore.dispatch({
    type: 'INIT',
    payload: problem
  })
  ReactDOM.render(
    <SudokuBoard />,
    rootEl
  )
}

render()
//store.subscribe(render)
