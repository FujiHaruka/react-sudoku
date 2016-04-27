import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Footer from './components/footer'
import SudokuHeader from './components/sudoku_header'
import SelectProblem from './components/select_problem'
import SudokuMain from './components/sudoku_main'
import sudokuStore from './stores/sudoku_store'
import difficultyStore from './stores/difficulty_store'
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
  ReactDOM.render(
    <div>
      <Header />
      <SudokuHeader />
      <SudokuMain />
      <SelectProblem />
      <Footer />
    </div>,
    rootEl
  )
}

render()
