import './App.css';
import './components/Todolist/style.css'
import {TodolistItem} from './components/Todolist'
import {InputItem} from './components/Todolist'
import {Footer} from './components/Todolist'

const item = document.querySelector('.item');
console.log(item);

function App() {
  return (
    <div className='page'>
      <header className='container'>
        <InputItem></InputItem>
      </header>
      <body>
        <div className='content_container container'>
          <TodolistItem text = "Clean up bedroom"/>
          <TodolistItem text = "Buy some milk"/>
          <TodolistItem text = "Jogging"/>
          <TodolistItem text = "Learn React"/>
          <TodolistItem text = "Doing Exercises"/>
        </div>
      </body>
      <footer className='container'>
        <Footer count = "5"></Footer>
      </footer>
    </div>
  );
}

export default App;
