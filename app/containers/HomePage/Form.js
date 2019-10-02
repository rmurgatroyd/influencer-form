import React from 'react';
import { reduxForm } from 'redux-form';
import FormComponent from 'components/FormComponent';
import 'react-widgets/dist/css/react-widgets.css'
import './style.css'

export const Form = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
  const onSubmit = (formValues) => {
    console.log('submitting Form: ', formValues);
  }
  return (
    <div className="formContainer">
    <FormComponent
      influencerName="Zoe Sugg"
      handleSubmit={handleSubmit(onSubmit)}
      reset={reset}
      pristine={pristine}
      submitting={submitting}
    />
  </div>
  );
}

export default reduxForm({
  form: 'influencerForm'
})(Form)
