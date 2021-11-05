import './App.css';

import Menu from './views/menu.js';
import Landing from './views/landing.js';
import About from './views/about.js';
import Services from './views/services.js';

function App() {

  document.title ='Coworking';

  return (
    <div className="App">

      <Menu/>
      <Landing/>
      <About/>

      <Services/>

    </div>
  );
}

export default App;
