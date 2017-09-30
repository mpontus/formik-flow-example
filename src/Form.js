// @flow
// Higher Order Component
import React from 'react';
import { withFormik, type HOC } from 'formik';

type Props = {|
  user: {
    email: string,
    password: string,
  },
|};

const enhance: HOC<*, Props> = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: props.user.email, password: '' }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (values, bag) => {
    console.log(values);

    bag.setSubmitting(false);
  },
});

const Form = props => {
  const {
    user,
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editing user: {user.email}</h3>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

// Wrap our form with the using withFormik HoC
export default enhance(Form);
