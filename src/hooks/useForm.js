import {useState, useEffect} from "react";
import * as yup from 'yup';
import axios from 'axios'

import Schema from '../helpers/Schema'


export const useForm = (initialValues) => {
  
    const [formValues, setFormValues] = useState(initialValues);

    const [errors, setErrors] = useState(initialValues)

    const [disabled, setDisabled] = useState(true)

    const updateForm = (inputName, inputValue, e) => {
      // const {checked, type, name, value } = e.target

      // console.log(type)

      // const valueToUse = type === 'checkbox' ? checked : value

      setFormValues({...formValues, [inputName]: inputValue})

      setErrors(inputName, inputValue )
    };

    const submitForm = () => {
      const newSubmission = {
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          birthdate: formValues.birthdate,
          agreement: formValues.agreement
      }
    
      if (!newSubmission.name || !newSubmission.email || !newSubmission.birthdate || !newSubmission.agreement) return;

      axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', newSubmission)
        .then((res) => {
          console.log("-------------->>>",res)
          setFormValues({
            name:'',
            email:'',
            birthdate:'',
            agreement: false
          })
        })
        .catch((err) => console.log(err))
    };

    const clearForm = () => {
      setFormValues(initialValues)
    }

    const validate = (name, value) => {
        yup.reach(Schema, name)
          .validate(value)
          .then(() => setErrors({...errors, [name]: ''}))
          .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    };

    useEffect(() => {
      Schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return {formValues, validate, updateForm, submitForm, clearForm, errors, disabled};
};