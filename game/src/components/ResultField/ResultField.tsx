import React, { useCallback, useContext, useEffect, useState } from 'react';
import style from './ResultField.module.css';
import GlobalContext from '../../context/GlobalContext';
import {
  BONUS_TOUR,
  ICON_BORDER_COLOR,
  ICON_LIST,
  RESULT,
  SIMPLE_TOUR,
} from '../../constants';
import Spinner from '../Spinner/Spinner';
import { getRandomSelection } from '../../helpers/getRandomSelection';
import { getWinners } from '../../helpers/getWinner';

const ResultField = () => {
  const [aiSelection, setAiSelection] = useState('');
  const [load, setLoad] = useState(false);
  const [chooseWinner, setChooseWinner] = useState<'user' | 'AI' | 'draw'>(
    'draw'
  );

  const { userSelection, setUserSelection, isBonusTour, setScore } =
    useContext(GlobalContext);

  const newGame = () => {
    setUserSelection?.('');
    setAiSelection('');
  };

  const totalScore = useCallback(
    (winner: string) => {
      if (winner === 'user') {
        const newScore = (prev: number) => prev + 1;
        setScore?.(newScore as unknown as number);
      } else if (winner === 'AI') {
        const newScore = (prev: number) => prev - 1;
        setScore?.(newScore as unknown as number);
      }
    },
    [setScore]
  );

  useEffect(() => {
    totalScore(chooseWinner);
  }, [chooseWinner, totalScore]);

  useEffect(() => {
    setLoad(true);
    const timerId = setTimeout(() => {
      setLoad(false);
      if (aiSelection && userSelection) {
        getWinners(userSelection, aiSelection, setChooseWinner);
      }
    }, 2000);
    const tour: string[] = isBonusTour ? BONUS_TOUR : SIMPLE_TOUR;
    if (userSelection) {
      setAiSelection(getRandomSelection(tour));
    }
    return () => clearTimeout(timerId);
  }, [aiSelection, isBonusTour, setScore, userSelection]);

  return (
    <div className={style.resultField__container}>
      <div className={style.chooseIcon__wrapper}>
        <span>вы выбрали</span>
        {userSelection && (
          <div
            className={style.userSelection__wrapper}
            style={{ color: ICON_BORDER_COLOR[userSelection ?? ''] }}
          >
            <img
              src={ICON_LIST[userSelection] as string}
              alt={`${userSelection}`}
            />
          </div>
        )}
      </div>
      {!load && (
        <div className={style.resultBox}>
          <span className={style.resultBox__title}>{RESULT[chooseWinner]}</span>
          <button className={style.reset__button} onClick={newGame}>
            играть снова
          </button>
        </div>
      )}
      <div className={style.chooseIcon__wrapper}>
        <span>компьютер выбрал</span>
        {load ? (
          <Spinner />
        ) : (
          <div
            className={style.aiSelection__wrapper}
            style={{ color: ICON_BORDER_COLOR[aiSelection] }}
          >
            <img
              src={ICON_LIST[aiSelection] as string}
              alt={`${aiSelection}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultField;
