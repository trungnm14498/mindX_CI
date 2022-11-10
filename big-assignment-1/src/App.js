import './App.css';
import Home from './components/Home/home';
import { Routes, Route } from 'react-router-dom';
import AllTransactions from './components/AllTransactions/alltransactions';
import AddTransactions from './components/AddTransactions/addtransactions';
import Statistics from './components/Statistics/statistic';
import { useState } from 'react';
import DataContext from './DataContext';
import data from './data';
import MainMenu from './components/MainMenu/mainmenu';

function App() {
  const [items, setItems] = useState(data);
  items.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <DataContext.Provider value={{ items, setItems }}>
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allTransactions" element={<AllTransactions />} />
          <Route path="/addTransactions" element={<AddTransactions />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        <MainMenu />
      </div>
    </DataContext.Provider>
  );
}

export default App;
