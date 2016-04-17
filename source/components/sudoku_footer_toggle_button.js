import React from 'react'
import SudokuFooterButtonContainer from './sudoku_footer_button_container'
import sudokuInputModeStore from '../stores/sudoku_input_mode_store'
import writingSelectStore from '../stores/writing_select_store'
import annotationSelectStore from '../stores/annotation_select_store'
import { INPUT_MODE } from '../util/consts'

const SudokuFooterToggleButton = React.createClass({
  const: {
    answerModeValue: 'W',
    annotationModeValue: 'A'
  },

  getInitialState() {
    return {
      value: this._getValue()
    }
  },

  render() {
    let {value} = this.state
    return (
      <SudokuFooterButtonContainer selected={false}>
        <div id="sudoku-footer-toggle-button"
             onClick={this.onClick}
             >
          {value}
        </div>
      </SudokuFooterButtonContainer>
    )
  },

  onClick() {
    this._toggle()
  },

  _toggle() {
    sudokuInputModeStore.toggle()
    // writingSelectStore.dispatch({type: 'OFF'})
    // annotationSelectStore.dispatch({type: 'OFF'})
    this.setState({
      value: this._getValue()
    })
  },

  _getValue() {
    let mode = sudokuInputModeStore.getMode()
    let {answerModeValue, annotationModeValue} = this.const
    if (mode === INPUT_MODE.ANSWER) {
      return answerModeValue
    } else if (mode === INPUT_MODE.ANNOTATION) {
      return annotationModeValue
    } else {
      return null
    }
  }
})

export default SudokuFooterToggleButton
