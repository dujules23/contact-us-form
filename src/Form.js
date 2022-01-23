import React from 'react';

export default function Form() {

  const handleChange = e => {


  }


  const handleSubmit = e => {

  }


  return (
    <form className='form-container' handleSubmit={handleSubmit}>
      <div>
        <label>Name
          <input 
          name='name'
          type='text'
          placeholder='enter name'
          value={}
          handleChange={handleChange}/>
        </label>

        <label>Email
          <input 
          name='email'
          type='email'
          placeholder='enter email'
          value={}
          handleChange={handleChange}/>
        </label>

        <label>Birth Date
          <input 
          name='birth date'
          type='text'
          placeholder='enter birth date'
          value={}
          handleChange={handleChange}/>
        </label>

        <label>I Agree To Be Contacted Via Email
          <input 
          name='agreement checkbox'
          type='checkbox'
          value={}
          handleChange={handleChange}/>
        </label>

      </div>
    </form>
  )
}