import React from 'react';
import './App.css';
import Lista from './components/Lista';
import TrocaTema from './components/TrocaTema';
import GlobalContext from './GlobalContext';

const App = () => {
  const [tema, setTema] = React.useState('dark');
  
  const alteraTema = () => {
    setTema(tema === 'dark' ? 'light' : 'dark');
  }

  return <GlobalContext.Provider value={{tema, alteraTema}}>
    <div className={tema}>
      <Lista />
      <TrocaTema />
    </div>
  </GlobalContext.Provider>;
};

export default App;
