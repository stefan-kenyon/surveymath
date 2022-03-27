import './App.css';

import Add from './components/Add';
import Subtract from './components/Subtract';
import FormInput from './components/FormInput'

function App() {

  return (
    <div className="App">
      <header>
        
        <h1 className='sm-title'>surveymath</h1>
        <p>A site designed to help people learn/practice survey mathematics</p>
      
      </header>
        
      <main>

        <div className='main-left'>

          <h3>Development</h3>
          
          <ul>
            <li>Functions that create dd-mm-ss numbers</li>
            <li>Functions that add/subtract dd-mm-ss numbers</li>
            <li>Functions that convert dd-mm-ss to decimals and vice versa</li>
          </ul>
        
        </div>

        <div className='main-right'>

          <Add />
          <Subtract />
          <FormInput />

        </div>
        
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
