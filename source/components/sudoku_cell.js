import React from 'react'
import SudokuCellAnnotation from './sudoku_cell_annotation'
import sudokuStore from '../stores/sudoku_store'
import annotationStore from '../stores/sudoku_annotation_store'
import inputModeStore from '../stores/sudoku_input_mode_store'
import sudokuSelectStore from '../stores/sudoku_select_store'
import SUDOKU_UTIL from '../util/sudoku_util'
import {INPUT_MODE} from '../util/consts'

const SudokuCell = React.createClass({
  propTypes: {
    sectionId: React.PropTypes.number,
    cellId: React.PropTypes.number,
    variable: React.PropTypes.bool
  },

  render () {
    let {cellId, variable} = this.props
    let {content, style, highlighted} = this.state
    let isColCenter = cellId % 3 === 1
    let isRowCenter = Math.floor(cellId / 3) === 1

    return (
      <div className='sudoku-cell'
           id={`sudoku-cell-${cellId}`}
           data-col-center={isColCenter}
           data-row-center={isRowCenter}
           data-fixed={!variable}
           onClick={this.onClick}
           >
        <div className='sudoku-cell-content' style={style} data-highlight={highlighted}>
          {content === 0 ? null : content}
        {this._renderAnnotation()}
        </div>
      </div>
    )
  },

  componentWillMount () {
    let {sectionId, cellId} = this.props
    let content = sudokuStore.getCellValue(sectionId, cellId)
    let unsubscribed = sudokuSelectStore.subscribe(this.onSelecetedChange)
    let highlighted = content > 0 && sudokuSelectStore.getState() === content
    let initialState = {
      unsubscribed,
      highlighted,
      content,
      annotations: new Set()
    }
    this.setState(initialState)
  },

  componentWillUnmount () {
    this.state.unsubscribed()
  },

  onClick () {
    let mode = inputModeStore.getMode()
    switch (mode) {
      case INPUT_MODE.ANSWER:
        this._writeAsAnswer()
        return
      case INPUT_MODE.ANNOTATION:
        this._writeAsAnnotation()
        return
      default:
        return
    }
  },

  _writeAsAnswer () {
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

    let nextState = {
      content: sudokuStore.getCellValue(sectionId, cellId)
    }
    let highlighted = (nextState.content === selected) && (nextState.content !== 0)
    nextState = Object.assign(nextState, {highlighted})
    this.setState(nextState)

    if (type === 'PUT') {
      this._isFinished()
    }
  },

  _writeAsAnnotation () {
    let value = sudokuSelectStore.getState()
    if (this.state.content > 0 || value === 0) return
    let {sectionId, cellId} = this.props
    let annotation = {
      sectionId,
      cellId,
      value
    }
    // put or delete
    let type = annotationStore.hasAnnotationOf(sectionId, cellId, value) ? 'DELETE' : 'PUT'
    annotationStore.dispatch({type, payload: annotation})
    this.setState({
      annotations: annotationStore.getAnnotations(sectionId, cellId)
    })
  },

  onSelecetedChange () {
    let {content} = this.state
    let highlighted = content > 0 && sudokuSelectStore.getState() === content
    if (highlighted !== this.state.highlighted) {
      this.setState({highlighted})
    }
  },

  _renderAnnotation () {
    if (this.state.content !== 0) return null
    return (
      <SudokuCellAnnotation annotations={this.state.annotations} />
    )
  },

  _isFinished () {
    if (sudokuStore.isFinished()) {
      window.alert('congraturations!!')
    }
  }
})

export default SudokuCell
