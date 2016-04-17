import expect from 'expect'
import sudokuAnnotationStore from '../../source/stores/sudoku_annotation_store'

describe('annotation store', () => {
  it('shoud put', () => {
    let annotation1 = {sectionId: 1, cellId: 2, value: 3}
    let annotation2 = {sectionId: 1, cellId: 2, value: 4}
    let annotation3 = {sectionId: 1, cellId: 3, value: 5}
    sudokuAnnotationStore.dispatch({type: 'PUT', payload: annotation1})
    sudokuAnnotationStore.dispatch({type: 'PUT', payload: annotation2})
    sudokuAnnotationStore.dispatch({type: 'PUT', payload: annotation3})
    expect(sudokuAnnotationStore.getAnnotations(1, 2).has(3)).toBe(true)
    expect(sudokuAnnotationStore.getAnnotations(1, 2).has(4)).toBe(true)
    expect(sudokuAnnotationStore.getAnnotations(1, 3).has(5)).toBe(true)
    expect(sudokuAnnotationStore.getAnnotations(5, 5).has(5)).toBe(false)
  })
  it('shoud delete', () => {
    sudokuAnnotationStore.dispatch({type: 'CLEAR'})
    let annotation1 = {sectionId: 1, cellId: 2, value: 3}
    sudokuAnnotationStore.dispatch({type: 'PUT', payload: annotation1})
    expect(sudokuAnnotationStore.getAnnotations(1, 2).has(3)).toBe(true)
    sudokuAnnotationStore.dispatch({type: 'DELETE', payload: annotation1})
    expect(sudokuAnnotationStore.getAnnotations(1, 2).has(3)).toBe(false)
  })
})
