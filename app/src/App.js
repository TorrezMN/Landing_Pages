import './App.css';

import Landing from './views/landing.js';
import About from './views/about.js';


function App() {
  document.title = 'Maquina';
  return (
    <div className="App">
      <Landing/>
      <About/>


    </div>
  );
}

export default App;
