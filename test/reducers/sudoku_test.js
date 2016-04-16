import expect from 'expect'
import { createStore } from 'redux'
import sudokuReducer from '../../source/reducers/sudoku_reducer'

describe('reducers', () => {
  describe('sudoku', () => {
    it('should be ok', () => {
      expect(1 + 1).toBe(2)
    })

    let problem = '012345678012345678012345678012345678012345678012345678012345678012345678012345678'

    it('should provide the initial state', () => {
      let initial = sudokuReducer(undefined, {type: 'INIT', payload: problem})
      expect(initial[0][0]).toBe(0)
      expect(initial[1][0]).toBe(0)
      expect(initial[0][1]).toBe(1)
    })

    it('should handle PUT action', () => {
      let initial = sudokuReducer(undefined, {type: 'INIT', payload: problem})
      let putting = {col: 1, row: 2, value: 9}
      let put = sudokuReducer(initial, {type: 'PUT', payload: putting})
      expect(put[1][2]).toBe(9)
    })

    it('should handle DELETE action', () => {
      let initial = sudokuReducer(undefined, {type: 'INIT', payload: problem})
      let deleting = {col: 1, row: 2}
      let deleted = sudokuReducer(initial, {type: 'DELETE', payload: deleting})
      expect(deleted[1][2]).toBe(0)
    })

    it('should provide through redux store', () => {
      const sudokuStore = createStore(sudokuReducer)
      sudokuStore.dispatch({
        type: 'INIT',
        payload: problem
      })
      let sudokuState = sudokuStore.getState()
      expect(sudokuState[0][1]).toBe(1)
    })
  })
})
