import DerivAPI from "@deriv/deriv-api";
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic.js';
import './App.css';
import './utils/connection'
import './AppDeriv'

function App() {

  const connection = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');
  const api = new DerivAPIBasic({connection});
  const tickStream = () => api.subscribe({ticks: "R_100"});


  console.log('tickStream', [tickStream])
  // console.log(basic)

  connection.onopen = function (e) {
    console.log('open', [e])
  }

  connection.onmessage = function (e) {
    console.log('onmessage', [e])
  }

  connection.onclose = function (e) {
    console.log('onclose', [e])
  }

  connection.onerror = function (e) {
    console.log('onerror', [e])
  }


  // api.ping().then(console.log);

  const foo = async () => {


  }


  return (
    <div className="App">
      {/*<button onClick={foo}>click</button>*/}
      <button id="ticks" onClick={subscribeTicks}>Subscribe Ticks</button>
      <button id="ticks-unsubscribe" className="resetBtn">Unsubscribe Ticks</button>
    </div>
  );
}

export default App;
