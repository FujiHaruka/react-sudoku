import expect from 'expect'
import sudokuInputModeStore from '../../source/stores/sudoku_input_mode_store'
import {INPUT_MODE} from '../../source/util/consts'

describe('input mode store', () => {
  it('shoud toggle mode', () => {
    expect(sudokuInputModeStore.getMode()).toBe(INPUT_MODE.ANSWER)
    sudokuInputModeStore.toggle()
    expect(sudokuInputModeStore.getMode()).toBe(INPUT_MODE.ANNOTATION)
    sudokuInputModeStore.toggle()
    expect(sudokuInputModeStore.getMode()).toBe(INPUT_MODE.ANSWER)
  })
})
