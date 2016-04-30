import React from 'react'
import SudokuSection from './sudoku_section'
import sudokuFinishStore from '../stores/sudoku_finish_store'
import sudokuSelectStore from '../stores/sudoku_select_store'

const SudokuBoard = React.createClass({
  render () {
    let sectionIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
      <div className='sudoku-board'>
          {this._renderCongraturation()}
          {sectionIds.map(id => this._renderSudokuSection(id))}
      </div>
    )
  },
  componentWillMount () {
    sudokuFinishStore.subscribe(this.onFinish)
  },
  onFinish () {
    console.log('forceUpdate')
    sudokuSelectStore.dispatch({'type': 'SET', payload: 0})
    this.forceUpdate()
  },
  _renderSudokuSection (id) {
    return (
      <SudokuSection sectionId={id} key={id} />
    )
  },
  _renderCongraturation () {
    if (sudokuFinishStore.isFinished()) {
      return (
        <div className='sudoku-congratulation' data-visible='visible' >
            正  解
        </div>
      )
    } else {
      return (
        <div className='sudoku-congratulation'></div>
      )
    }
  }
})

export default SudokuBoard
