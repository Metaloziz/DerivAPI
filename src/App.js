import {api} from './utils/connection';
import './App.css';

function App() {


  const foo = async () => {
    console.log(api.basic);
  }


  return (
    <div className="App">
      <button onClick={foo}>click</button>
    </div>
  );
}

export default App;
