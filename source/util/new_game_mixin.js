import sudokuStore from '../stores/sudoku_store'
import dateStore from '../stores/date_store'
import difficultyStore from '../stores/difficulty_store'
import SUDOKU_UTIL from '../util/sudoku_util'

const NewGameMixin = {
  beginNewGame (difficulty) {
    if (window.confirm('問題を変更すると途中データは失われますがいいですか？')) {
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
      dateStore.dispatch({
        type: 'SET_TODAY'
      })
      // reload
      window.scroll(0, 0)
      window.location.reload()
    }
  },
  isDateToday () {
    let day = new Date(dateStore.getState())
    return day.toDateString() === (new Date()).toDateString()
  }
}

export default NewGameMixin
