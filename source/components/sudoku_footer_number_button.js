import React from 'react'
import SudokuFooterButtonContainer from './sudoku_footer_button_container'
import sudokuSelectStore from '../stores/sudoku_select_store'

const SudokuFooterNumberButton = React.createClass({
  propTypes: {
    isSelected: React.PropTypes.bool,
    number: React.PropTypes.number
  },

  render () {
    let {number, isSelected} = this.props
    return (
      <SudokuFooterButtonContainer isSelected={isSelected} reverseColor={false}>
        <div id={`sudoku-footer-button-${number}`}
             onClick={this.onClick}
             >
          {number}
        </div>
      </SudokuFooterButtonContainer>
    )
  },

  onClick () {
    let {number, isSelected} = this.props
    if (isSelected) {
      sudokuSelectStore.dispatch({type: 'OFF'})
    } else {
      sudokuSelectStore.dispatch({type: 'SET', payload: Number(number)})
    }
  }
})

export default SudokuFooterNumberButton
