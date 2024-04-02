import React, { useContext } from 'react';
import Header from './components/Header/Header';
import PlayField from './components/PlayField/PlayField';
import ResultField from './components/ResultField/ResultField';
import Footer from './components/Footer/Footer';
import BonusField from './components/BonusField/BonusField';
import GlobalContext from './context/GlobalContext';
import RulesModal from './components/RulesModal/RulesModal';

function App() {
  const { isBonusTour, userSelection } = useContext(GlobalContext);

  const renderMainContent = () => {
    if (userSelection) return <ResultField />;
    if (isBonusTour) return <BonusField />;
    return <PlayField />;
  };

  return (
    <div className='container'>
      <Header />
      {renderMainContent()}
      <Footer />
      <RulesModal />
    </div>
  );
}

export default App;
