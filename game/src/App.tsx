import React, { useContext } from 'react';
import Header from './components/Header/Header'
import PlayField from './components/PlayField/PlayField';
import ResultField from './components/ResultField/ResultField';
import Footer from './components/Footer/Footer';
import BonusField from './components/BonusField/BonusField';
import GlobalContext from './context/GlobalContext';
import RulesModal from './components/RulesModal/RulesModal';

function App() {

  const context = useContext(GlobalContext);
  if (context === null) return null;  
  const { isBonusTour, userSelection } = context

  return (
    <div className='container'>
      <Header />
      {
        userSelection ? <ResultField /> 
         : isBonusTour ? <BonusField /> : <PlayField />
      }       
      <Footer />
      <RulesModal />
    </div>
  );
}

export default App;
