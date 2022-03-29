import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IFormInputs {
  degrees:number,
  minutes:number,
  seconds:number
}

function Form() {

  const {register, handleSubmit, watch, formState: {errors} } = useForm<IFormInputs>();
  const [guessedNumber, setGuessedNumber] = useState<Array<number>>([]);

  console.log('watch degrees', watch('degrees'));
  console.log('errors', errors);
  // console.log('watch variable email', watch('email'));
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    setGuessedNumber([]);
    if(data.degrees > 0 || data.minutes > 0 || data.seconds > 0) {
      //console.log('dd-mm-ss: ' + data.degrees + '-' + data.minutes + '-' + data.seconds);
      let guess: number[] = [data.degrees, data.minutes, data.seconds];
      updateGuess(guess);
    }
    else {

    }
  }
  
  function updateGuess(guess: number[]) {
    console.log('someone guessed ', guess);
    setGuessedNumber(guess);
  }

  return (
    <div className="Form">

        <header>
          <h3>Form</h3>
        </header>
      
        <main className='form-main'>

          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <input type='number' min='0' {...register('degrees')} />
            <input type='number' min='0' max='59' {...register('minutes')} />
            <input type='number' min='0' max='59' {...register('seconds')} />
            <input type='submit'/>
          </form>
          {guessedNumber.length > 1 && <p>{guessedNumber[0] + '-' + guessedNumber[1] + '-' + guessedNumber[2]}</p>}
         
        </main>
    
    </div>
  );
}

export default Form;