import React from 'react'
import sudokuSelectStore from '../stores/sudoku_select_store'

const SudokuFooterNumberButton = React.createClass({
  render() {
    let {number} = this.props
    let id = "sudoku-footer-number-button-" + number
    return (
      <div className="sudoku-footer-button"
           id={id}
           onClick={this.onClick}
           >
        {number}
      </div>
    )
  },

  onClick() {
    let {number} = this.props
    sudokuSelectStore.dispatch({type: 'SET', payload: Number(number)})
  }
})

export default SudokuFooterNumberButton
