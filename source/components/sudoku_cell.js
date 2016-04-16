import React, { Component, PropTypes } from 'react'
import sudokuStore from '../stores/sudoku_store'

class sudokuCell extends Component {
  constructor(props) {
    super(props)
    this.method = this.method.bind(this)
  }

  method() {
    console.log(this)
  }

  onClick() {
    console.log("click!")
  }

  render() {
    let {sectionId, cellId} = this.props
    let cellName = "sudoku-cell-" + cellId
    let colCenter = cellId % 3 === 1
    let rowCenter = Math.floor(cellId / 3) === 1
    return (
      <div className="sudoku-cell"
           id={cellName}
           data-col-center={colCenter}
           data-row-center={rowCenter}
           onClick={this.onClick}
           >
        {sudokuStore.getCellContent(sectionId, cellId)}
      </div>
    )
  }
}

export default sudokuCell
