import React, { useCallback, useContext, useEffect, useState } from 'react'
import style from './ResultField.module.css'
import GlobalContext from '../../context/GlobalContext'
import { BONUS_TOUR, ICON_BORDER_COLOR, ICON_LIST, RESULT, SIMPLE_TOUR } from '../../constants'
import Spinner from '../Spinner/Spinner'
import { getRandomSelection } from '../../helpers/getRandomSelection'
import { getWinners } from '../../helpers/getWinner'

const ResultField = () => {

  const [aiSelection, setAiSelection] = useState('')
  const [load, setLoad] = useState(false)
  const [chooseWinner, setChooseWinner] = useState<'user' | 'AI' | 'draw'>('draw')

  const { userSelection, setUserSelection, isBonusTour, setScore } = useContext(GlobalContext) 

  useEffect(() => {
    setLoad(true)
    const timerId = setTimeout(() => {
      setLoad(false)
      if(aiSelection) {
        getWinners(userSelection, aiSelection, setChooseWinner, setScore)
      }
    }, 2000)
    const tour: string[] = isBonusTour ? BONUS_TOUR : SIMPLE_TOUR
    if(userSelection) {
      setAiSelection(getRandomSelection(tour))
    }
    return () => clearTimeout(timerId)
  }, [aiSelection, isBonusTour, setScore, userSelection])

  const newGame = () => {
    setUserSelection('')
    setAiSelection('')
  }

  return (
    <div className={style.resultField__container}>
      <div className={style.сhooseIcon__wrapper}>
        <span>вы выбрали</span>
        <div className={style.paper__wrapper} style={{ color: ICON_BORDER_COLOR[userSelection] }}>
          <img src={ICON_LIST[userSelection] as string} alt={`${userSelection}`}/>
        </div>
      </div>
      {
        !load && 
          <div className={style.resultBox}>
            <span className={style.resultBox__title}>{RESULT[chooseWinner]}</span>
            <button className={style.reset__button} onClick={newGame}>играть снова</button>
          </div>
      }
      <div className={style.сhooseIcon__wrapper}>
        <span>компьютер выбрал</span>
        {load ? <Spinner /> : (
          <div className={style.scissor__wrapper} style={{ color: ICON_BORDER_COLOR[aiSelection] }}>
            <img src={ICON_LIST[aiSelection] as string} alt={`${aiSelection}`}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultField
