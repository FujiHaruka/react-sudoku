import React from 'react'
import inputModeStore from '../stores/sudoku_input_mode_store'
import { INPUT_MODE } from '../util/consts'

const SudokuFooterButtonContainer = React.createClass({
  propTypes: {
    reverseColor: React.PropTypes.bool,
    isSelected: React.PropTypes.bool,
    children: React.PropTypes.object
  },

  getMode (mode) {
    if (this.props.reverseColor) {
      mode = (inputModeStore.getMode() === INPUT_MODE.ANSWER) ? INPUT_MODE.ANNOTATION : INPUT_MODE.ANSWER
    }
    return mode
  },

  render () {
    let {isSelected} = this.props
    let {mode} = this.state
    let colorData = mode + ' ' + isSelected
    return (
      <div className='sudoku-footer-button'
           data-color={colorData}>
        {this.props.children}
      </div>
    )
  },

  componentWillMount () {
    this.setState({mode: INPUT_MODE.ANSWER})
    inputModeStore.subscribe(this.handleToggle)
  },

  handleToggle () {
    let mode = inputModeStore.getMode()
    this.setState({mode: this.getMode(mode)})
  }
})

export default SudokuFooterButtonContainer
