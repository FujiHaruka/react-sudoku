import React from 'react'
import difficultyStore from '../stores/difficulty_store'
import sudokuStore from '../stores/sudoku_store'
import {DIFFICUITY} from '../util/consts'
import SUDOKU_UTIL from '../util/sudoku_util'

const SelectProblem = React.createClass({
  render () {
    return (
      <div className='select-problem'>
        <div id='select-problem-title'>
          難易度選択
        </div>
        {Object.keys(DIFFICUITY).map(dif => this._SelectButton(dif))}
      </div>
    )
  },

  _SelectButton (difficulty) {
    return (
      <div className='select-problem-button' onClick={this.onClick(difficulty).bind(this)} key={difficulty}>
        {DIFFICUITY[difficulty]}
      </div>
    )
  },

  onClick (difficulty) {
    return function () {
      if (difficultyStore.getState() === difficulty) {
        window.alert('現在この難易度の問題を選択中です！')
      } else {
        if (window.confirm('問題を変更すると途中データは失われますがいいですか？')) {
          this.beginNewGame(difficulty)
        }
      }
    }
  },

  beginNewGame (difficulty) {
    let problem = SUDOKU_UTIL.getTodaysGame(difficulty)
    // actions for localstorage
    sudokuStore.dispatch({
      type: 'INIT',
      payload: problem
    })
    difficultyStore.dispatch({
      type: 'CHANGE',
      payload: difficulty
    })
    window.scroll(0, 0)
    window.location.reload()
  }
})

export default SelectProblem
