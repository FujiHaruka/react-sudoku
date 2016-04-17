import React from 'react'
import SudokuFooterNumberButton from './sudoku_footer_number_button'
import SudokuFooterToggleButton from './sudoku_footer_toggle_button'
import inputModeStore from '../stores/sudoku_input_mode_store'
import writingSelectStore from '../stores/writing_select_store'
import annotationSelectStore from '../stores/annotation_select_store'
import {INPUT_MODE} from '../util/consts'

const SudokuFooter = React.createClass({
  getInitialState() {
    return {
      selected: writingSelectStore.getState()
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
    writingSelectStore.subscribe(this.handleSelectStoreChange)
    annotationSelectStore.subscribe(this.handleSelectStoreChange)
  },

  handleSelectStoreChange() {
    let mode = inputModeStore.getMode()
    this._setSelected(mode)
  },

  _setSelected(mode) {
    switch (mode) {
      case INPUT_MODE.ANSWER:
        this.setState({
          selected: writingSelectStore.getState()
        })
        return
      case INPUT_MODE.ANNOTATION:
        this.setState({
          selected: annotationSelectStore.getState()
        })
        return
      default:
        return
    }
  },

  _renderNumberButton(number) {
    let mode = inputModeStore.getMode()
    let selectedStore = mode === INPUT_MODE.ANSWER ? writingSelectStore : annotationSelectStore
    let selected = selectedStore.getState()
    let isSelected = selected === number
    return (
      <SudokuFooterNumberButton number={number}
                                key={number}
                                isSelected={isSelected} />
    )
  }
})

export default SudokuFooter
