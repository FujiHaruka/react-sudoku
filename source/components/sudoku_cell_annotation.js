import React from 'react'
import sudokuStore from '../stores/sudoku_store'
import annotationStore from '../stores/sudoku_annotation_store'
import inputModeStore from '../stores/sudoku_input_mode_store'
import annotationSelectStore from '../stores/annotation_select_store'
import writingSelectStore from '../stores/writing_select_store'
import SUDOKU_UTIL from '../util/sudoku_util'
import {INPUT_MODE, COLOR} from '../util/consts'

const SudokuCellAnnotation = React.createClass({
  render() {
    let {annotations} = this.props
    let annotationList = [1,2,3,4,5,6,7,8,9].map(i => {
      return annotations.has(i) ? i : ''
    })

    return (
      <div className="sudoku-cell-annotation">
        {annotationList.map((i, index) =>
          <div className="sudoku-cell-annotation-number" key={index + 1}>
            {i}
          </div>
        )}
      </div>
    )
  }
})

export default SudokuCellAnnotation
