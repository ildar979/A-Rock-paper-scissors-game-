import React, { useContext } from 'react';
import style from './Footer.module.css';
import GlobalContext from '../../context/GlobalContext';

const Footer = () => {
  const { isBonusTour, setIsBonusTour, setShowRulesModal, setUserSelection } =
    useContext(GlobalContext);

  const playBonusTour = () => {
    setIsBonusTour?.(!isBonusTour);
    setUserSelection?.('');
  };

  const openRules = () => {
    setShowRulesModal?.(true);
  };

  return (
    <div className={style.footer__container}>
      <button onClick={playBonusTour}>Бонус</button>
      <button onClick={openRules}>Правила</button>
    </div>
  );
};

export default Footer;
