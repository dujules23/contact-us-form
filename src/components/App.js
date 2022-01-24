import '../App.css';
import React from 'react';

import { useForm } from '../hooks/useForm';
import Form from './Form'

const initialValues = {

  name: '',
  email: '',
  birthdate: '',
  agreement: false
};

function App() {
  const { formValues, updateForm, submitForm, clearForm, validate, errors, disabled } = useForm(initialValues);
  // const [formValues, setFormValues] = useState(initialValues)
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
