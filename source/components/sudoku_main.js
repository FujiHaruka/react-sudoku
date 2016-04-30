import React from 'react'
import SudokuBoard from './sudoku_board'
import SudokuFooter from './sudoku_footer'

const SudokuMain = React.createClass({
  render () {
    return (
      <div className='sudoku-main'>
        <SudokuBoard />
        <SudokuFooter />
      </div>
    )
  }
})

export default SudokuMain
