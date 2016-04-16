// number[9][9]
// INIT
// payload = '0010200214012010...'
// PUT
// payload = {col: 1, row: 2, value: 3}
// -> sudoku[1][2] = 3
// DELETE
// peyload = {col: 1, row: 2}
// -> sudoku[1][2] = 0

export default function sudokuReducer(state = [], action) {
  switch (action.type) {
    case 'INIT':
      return action.payload.split('').reduce((prev, cur, i) => {
        if (i % 9 === 0) {
          prev.push([Number(cur)])
        } else {
          prev[Math.floor(i / 9)].push(Number(cur))
        }
        return prev
      }, [])
    case 'PUT':
      state[action.payload.row][action.payload.col] = action.payload.value
      return state
    case 'DELETE':
      state[action.payload.row][action.payload.col] = 0
      return state
    default:
      return state
  }
}
