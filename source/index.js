import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import SudokuBoard from './components/sudoku_board'
import SudokuFooter from './components/sudoku_footer'
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
    <div>
      <SudokuBoard />
      <SudokuFooter />
    </div>,
    rootEl
  )
}

render()
//store.subscribe(render)
