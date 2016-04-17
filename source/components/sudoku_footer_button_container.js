import React from 'react'
import inputModeStore from '../stores/sudoku_input_mode_store'
import annotationSelectStore from '../stores/annotation_select_store'
import writingSelectStore from '../stores/writing_select_store'
import { INPUT_MODE, COLOR } from '../util/consts'

const SudokuFooterButtonContainer = React.createClass({
  styles(mode) {
    if (this.props.reverseColor) {
      mode = (inputModeStore.getMode() === INPUT_MODE.ANSWER) ? INPUT_MODE.ANNOTATION : INPUT_MODE.ANSWER
    }
    switch (mode) {
      case INPUT_MODE.ANSWER:
        return {["backgroundColor"]: COLOR.ANSWER}
      case INPUT_MODE.ANNOTATION:
        return {["backgroundColor"]: COLOR.ANNOTATION}
      default:
        return {["backgroundColor"]: COLOR.ANSWER}
    }
  },

  render() {
    return (
      <div className="sudoku-footer-button"
           data-selected={this.props.isSelected}
           style={this.state.style}>
        {this.props.children}
      </div>
    )
  },

  componentWillMount() {
    this.setState({style: this.styles(null)})
    let unsubscribed = inputModeStore.subscribe(this.handleToggle)
  },

  handleToggle() {
    let mode = inputModeStore.getMode()
    this.setState({style: this.styles(mode)})
  }
})

export default SudokuFooterButtonContainer
