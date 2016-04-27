import React from 'react'
import SudokuSection from './sudoku_section'
import difficultyStore from '../stores/difficulty_store'
import {DIFFICUITY} from '../util/consts'

const SudokuBoard = React.createClass({
  render () {
    let sectionIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let difficulty = difficultyStore.getState()
    return (
      <div className='sudoku-board'>
        {sectionIds.map(id => this._renderSudokuSection(id))}
      </div>
    )
  },
  _renderSudokuSection (id) {
    return (
      <SudokuSection sectionId={id} key={id} />
    )
  }
})

export default SudokuBoard
