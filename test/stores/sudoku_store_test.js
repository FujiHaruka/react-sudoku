import expect from 'expect'
import { createStore } from 'redux'
import sudokuStore from '../../source/stores/sudoku_store'

describe('stores', () => {
  describe('sudoku', () => {

    it('can check whether finished', () => {
      let problem = '897416532453289761612573498724861359961357824385942176238195647179634285546728913'
      sudokuStore.dispatch({type: 'INIT', payload: problem})
      expect(sudokuStore.isFinished()).toBe(true)
    })

    it('can catch wrong answer', () => {
      let problem = '112345678912345678912345678912345678912345678912345678912345678912345678912345678'
      sudokuStore.dispatch({type: 'INIT', payload: problem})
      expect(sudokuStore.isFinished()).toBe(false)
    })
  })
})
