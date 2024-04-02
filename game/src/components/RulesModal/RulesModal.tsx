import React, { useCallback, useContext, useEffect, useRef } from 'react';
import style from './RulesModal.module.css';
import GlobalContext from '../../context/GlobalContext';
import closeIcon from '../../icons/icon-close.svg';
import rulesIcon from '../../icons/image-rules.svg';
import bonusRulesIcon from '../../icons/image-rules-bonus.svg';

const RulesModal = () => {
  const { showRulesModal, setShowRulesModal, isBonusTour } =
    useContext(GlobalContext);
  const modalRef = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && modalRef.current.contains(event.target as Node)) {
        setShowRulesModal?.(false);
      }
    },
    [setShowRulesModal]
  );

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, [clickOutside]);

  return (
    <div
      ref={modalRef}
      className={`${style.modal__container} ${
        showRulesModal ? style.modal__container_active : ''
      }`}
    >
      <div className={style.modal}>
        <img
          className={style.modal__closeIcon}
          onClick={() => setShowRulesModal?.(false)}
          src={closeIcon}
          alt='closeIcon'
        />
        <img
          src={isBonusTour ? bonusRulesIcon : rulesIcon}
          alt={`${isBonusTour} ? bonusRulesIcon : rulesIcon}`}
        />
      </div>
    </div>
  );
};

export default RulesModal;
