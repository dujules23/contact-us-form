import '../Form.css'
import React from 'react';

export default function Form(props) {

  const { values, update, submit, clear } = props;

  console.log(values)

  const handleChange = e => {
    update(e.target.name, e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    submit();
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <label className='form-input'>Name
          <input 
          name='name'
          type='text'
          placeholder='enter name'
          value={values.name}
          onChange={handleChange}/>
        </label>

        <label className='form-input'>Email
          <input 
          name='email'
          type='email'
          placeholder='enter email'
          value={values.email}
          onChange={handleChange}/>
        </label>

        <label className='form-input'>Birth Date
          <input 
          id='today'
          type='date'
          placeholder='enter birth date'
          value={values.birthdate}
          onChange={handleChange}/>
        </label>

        <label className='form-input'>I Agree To Be Contacted Via Email
          <input 
          name='agreement checkbox'
          type='checkbox'
          value={values.agreement}
          onChange={handleChange}/>
        </label>
        
        <div>
          <button className="button" onClick={()=> clear()}>Clear</button>
        </div>

        <div>
          <button className="button">Submit</button>
        </div>

      </div>
    </form>
  );
};