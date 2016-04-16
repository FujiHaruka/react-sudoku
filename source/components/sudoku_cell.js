import React from 'react'
import sudokuStore from '../stores/sudoku_store'
import sudokuSelectStore from '../stores/sudoku_select_store'
import SUDOKU_UTIL from '../util/sudoku_util'

const SudokuCell = React.createClass({
  getInitialState() {
    let {sectionId, cellId} = this.props
    return {
      content: sudokuStore.getCellContent(sectionId, cellId)
    }
  },

  render() {
    let {sectionId, cellId} = this.props
    let cellName = "sudoku-cell-" + cellId
    let colCenter = cellId % 3 === 1
    let rowCenter = Math.floor(cellId / 3) === 1
    let {content} = this.state
    return (
      <div className="sudoku-cell"
           id={cellName}
           data-col-center={colCenter}
           data-row-center={rowCenter}
           onClick={this.onClickEvent}
           >
        {content === 0 ? null : content}
      </div>
    )
  },

  onClickEvent() {
    // TODO 固定データを可変データの分離
    console.log("click!")
    let {sectionId, cellId} = this.props
    let selected = sudokuSelectStore.getState()
    if (selected === 0) {
      sudokuStore.dispatch({
        type: 'DELETE',
        payload: {
          col: SUDOKU_UTIL.idToCol(sectionId, cellId),
          row: SUDOKU_UTIL.idToRow(sectionId, cellId)
        }
      })
      this.setState({
        content: sudokuStore.getCellContent(sectionId, cellId)
      })
    } else {
      let selected = sudokuSelectStore.getState()
      sudokuStore.dispatch({
        type: 'PUT',
        payload: {
          col: SUDOKU_UTIL.idToCol(sectionId, cellId),
          row: SUDOKU_UTIL.idToRow(sectionId, cellId),
          value: selected
        }
      })
      this.setState({
        content: sudokuStore.getCellContent(sectionId, cellId)
      })
    }
  }
})

export default SudokuCell
