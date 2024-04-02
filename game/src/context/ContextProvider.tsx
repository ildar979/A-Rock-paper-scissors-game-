import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

interface MyProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<MyProviderProps> = ({ children }) => {

  const [isBonusTour, setIsBonusTour] = useState(false)
  const [showRulesModal, setShowRulesModal] = useState(false)
  const [userSelection, setUserSelection] = useState('')

  const value = {
    isBonusTour,
    setIsBonusTour,
    showRulesModal,
    setShowRulesModal,
    userSelection, 
    setUserSelection,
  };

  return <GlobalContext.Provider value={ value }> { children } </GlobalContext.Provider>
};

export default ContextProvider;
