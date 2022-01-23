import React from 'react';

export default function Form(props) {

  const { values, update, submit } = props

  const handleChange = e => {

    const name = e.tartget.name
    const value = e.target.value

    update(name, value);
  }


  const handleSubmit = e => {
    e.preventDefault();

    submit();
  }


  return (
    <form className='form-container' handleSubmit={handleSubmit}>
      <div>
        <label>Name
          <input 
          name='name'
          type='text'
          placeholder='enter name'
          value={values.name}
          handleChange={handleChange}/>
        </label>

        <label>Email
          <input 
          name='email'
          type='email'
          placeholder='enter email'
          value={values.email}
          handleChange={handleChange}/>
        </label>

        <label>Birth Date
          <input 
          name='birth date'
          type='text'
          placeholder='enter birth date'
          value={values.birthdate}
          handleChange={handleChange}/>
        </label>

        <label>I Agree To Be Contacted Via Email
          <input 
          name='agreement checkbox'
          type='checkbox'
          value={values.agreement}
          handleChange={handleChange}/>
        </label>

      </div>
    </form>
  )
}