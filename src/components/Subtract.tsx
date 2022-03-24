import {useState} from 'react';

import { dmsNumber } from '../utility/numberFunction'

function Subtract() {

  const [number1, setNumber1] = useState(dmsNumber);
  const [number2, setNumber2] = useState(dmsNumber);
  //const [addedNumbers, setAddedNumbers] = useState(addDMSNumbers(number1, number2));
  return (
    <div className="Subtract">
      
        <header>
          <h3>Subtracting DMS numbers</h3>
        </header>
      
        <main className='subtract-main'>

          <p>You are given two dd-mm-ss numbers, please subtract them. Click button to see solution.</p>
          <button onClick ={() => {setNumber1(dmsNumber); setNumber2(dmsNumber)}}>Refresh Numbers</button>
          
          <p>Number 1: {number1[0]}-{number1[1]}-{number1[2]}</p>
          <p>Number 2: {number2[0]}-{number2[1]}-{number2[2]}</p>
          <br/>
          {/* <button onClick = {() => setAddedNumbers(addDMSNumbers(number1, number2))}>Subtract Numbers</button>
          <p>Result: {addedNumbers[0]}-{addedNumbers[1]}-{addedNumbers[2]}</p> */}
        </main>
    
    </div>
  );
}

export default Subtract;