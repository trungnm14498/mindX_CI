import './App.css';
import Light from './components/Light';
import Counter from './components/Counter';
import Student from './components/Student';
import StudentClass from './components/StudentClass';

function App() {
  return (
    <div className="App">
        <section className="light_section">
          <Light />
        </section>
        <section className='counter_section'>
          <Counter/>
        </section>
        <section className='student_section'>
          <Student/>
        </section>
        <section className='studentclass_section'>
          <StudentClass/>
        </section>
    </div>
  );
}

export default App;