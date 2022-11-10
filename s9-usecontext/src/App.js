import './App.css';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import { translatorContext } from './components/Translator/Translation';
import Translator from './components/Translator/Translator.json';
import { useContext, useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [username, setUsername] = useState();
  const translatorCxt = useContext(translatorContext)

  return (
    <translatorContext.Provider value={{
      translatorCxt: translatorCxt,
      currentLanguage: currentLanguage,
      setCurrentLanguage: setCurrentLanguage,
      isLogin: isLogin,
      setIsLogin: setIsLogin,
      username: username,
      setUsername: setUsername
    }}>
      <div className="App">
        <Nav />
        <Login />
      </div>
    </translatorContext.Provider>

  );
}

export default App;
