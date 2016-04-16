import React from 'react'
import SudokuFooterNumberButton from './sudoku_footer_number_button'

// class SudokuFooter extends Component {
const SudokuFooter = React.createClass({
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

  _renderNumberButton(number) {
    return (
      <SudokuFooterNumberButton number={number} key={number}/>
    )
  }
})

export default SudokuFooter
