import React from 'react'
import inputModeStore from '../stores/sudoku_input_mode_store'
import { INPUT_MODE } from '../util/consts'

const SudokuFooterButtonContainer = React.createClass({
  propTypes: {
    reverseColor: React.PropTypes.bool,
    isSelected: React.PropTypes.bool,
    children: React.PropTypes.object
  },

  getMode () {
    if (this.props.reverseColor) {
      return (inputModeStore.getMode() === INPUT_MODE.ANSWER) ? INPUT_MODE.ANNOTATION : INPUT_MODE.ANSWER
    } else {
      return inputModeStore.getMode()
    }
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
    this.setState({mode: this.getMode()})
    inputModeStore.subscribe(this.handleToggle)
  },

  handleToggle () {
    this.setState({mode: this.getMode()})
  }
})

export default SudokuFooterButtonContainer
