import React from 'react'
import ReactDOM from 'react-dom'
import SudokuHeader from './components/sudoku_header'
import SelectProblem from './components/select_problem'
import SudokuMain from './components/sudoku_main'
import sudokuStore from './stores/sudoku_store'
import difficultyStore from './stores/difficulty_store'
import dateStore from './stores/date_store'
import LocalStorage from './util/localstorage'
import SUDOKU_UTIL from './util/sudoku_util'

// const store = createStore(counter)
const rootEl = document.getElementById('sudoku')

function render () {
  let previousData = LocalStorage.getSudoku()
  if (previousData) {
    sudokuStore.dispatch({
      type: 'SET',
      payload: previousData
    })
    difficultyStore.dispatch({
      type: 'CHANGE',
      payload: LocalStorage.getDifficulty()
    })
  } else {
    let problem = SUDOKU_UTIL.getTodaysGame('easy')
    sudokuStore.dispatch({
      type: 'INIT',
      payload: problem
    })
    difficultyStore.dispatch({
      type: 'CHANGE',
      payload: 'easy'
    })
  }
  let day = LocalStorage.getDay()
  if (day) {
    dateStore.dispatch({
      type: 'SET',
      payload: day
    })
  } else {
    dateStore.dispatch({
      type: 'SET_TODAY'
    })
  }
  ReactDOM.render(
    <div>
      <SudokuHeader />
      <SudokuMain />
      <SelectProblem />
    </div>,
    rootEl
  )
}

render()
