//import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IFormInputs {
  email:string,
  password:string
}

function FormExample() {

  const {register, handleSubmit, watch, formState: {errors} } = useForm<IFormInputs>();

  console.log('errors', errors);
  console.log('watch variable email', watch('email'));
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('submitted data', data);
  }

  return (
    <div className="Form">

        <header>
          <h3>Form</h3>
        </header>
      
        <main className='form-main'>

          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <input defaultValue="example@leo.test.com" {...register('email')} />
            <br/>
            <input {...register('password', { required: true })} />
            <br/>
            {errors.password && <span>This field is required</span>}
            <br/>
            <input type='submit' />
          </form>
         
        </main>
    
    </div>
  );
}

export default FormExample;