import '../Form.css'
import React from 'react';

export default function Form(props) {

  const { values, update, submit, clear, errors, validate, disabled } = props;


  const handleChange = e => {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    update(e.target.name, e.target.value);

    validate(e);

  };

  const handleSubmit = e => {
    e.preventDefault();

    submit();
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h1 className='title'>Contact Us</h1>
      <div>
        <label className='form-input'>Name
          <input 
          name='name'
          type='text'
          placeholder='enter name'
          value={values.name}
          onChange={handleChange}/>
        </label>
         <p>{errors.name}</p>
        <label className='form-input'>Email
          <input 
          name='email'
          type='email'
          placeholder='enter email'
          value={values.email}
          onChange={handleChange}/>
        </label>
          {errors.email && <p>{errors.email}</p>}
        <label className='form-input'>Birth Date
          <input 
          name='birthdate'
          type='string'
          placeholder='enter birth date'
          value={values.birthdate}
          onChange={handleChange}/>
        </label>
          {errors.birthdate && <p>{errors.birthdate}</p>}
        <label className='checkbox'>I Agree To Be Contacted Via Email
          <input 
          name='agreement'
          type='checkbox'
          value='true'
          checked={values.agreement}
          onChange={handleChange}/>
        </label>
          <div>{errors.agreement}</div>
        <div>
          <button className="button" onClick={()=> clear()}>Clear</button>
        </div>

        <div>
          <button className="button" disabled={disabled}>Submit</button>
        </div>

      </div>
    </form>
  );
};