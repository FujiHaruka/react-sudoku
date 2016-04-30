import React from 'react'
import difficultyStore from '../stores/difficulty_store'
import NewGameMixin from '../util/new_game_mixin'
import {DIFFICUITY} from '../util/consts'

const SelectProblem = React.createClass({
  mixins: [NewGameMixin],

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
      if (this.isDateToday() && difficultyStore.getState() === difficulty) {
        window.alert('現在この難易度の問題を選択中です！')
      } else {
        this.beginNewGame(difficulty)
      }
    }
  }
})

export default SelectProblem
