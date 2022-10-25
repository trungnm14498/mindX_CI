import './App.css';
import Card from './components/Card';
import SplitPane from './components/Layout';
import Title from './components/Title';
import {data1, data2} from './data';

const cardsRenderLeft = data1.map(e => {
  return <Card id={e.id} image={e.image} title={e.title} author={e.author} date={e.date} duration={e.duration}/>
});

const cardsRenderRight = data2.map(e => {
  return <Card id={e.id} image={e.image} title={e.title} author={e.author} date={e.date} duration={e.duration}/>
});

function App() {
  return (
    <div className="App">
      <body>
        <Title name={"Bảng Xếp Hạng Podcast"}/>
        <SplitPane
        left={cardsRenderLeft}
        right={cardsRenderRight}
        />   
      </body>
    </div>
  );
}

export default App;
