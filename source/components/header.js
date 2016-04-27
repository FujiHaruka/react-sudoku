import React from 'react'

const Header = React.createClass({
  render () {
    return (
      <div className='header'>
        <h1 id='header-title'>日替わりナンプレ(数独) α版</h1>
        <div id='header-message'>スマホで遊べる無料のナンプレ</div>
      </div>
    )
  }
})

export default Header
