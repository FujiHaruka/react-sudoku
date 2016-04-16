import React from 'react'
import SudokuCell from './sudoku_cell'

const SudokuSection = React.createClass({
  render() {
    let sectionName = "sudoku-section-" + this.props.sectionId
    let cellIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
      <div className="sudoku-section" id={sectionName}>
        {cellIds.map(id => this._renderSudokuCell(id))}
      </div>
    )
  },

  _renderSudokuCell(id) {
    return (
      <SudokuCell sectionId={this.props.sectionId} cellId={id} key={id} />
    )
  }
})

export default SudokuSection
