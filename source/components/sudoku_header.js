import React from 'react'
import difficultyStore from '../stores/difficulty_store'
import {DIFFICUITY} from '../util/consts'

const SudokuHeader = React.createClass({
  render () {
    let difficulty = difficultyStore.getState()
    return (
      <div className='sudoku-header-message'>
        難易度 : {DIFFICUITY[difficulty]}
      </div>
    )
  }
})

export default SudokuHeader
