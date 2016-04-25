import React from 'react'

const SudokuCellAnnotation = React.createClass({
  propTypes: {
    annotations: React.PropTypes.object
  },
  render () {
    let {annotations} = this.props
    let annotationList = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
      return annotations.has(i) ? i : ''
    })

    return (
      <div className='sudoku-cell-annotation'>
        {annotationList.map((i, index) =>
          <div className='sudoku-cell-annotation-number' key={index + 1}>
            {i}
          </div>
        )}
      </div>
    )
  }
})

export default SudokuCellAnnotation
