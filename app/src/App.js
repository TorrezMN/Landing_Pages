import './App.css';


import Index from './views/index.js';
import About from './views/about.js';
import Scales from './views/scales.js';
import Contact from './views/contact.js';




function App() {
  document.title='Fresh Air';
  return (
    <div className="App">
    
      <Index/>

      <About/>


      <Scales/>



      <Contact/>
    </div>
  );
}

export default App;
