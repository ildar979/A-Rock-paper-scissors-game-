import React from 'react';

interface MyContextType {
  isBonusTour: boolean
  setIsBonusTour: (state: boolean) => void
  showRulesModal: boolean
  setShowRulesModal: (state: boolean) => void
  userSelection: string
  setUserSelection: (state: string) => void
  score: number
  setScore: (state: number) => void
}

const GlobalContext = React.createContext<MyContextType | null>(null);

export default GlobalContext;
