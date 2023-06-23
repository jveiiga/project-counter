import { useContext } from 'react';
import { CouterContext } from './contexts/CounterContext';
import './App.css';
import { Button } from './components/Button';

function App() {

  const {counter, increment, decrement} = useContext(CouterContext)

  return (
    <div className="App App-header">
      <h1>{counter}</h1>
      <span className="container-btn">
        <Button 
          onClick={() => decrement()}
          className="primary"
        >
          -
        </Button>
        <Button 
          onClick={() => increment()}
          className="primary"
        >
          +
        </Button>
      </span>
    </div>
  );
}

export default App;
