import React, { useContext } from 'react';
import logoIcon from '../../icons/logo.svg';
import style from './Header.module.css';
import GlobalContext from '../../context/GlobalContext';

const Header = () => {
  const { score } = useContext(GlobalContext);

  return (
    <header className={style.header__container}>
      <img src={logoIcon} alt='Close Icon' />
      <div className={style.scorebox}>
        <span className={style.scorebox__title}>Счет</span>
        <div className={style.scorebox__score}>{score}</div>
      </div>
    </header>
  );
};

export default Header;
