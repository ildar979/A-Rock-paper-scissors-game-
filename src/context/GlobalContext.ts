import React from 'react';

interface MyContextType {
  isBonusTour: boolean;
  setIsBonusTour: (state: boolean) => void;
  showRulesModal: boolean;
  setShowRulesModal: (state: boolean) => void;
  userSelection: string;
  setUserSelection: (state: string) => void;
  score: number;
  setScore: (state: number) => void;
}

const defaultValues: MyContextType = {
  isBonusTour: false,
  setIsBonusTour: () => {},
  showRulesModal: false,
  setShowRulesModal: () => {},
  userSelection: '',
  setUserSelection: () => {},
  score: 0,
  setScore: () => {},
};

const GlobalContext =
  React.createContext<Partial<MyContextType>>(defaultValues);

export default GlobalContext;
