import React, { useContext } from 'react'
import style from './BonusField.module.css'
import scissorIcon from '../../icons/icon-scissors.svg'
import paperIcon from '../../icons/icon-paper.svg'
import pentagon from '../../icons/bg-pentagon.svg'
import rockIcon from '../../icons/icon-rock.svg'
import spockIcon from '../../icons/icon-spock.svg'
import lizardIcon from '../../icons/icon-lizard.svg'
import GlobalContext from '../../context/GlobalContext'
import { getSelection } from '../../helpers/getSelection'

const BonusField = () => {

  const context = useContext(GlobalContext);
  if (context === null) return null;  
  const { setUserSelection } = context

  return (
    <div className={style.bonusField__container}>
      <img src={pentagon} alt='Pentagon'/>
        <div data-id="paperIcon" className={style.paper__wrapper} onClick={(event) => getSelection(event, setUserSelection)}>
          <img src={paperIcon} alt='paperIcon'/>
        </div>
        <div data-id="scissorIcon" className={style.scissor__wrapper} onClick={(event) => getSelection(event, setUserSelection)}>
          <img src={scissorIcon} alt='scissorIcon'/>
        </div>
        <div data-id="rockIcon" className={style.rock__wrapper} onClick={(event) => getSelection(event, setUserSelection)}>
          <img src={rockIcon} alt='rockIcon'/>
        </div>
        <div data-id="spockIcon" className={style.spock__wrapper} onClick={(event) => getSelection(event, setUserSelection)}>
          <img src={spockIcon} alt='rockIcon'/>
        </div>
        <div data-id="lizardIcon" className={style.lizard__wrapper} onClick={(event) => getSelection(event, setUserSelection)}>
          <img src={lizardIcon} alt='rockIcon'/>
        </div>
    </div>
  )
}

export default BonusField
