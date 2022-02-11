import '../App.css';
import React from 'react';

import { useForm } from '../hooks/useForm';
import Form from './Form'

const initialValues = {

  name: '',
  email: '',
  birthDate: '',
  emailConsent: false
};

function App() {
  const { formValues, updateForm, submitForm, clearForm, validate, errors, disabled } = useForm(initialValues);

  return (
    <div className="App">
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        clear={clearForm}
        validate={validate}
        errors={errors}
        disabled={disabled}
      />
    </div>
  );
};

export default App;
