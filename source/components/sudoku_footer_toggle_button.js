import React from 'react'
import SudokuFooterButtonContainer from './sudoku_footer_button_container'
import inputModeStore from '../stores/sudoku_input_mode_store'
import writingSelectStore from '../stores/writing_select_store'
import annotationSelectStore from '../stores/annotation_select_store'
import { INPUT_MODE } from '../util/consts'

const SudokuFooterToggleButton = React.createClass({
  const: {
    answerModeValue: 'A',
    annotationModeValue: 'W'
  },

  getInitialState() {
    return {
      value: this._getValue()
    }
  },

  render() {
    let {value} = this.state
    return (
      <SudokuFooterButtonContainer isSelected={true} reverseColor={true}>
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
    inputModeStore.toggle()
    // writingSelectStore.dispatch({type: 'OFF'})
    // annotationSelectStore.dispatch({type: 'OFF'})
    this.setState({
      value: this._getValue()
    })
  },

  _getValue() {
    let mode = inputModeStore.getMode()
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
