import React from 'react'
import SudokuFooterButtonContainer from './sudoku_footer_button_container'
import sudokuSelectStore from '../stores/sudoku_select_store'
import inputModeStore from '../stores/sudoku_input_mode_store'
import { INPUT_MODE } from '../util/consts'

const SudokuFooterNumberButton = React.createClass({
  render() {
    let {number, isSelected} = this.props
    return (
      <SudokuFooterButtonContainer isSelected={isSelected}>
        <div id={`sudoku-footer-button-${number}`}
             onClick={this.onClick}
             >
          {number}
        </div>
      </SudokuFooterButtonContainer>
    )
  },

  onClick() {
    let {number, isSelected} = this.props
    let mode = inputModeStore.getMode()
    if (isSelected) {
      sudokuSelectStore.dispatch({type: 'OFF'})
    } else {
      sudokuSelectStore.dispatch({type: 'SET', payload: Number(number)})
    }
  }
})

export default SudokuFooterNumberButton
