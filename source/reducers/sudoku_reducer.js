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
      return action.payload.split('').reduce((prev, cur, i) => {
        if (i % 9 === 0) {
          prev.push([cell(Number(cur), isVariable(cur))])
        } else {
          prev[Math.floor(i / 9)].push(cell(Number(cur), isVariable(cur)))
        }
        return prev
      }, [])
    case 'PUT':
      return put(state, action.payload.row, action.payload.col, action.payload.value)
    case 'DELETE':
      return put(state, action.payload.row, action.payload.col, 0)
    default:
      return state
  }
}
