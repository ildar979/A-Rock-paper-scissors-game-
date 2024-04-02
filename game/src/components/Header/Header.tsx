import React from 'react'
import logoIcon from '../../icons/logo.svg'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header__container}>
      <img src={logoIcon} alt="Close Icon" />
      <div className={style.scorebox}>
            <span className={style.scorebox__title}>Счет</span>
            <div className={style.scorebox__score}>99</div>
      </div>
    </header>
  )
}

export default Header
