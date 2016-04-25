import React from 'react'
import ReactDOM from 'react-dom'
import SudokuMain from './components/sudoku_main'
import sudokuStore from './stores/sudoku_store'
import LocalStorage from './util/localstorage'

// const store = createStore(counter)
const rootEl = document.getElementById('sudoku')

function render () {
  let previousData = LocalStorage.getSudoku()
  if (previousData) {
    sudokuStore.dispatch({
      type: 'SET',
      payload: previousData
    })
  } else {
    let problem = '100920000524010000000000070050008102000000000402700090060000000000030945000071006'
    sudokuStore.dispatch({
      type: 'INIT',
      payload: problem
    })
  }
  ReactDOM.render(
    <SudokuMain />,
    rootEl
  )
}

render()
