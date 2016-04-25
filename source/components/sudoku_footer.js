import React from 'react'
import SudokuFooterNumberButton from './sudoku_footer_number_button'
import SudokuFooterToggleButton from './sudoku_footer_toggle_button'
import inputModeStore from '../stores/sudoku_input_mode_store'
import sudokuSelectStore from '../stores/sudoku_select_store'
import {INPUT_MODE} from '../util/consts'

const SudokuFooter = React.createClass({
  getInitialState() {
    return {
      selected: sudokuSelectStore.getState()
    }
  },

  render() {
    let numbers = [1,2,3,4,5,6,7,8,9]
    return (
      <div className="sudoku-footer">
        {
          numbers.map(number => this._renderNumberButton(number))
        }
        <SudokuFooterToggleButton />
      </div>
    )
  },

  componentWillMount() {
    inputModeStore.subscribe(this.handleSelectStoreChange)
    sudokuSelectStore.subscribe(this.handleSelectStoreChange)
  },

  handleSelectStoreChange() {
    let mode = inputModeStore.getMode()
    this._setSelected(mode)
  },

  _setSelected(mode) {
    this.setState({
      selected: sudokuSelectStore.getState()
    })
  },

  _renderNumberButton(number) {
    let selected = sudokuSelectStore.getState()
    let isSelected = selected === number
    return (
      <SudokuFooterNumberButton number={number}
                                key={number}
                                isSelected={isSelected} />
    )
  }
})

export default SudokuFooter
