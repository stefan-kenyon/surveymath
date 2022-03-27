//import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IFormInputs {
  degrees:number,
  minutes:number,
  seconds:number
}

function FormInput() {

  const {register, handleSubmit, watch, formState: {errors} } = useForm<IFormInputs>();

  console.log('watch degrees', watch('degrees'));
  // console.log('watch variable email', watch('email'));
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('dd-mm-ss: ' + data.degrees + '-' + data.minutes + '-' + data.seconds);
  }

  return (
    <div className="Form">

        <header>
          <h3>Form</h3>
        </header>
      
        <main className='form-main'>

          {/* <form onSubmit={handleSubmit(formSubmitHandler)}>
            <input defaultValue="example@leo.test.com" {...register('email')} />
            <br/>
            <input {...register('password', { required: true })} />
            <br/>
            {errors.password && <span>This field is required</span>}
            <br/>
            <input type='submit' />
          </form> */}

          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <input type='number' min='0' {...register('degrees')} />
            <input type='number' min='0' max='59' {...register('minutes')} />
            <input type='number' min='0' max='59' {...register('seconds')} />
            <input type='submit'/>
          </form>
         
        </main>
    
    </div>
  );
}

export default FormInput;