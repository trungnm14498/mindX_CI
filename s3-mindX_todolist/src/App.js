import './App.css';
import './components/Todolist/style.css'
import {TodolistItem} from './components/Todolist'
import {InputItem} from './components/Todolist'
import {Footer} from './components/Todolist'

const item = document.querySelector('.item');
console.log(item);


function App() {
  const data = ["Clean up bedroom","Buy some milk"];

  return (
    <div className='page'>
      <header className='container'>
        <InputItem></InputItem>
      </header>
      <body>
        <div className='content_container container'>
          {data.map(e => {
            return (
              <TodolistItem text={e}/>
            )
          })}
          {/* <TodolistItem text = "Clean up bedroom"/>
          <TodolistItem text = "Buy some milk"/>
          <TodolistItem text = "Jogging"/>
          <TodolistItem text = "Learn React"/>
          <TodolistItem text = "Doing Exercises"/> */}
        </div>
      </body>
      <footer className='container'>
        <Footer count ={data.length}></Footer>
      </footer>
    </div>
  );
}

export default App;
