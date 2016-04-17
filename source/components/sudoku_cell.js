import React from 'react'
import sudokuStore from '../stores/sudoku_store'
import sudokuSelectStore from '../stores/sudoku_select_store'
import SUDOKU_UTIL from '../util/sudoku_util'

const SudokuCell = React.createClass({
  getInitialState() {
    let {sectionId, cellId} = this.props
    return {
      content: sudokuStore.getCellValue(sectionId, cellId)
    }
  },

  render() {
    let {sectionId, cellId, variable} = this.props
    let {content} = this.state
    let isColCenter = cellId % 3 === 1
    let isRowCenter = Math.floor(cellId / 3) === 1

    return (
      <div className="sudoku-cell"
           id={`sudoku-cell-${cellId}`}
           data-col-center={isColCenter}
           data-row-center={isRowCenter}
           data-fixed={!variable}
           onClick={this.onClick}
           >
        {content === 0 ? null : content}
      </div>
    )
  },

  onClick() {
    let {variable, sectionId, cellId} = this.props
    let {content} = this.state
    if (!variable) return
    let selected = sudokuSelectStore.getState()
    let type = (selected === 0 || selected === content) ? 'DELETE' : 'PUT'
    sudokuStore.dispatch({
      type: type,
      payload: {
        col: SUDOKU_UTIL.idToCol(sectionId, cellId),
        row: SUDOKU_UTIL.idToRow(sectionId, cellId),
        value: selected
      }
    })
    this.setState({
      content: sudokuStore.getCellValue(sectionId, cellId)
    })
    if (type === 'PUT') {
      this._isFinished()
    }
  },

  _isFinished() {
    if (sudokuStore.isFinished()) {
      console.log('congraturations!!')
    }
  }
})

export default SudokuCell
