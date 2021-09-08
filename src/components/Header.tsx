import '../styles/header.scss'
// eslint-disable-next-line no-use-before-define
import React from 'react'

export function Header () {
  return (
    <header className="header">
      <div>
        <img src="/logo.svg" alt="to.do"/>
      </div>
    </header>
  )
}
