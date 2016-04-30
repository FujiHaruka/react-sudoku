import React from 'react'

const Header = React.createClass({
  render () {
    return (
      <div className='header'>
        <div className='header-container'>
          <div id='header-message'>スマホで遊べる無料のナンプレ</div>
          <h1 id='header-title'>日替わりナンプレ（数独）α版</h1>
        </div>
      </div>
    )
  }
})

export default Header
