import './App.css';
import Home from './components/Home/home';
import { Routes, Route } from 'react-router-dom';
import AllTransactions from './components/AllTransactions/alltransactions';
import AddTransactions from './components/AddTransactions/addtransactions';
import Statistics from './components/Statistics/statistic';
import { useContext } from 'react';
import DataContext from './DataContext';

function App() {
  const items = useContext(DataContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home items={items}/>} />
				<Route path="/allTransactions" element={<AllTransactions/>} />
        <Route path="/addTransactions" element={<AddTransactions/>} />
        <Route path="/statistics" element={<Statistics items={items}/>} />
      </Routes>
    </div>
  );
}

export default App;
