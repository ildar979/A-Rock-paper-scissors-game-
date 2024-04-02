import React, { useContext } from 'react'
import style from './ResultField.module.css'
import scissorIcon from '../../icons/icon-scissors.svg'
import GlobalContext from '../../context/GlobalContext'
import { ICON_BORDER_COLOR, ICON_LIST } from '../../constants'
import spinner from '../../icons/spinner.svg'

const ResultField = () => {

  const context = useContext(GlobalContext);
  if (context === null) return null;  
  const { userSelection, setUserSelection } = context

  return (
    <div className={style.resultField__container}>
      <div className={style.сhooseIcon__wrapper}>
        <span>вы выбрали</span>
        <div className={style.paper__wrapper} style={{ color: ICON_BORDER_COLOR[userSelection] }}>
          <img src={ICON_LIST[userSelection]} alt={`${userSelection}`}/>
        </div>
      </div>
      <div className={style.resultBox}>
        <span className={style.resultBox__title}>вы проиграли</span>
        <button className={style.reset__button} onClick={() => setUserSelection('')}>играть снова</button>
      </div>
      <div className={style.сhooseIcon__wrapper}>
        <span>компьютер выбрал</span>
        <div className={style.spinner__wrapper}>
          <img src={spinner} alt='spinner'/>
        </div>
        {/* <div className={style.scissor__wrapper}>
          <img src={scissorIcon} alt='scissorIcon'/>
        </div> */}
      </div>
    </div>
  )
}

export default ResultField
