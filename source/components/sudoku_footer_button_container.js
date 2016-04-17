import React from 'react'
import sudokuInputModeStore from '../stores/sudoku_input_mode_store'
import annotationSelectStore from '../stores/annotation_select_store'
import writingSelectStore from '../stores/writing_select_store'
import { INPUT_MODE } from '../util/consts'

const SudokuFooterButtonContainer = React.createClass({
  styles(mode) {
    switch (mode) {
      case INPUT_MODE.ANSWER:
        return {["backgroundColor"]: 'darkblue'}
      case INPUT_MODE.ANNOTATION:
        return {["backgroundColor"]: 'darkgreen'}
      default:
        return {["backgroundColor"]: 'darkblue'}
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
    let unsubscribed = sudokuInputModeStore.subscribe(this.handleToggle)
  },

  handleToggle() {
    let mode = sudokuInputModeStore.getMode()
    this.setState({style: this.styles(mode)})
  }
})

export default SudokuFooterButtonContainer
