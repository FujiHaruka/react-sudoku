import React from 'react'
import SudokuCell from './sudoku_cell'
import sudokuStore from '../stores/sudoku_store'

const SudokuSection = React.createClass({
  propTypes: {
    sectionId: React.PropTypes.number
  },

  render () {
    let sectionName = 'sudoku-section-' + this.props.sectionId
    let cellIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
      <div className='sudoku-section' id={sectionName}>
        {cellIds.map(id => this._renderSudokuCell(id))}
      </div>
    )
  },

  _renderSudokuCell (cellId) {
    let {sectionId} = this.props
    return (
      <SudokuCell sectionId={sectionId}
                  cellId={cellId}
                  key={cellId}
                  variable={sudokuStore.isCellVariable(sectionId, cellId)} />
    )
  }
})

export default SudokuSection
