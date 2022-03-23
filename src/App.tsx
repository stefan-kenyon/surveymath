import './App.css';

import { randomNumber, dmsNumber } from './utility/numberFunction'

function App() {
  let number = dmsNumber();
  console.log(number)
  return (
    <div className="App">
      <header>
        
        <h1>surveymath</h1>
        <p>A site designed to help people learn/practice survey mathematics</p>

        <h3>Development</h3>
        <p>Functions that create dd-mm-ss numbers</p>
        <p>Functions that add/subtract dd-mm-ss numbers</p>
      
        <p>{number.degrees}-{number.minutes}-{number.seconds}</p>
      </header>
    </div>
  );
}

export default App;
