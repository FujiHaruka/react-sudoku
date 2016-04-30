import React from 'react'
import difficultyStore from '../stores/difficulty_store'
import {DIFFICUITY} from '../util/consts'

import sudokuFinishStore from '../stores/sudoku_finish_store'

const SudokuHeader = React.createClass({
  render () {
    let difficulty = difficultyStore.getState()
    let today = new Date()
    let month = today.getMonth() + 1
    let date = today.getDate()
    return (
      <div className='sudoku-header-message' onClick={this.onClick}>
        {month}月{date}日のナンプレ問題 [ 難易度 : {DIFFICUITY[difficulty]} ]
      </div>
    )
  },
  onClick () {
    sudokuFinishStore.finish()
  }
})

export default SudokuHeader
