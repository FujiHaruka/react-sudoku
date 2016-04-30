import React from 'react'
import difficultyStore from '../stores/difficulty_store'
import dateStore from '../stores/date_store'
import NewGameMixin from '../util/new_game_mixin'
import {DIFFICUITY} from '../util/consts'

const SudokuHeader = React.createClass({
  mixins: [NewGameMixin],

  render () {
    let difficulty = difficultyStore.getState()
    let day = new Date(dateStore.getState())
    let month = day.getMonth() + 1
    let date = day.getDate()
    return (
      <div className='sudoku-header-message'>
        <div className='main'>
          {month}月{date}日のナンプレ問題 [ 難易度 : <strong>{DIFFICUITY[difficulty]}</strong> ]
        </div>
        <div className='link'>
          {this._writeNotice()}
        </div>
      </div>
    )
  },
  _writeNotice () {
    if (!this.isDateToday()) {
      return (
        <a href='javascript:void(0)' onClick={this.onNewGame}>今日の問題へ</a>
      )
    } else {
      return null
    }
  },
  onNewGame () {
    let difficulty = difficultyStore.getState()
    this.beginNewGame(difficulty)
  }
})

export default SudokuHeader
