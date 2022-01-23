import {useState} from "react";
import * as yup from 'yup';
export const useForm = (initialValues, schema) => {
  
    const [formValues, setFormValues] = useState(initialValues);

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

    const clearForm = () => {
      setFormValues(initialValues)
    }

    const validate = async() => {

        const isValid = await schema.isValid(formValues);

        const formErrors = {};
        for(let name in formValues){
            try{
                await yup.reach(schema,name).validate(formValues[name]);
                formErrors[name] = '';
            }
            catch(error){
                formErrors[name] = error.errors[0];
            }
        }
        return [formErrors,isValid];
    };

    return {formValues, validate, updateForm, submitForm, clearForm};
};