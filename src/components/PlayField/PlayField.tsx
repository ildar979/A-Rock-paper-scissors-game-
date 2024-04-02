import React, { useContext } from 'react';
import triangle from '../../icons/bg-triangle.svg';
import paperIcon from '../../icons/icon-paper.svg';
import rockIcon from '../../icons/icon-rock.svg';
import scissorIcon from '../../icons/icon-scissors.svg';
import style from './PlayField.module.css';
import GlobalContext from '../../context/GlobalContext';
import { getSelection } from '../../helpers/getSelection';

const PlayField = () => {
  const { setUserSelection } = useContext(GlobalContext);

  return (
    <div className={style.playField__container}>
      <img src={triangle} alt='Triangle' />
      <div
        data-id='paperIcon'
        className={style.paper__wrapper}
        onClick={(event) => getSelection(event, setUserSelection!)}
      >
        <img src={paperIcon} alt='paperIcon' />
      </div>
      <div
        data-id='scissorIcon'
        className={style.scissor__wrapper}
        onClick={(event) => getSelection(event, setUserSelection!)}
      >
        <img src={scissorIcon} alt='scissorIcon' />
      </div>
      <div
        data-id='rockIcon'
        className={style.rock__wrapper}
        onClick={(event) => getSelection(event, setUserSelection!)}
      >
        <img src={rockIcon} alt='rockIcon' />
      </div>
    </div>
  );
};

export default PlayField;
