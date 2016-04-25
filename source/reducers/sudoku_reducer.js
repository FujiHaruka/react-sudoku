import LocalStorage from '../util/localstorage'

// number[9][9]
// INIT
// payload = '0010200214012010...'
// PUT
// payload = {col: 1, row: 2, value: 3}
// -> sudoku[1][2] = 3
// DELETE
// peyload = {col: 1, row: 2}
// -> sudoku[1][2] = 0

function cell (value, variable) {
  return {
    value: value,
    variable: variable
  }
}

function put (state, row, col, value) {
  if (state[row][col].variable) {
    state[row][col].value = value
  }
  return [].concat(state)
}

function isVariable (number) {
  return Number(number) === 0
}

export default function sudokuReducer (state = [], action) {
  switch (action.type) {
    case 'INIT':
      let init = action.payload.split('').reduce((prev, cur, i) => {
        if (i % 9 === 0) {
          prev.push([cell(Number(cur), isVariable(cur))])
        } else {
          prev[Math.floor(i / 9)].push(cell(Number(cur), isVariable(cur)))
        }
        return prev
      }, [])
      LocalStorage.putSudoku(init)
      return init
    case 'PUT':
      let putting = put(state, action.payload.row, action.payload.col, action.payload.value)
      LocalStorage.putSudoku(putting)
      return putting
    case 'DELETE':
      let deleting = put(state, action.payload.row, action.payload.col, 0)
      LocalStorage.putSudoku(deleting)
      return deleting
    case 'SET':
      return action.payload
    default:
      return state
  }
}
