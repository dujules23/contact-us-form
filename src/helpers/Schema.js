import * as yup from 'yup';
import moment from 'moment';
const schema = yup.object().shape({

  username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(2, 'Username must be 2 characters long'), 

  email: yup
    .string()
    .trim()
    .email()
    .required('Email is required')
    .min(2, 'Email must be 2 characters long'), 

  birthDate: yup 
    .date().transform(function(currentValue, originalValue){
     
      currentValue = moment().format('L');
      // if(!currentValue.isValid()){
        
      //   return currentValue.toDate();
      // }
      
      return new Date(originalValue);
    })
    .transform(function(currentValue, originalValue){
      
      return originalValue === '' ? null : currentValue;
    })
    .nullable().default(function () {
        return new Date();
      }).typeError('Enter a valid date in the format: MM/DD/YYYY'),
  emailConsent: yup
    .boolean()
    .required('Email consent must be accepted.')
    .oneOf([true], "Please check to receive JUC emails and newsletters."),
});
export default schema;