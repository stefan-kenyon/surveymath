import './App.css';

import Add from './components/Add';
import Subtract from './components/Subtract';
import Form from './components/Form'

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
            <li>CST I</li>
              <ul>
                <li>Units of Measure</li>
                  <ul>
                    <li>Conversion of units</li>
                  </ul>
                <li>Angles</li>
                  <ul>
                    <li>Angle Addition</li>
                    <li>Angle Subtraction</li>
                    <li>Angle Conversion</li>
                    <li>Interior Angles</li>
                    <li>Exterior Angles</li>
                  </ul>
                <li>Bearings and Azimuths</li>
                  <ul>
                    <li>Conversions</li>
                  </ul>
              </ul>
            <li>CST II</li>
          </ul>
        
        </div>

        <div className='main-right'>

          <Add />
          <Subtract />
          <Form />

        </div>
        
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
