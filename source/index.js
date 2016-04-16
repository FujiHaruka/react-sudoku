import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import SudokuBoard from './components/sudoku_board'
import SudokuFooter from './components/sudoku_footer'
import sudokuStore from './stores/sudoku_store'

// const store = createStore(counter)
const rootEl = document.getElementById('sudoku')

function render() {
  var problem = '043080250600000000000001094900004070000608000010200003820500000000000005034090710'
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
