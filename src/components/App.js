import './App.css';

import { useForm } from '../hooks/useForm';
import Form from './Form'


const initialValues = {

  name: '',
  email: '',
  birthdate: '',
  agreement: ''
};

function App() {

  const{formValues, setFormValues, validate} = useForm(initialValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  };

  const submitForm = () => {
    const newSubmission = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      birthdate: formValues.birthdate,
      agreement: formValues.agreement
    }

    if (!newSubmission.name || !newSubmission.email || !newSubmission.birthdate || !newSubmission.agreement) return;


  };
  return (
    <div className="App">
      <h1>Contact Us</h1>

      <Form

        values={formValues}
        update={updateForm}
        submit={submitForm}


    />
    </div>
  );
}

export default App;
