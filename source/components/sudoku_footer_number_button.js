import React from 'react'
import sudokuSelectStore from '../stores/sudoku_select_store'

const SudokuFooterNumberButton = React.createClass({
  render() {
    let {number, isSelected} = this.props
    return (
      <div className="sudoku-footer-button"
           id={`sudoku-footer-button-${number}`}
           onClick={this.onClick}
           data-selected={isSelected}
           >
        {number}
      </div>
    )
  },

  onClick() {
    let {number, isSelected} = this.props
    if (isSelected) {
      sudokuSelectStore.dispatch({type: 'OFF'})
    } else {
      sudokuSelectStore.dispatch({type: 'SET', payload: Number(number)})
    }
    this.props.onStoreChange()
  }
})

export default SudokuFooterNumberButton
