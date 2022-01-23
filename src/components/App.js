import '../App.css';
import React , { useState } from 'react';

import { useForm } from '../hooks/useForm';
import Form from './Form'

const initialValues = {

  name: '',
  email: '',
  birthdate: Date(),
  agreement: false
};

function App() {
  const { formValues, updateForm, submitForm, clearForm } = useForm(initialValues);
  // const [formValues, setFormValues] = useState(initialValues)
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        clear={clearForm}
      />
    </div>
  );
};

export default App;
