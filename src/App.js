import logo from './logo.svg';
import './App.css';
import Heroes from './components/Heroes/Heroes';
import Show from './components/Show/Show';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <div className="heroes">
        <Show></Show>
        </div>   
    </div>
  );
}

export default App;
