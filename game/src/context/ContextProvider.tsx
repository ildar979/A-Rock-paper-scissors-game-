import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

interface MyProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<MyProviderProps> = ({ children }) => {

  const [isBonusTour, setIsBonusTour] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)
  const [userSelection, setUserSelection] = useState('')
  const [score, setScore] = useState(0)

  const value = {
    isBonusTour,
    setIsBonusTour,
    showRulesModal,
    setShowRulesModal,
    userSelection, 
    setUserSelection,
    score, 
    setScore,
  };

  return <GlobalContext.Provider value={ value }> { children } </GlobalContext.Provider>
};

export default ContextProvider;
