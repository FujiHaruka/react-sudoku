import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import SudokuBoard from './components/sudoku_board'
import SudokuFooter from './components/sudoku_footer'
import sudokuStore from './stores/sudoku_store'
import sudokuAnswerStore from './stores/sudoku_answer_store'
// temp
import sha1 from 'sha1'

// const store = createStore(counter)
const rootEl = document.getElementById('sudoku')

function render() {
  var problem = '043080250600000000000001094900004070000608000010200003820500000000000005034090710'
  var answer =  '743080250600000000000001094900004070000608000010200003820500000000000005034090710'
  sudokuStore.dispatch({
    type: 'INIT',
    payload: problem
  })
  sudokuAnswerStore.dispatch({
    type: 'INIT',
    payload: sha1(answer)
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
