import React, { Component, PropTypes } from 'react'
import SudokuSection from './sudoku_section'

class SudokuBoard extends Component {
  constructor(props) {
    super(props)
    this.method = this.method.bind(this)
  }

  render() {
    let sectionIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
      <div className="sudoku-board">
        {sectionIds.map(id => this._renderSudokuSection(id))}
      </div>
    )
  }

  _renderSudokuSection(id) {
    return (
      <SudokuSection sectionId={id} key={id} />
    )
  }
}

export default SudokuBoard
