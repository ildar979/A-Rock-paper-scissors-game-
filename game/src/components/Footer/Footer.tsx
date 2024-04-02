import React, { useContext } from 'react'
import style from './Footer.module.css'
import GlobalContext from '../../context/GlobalContext';

const Footer = () => {

  const context = useContext(GlobalContext);
  if (context === null) return null;  
  const { isBonusTour, setIsBonusTour, setShowRulesModal } = context;

  return (
    <div className={style.footer__container}>
      <button onClick={() => setIsBonusTour(!isBonusTour)}>Бонус</button>
      <button onClick={() => setShowRulesModal(true)}>Правила</button>
    </div>
  )
}

export default Footer
