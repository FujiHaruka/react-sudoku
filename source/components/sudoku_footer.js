import React from 'react'
import SudokuFooterNumberButton from './sudoku_footer_number_button'
import sudokuSelectStore from '../stores/sudoku_select_store'

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
      </div>
    )
  },

  handleOnStoreChange() {
    this.setState({
      selected: sudokuSelectStore.getState()
    })
  },

  _renderNumberButton(number) {
    return (
      <SudokuFooterNumberButton number={number}
                                key={number}
                                isSelected={this.state.selected === number}
                                onStoreChange={this.handleOnStoreChange} />
    )
  }
})

export default SudokuFooter
