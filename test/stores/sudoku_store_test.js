import expect from 'expect'
import { createStore } from 'redux'
import sudokuStore from '../../source/stores/sudoku_store'
import sudokuAnswerStore from '../../source/stores/sudoku_answer_store'
import sha1 from 'sha1'

describe('stores', () => {
  describe('sudoku', () => {

    let problem = '912345678912345678912345678912345678912345678912345678912345678912345678912345678'
    let answer = sha1(problem)

    it('can check whether finished', () => {
      sudokuStore.dispatch({type: 'INIT', payload: problem})
      sudokuAnswerStore.dispatch({type: 'INIT', payload: answer})
      expect(sudokuStore.isFinished()).toBe(true)
    })
  })
})
