import expect from 'expect'
import inputModeStore from '../../source/stores/sudoku_input_mode_store'
import {INPUT_MODE} from '../../source/util/consts'

describe('input mode store', () => {
  it('shoud toggle mode', () => {
    expect(inputModeStore.getMode()).toBe(INPUT_MODE.ANSWER)
    inputModeStore.toggle()
    expect(inputModeStore.getMode()).toBe(INPUT_MODE.ANNOTATION)
    inputModeStore.toggle()
    expect(inputModeStore.getMode()).toBe(INPUT_MODE.ANSWER)
  })
})
