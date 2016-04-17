import React from 'react'
import sudokuStore from '../stores/sudoku_store'
import writingSelectStore from '../stores/writing_select_store'
import SUDOKU_UTIL from '../util/sudoku_util'

const SudokuCell = React.createClass({
  render() {
    let {sectionId, cellId, variable} = this.props
    let {content, style} = this.state
    let isColCenter = cellId % 3 === 1
    let isRowCenter = Math.floor(cellId / 3) === 1

    return (
      <div className="sudoku-cell"
           id={`sudoku-cell-${cellId}`}
           data-col-center={isColCenter}
           data-row-center={isRowCenter}
           data-fixed={!variable}
           onClick={this.onClick}
           style={style}
           >
        {content === 0 ? null : content}
        {this._renderAnnotation()}
      </div>
    )
  },

  componentWillMount() {
    let {sectionId, cellId} = this.props
    let content = sudokuStore.getCellValue(sectionId, cellId)
    let unsubscribed = writingSelectStore.subscribe(this.onSelecetedChange)
    let highlighted = writingSelectStore.getState() === content
    let initialState = {
      unsubscribed,
      highlighted,
      content,
      style: this._getStyle(highlighted)
    }
    this.setState(initialState)
  },

  componentWillUnmount() {
    this.state.unsubscribed()
  },

  onClick() {
    let {variable, sectionId, cellId} = this.props
    let {content} = this.state
    if (!variable) return
    let selected = writingSelectStore.getState()
    let type = (selected === 0 || selected === content) ? 'DELETE' : 'PUT'
    sudokuStore.dispatch({
      type: type,
      payload: {
        col: SUDOKU_UTIL.idToCol(sectionId, cellId),
        row: SUDOKU_UTIL.idToRow(sectionId, cellId),
        value: selected
      }
    })

    let nextState = {
      content: sudokuStore.getCellValue(sectionId, cellId)
    }
    if (nextState.content === selected) {
      nextState = Object.assign(nextState, {
        highlighted: true,
        style: this._getStyle(true)
      })
    }
    console.log(nextState)
    this.setState(nextState)

    if (type === 'PUT') {
      this._isFinished()
    }
  },

  onSelecetedChange() {
    let highlighted = writingSelectStore.getState() === this.state.content
    if (highlighted != this.state.highlighted) {
      this.setState({highlighted, style: this._getStyle(highlighted)})
    }
  },

  _renderAnnotation() {
    if (this.state.content !== 0) return null

  },

  _getStyle(highlighted) {
    return highlighted ? {color: 'darkblue'} : {}
  },

  _isFinished() {
    if (sudokuStore.isFinished()) {
      console.log('congraturations!!')
    }
  }
})

export default SudokuCell
