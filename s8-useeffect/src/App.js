import './App.css';
import Page from './Page/Page';
import BackToTopBtn from './BackToTopBtn/BackToTopBtn';
import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';

function App() {
  const [isShow, setIsShow] = useState(false);
  const animation = ['animate__animated animate__fadeInUp animate__faster',
    'animate__animated animate__fadeOutDown animate__faster'];
  const [count, setCount] = useState(0);
  const debouncedValue = useDebounce(count, 1200);

  const handleInput = (e) => {
    const input = e.target.value;

    const wordsCount = (input) => {
      if (input.length === 0) {
        return 0;
      } else {
        input = input.replace(/(^\s*)|(\s*$)/gi, "");
        input = input.replace(/[ ]{2,}/gi, " ");
        input = input.replace(/\n /, "\n");
        return input.split(' ').length;
      }
    }
    setCount(wordsCount(input));
  }

  useEffect(() => {

  }, []);

  // const hide = async (ms) => {

  //   await new Promise(r => setTimeout(r, ms));
  //   console.log(1);
  //   setIsShow(false);
  // }

  let lastScrollTop = 0;
  const controlDirection = () => {
    if (window.scrollY > lastScrollTop || window.scrollY === 0) {
      setIsShow(false);
      // hide(1500);
    }
    else {
      setIsShow(true);
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsShow(true);
    }
    lastScrollTop = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
      window.removeEventListener('scroll', controlDirection);
    };
  }, []);

  return (
    <div className='App'>
      <Page count={debouncedValue} handleInput={handleInput} />
      {isShow ? <BackToTopBtn animation={animation[0]}/> : <BackToTopBtn animation={animation[1]}/>}
    </div>

  );
}

export default App;
