// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

// ----------This code works----------

// const validateInputs = values => {
//   let errors = {};

//   // Object.entries(values).forEach((key, value) => {
//   //   if (
//   //     !values[key] &&
//   //     (values[key] === 'startDate' || values[key] === 'endDate')
//   //   ) {
//   //     errors[key] = `Field ${key} is required`;
//   //   }
//   // });
//   Object.entries(values).forEach(([key, value]) => {
//     if (!values[key]) {
//       errors[key] = `Field ${key} is required`;
//     }
//   });

//   const startDate = values.startDate;
//   const endDate = values.endDate;

//   if (startDate && endDate && endDate.isBefore(startDate)) {
//     errors.endDate = 'End date cannot be before start date!';
//   }

//   return errors;
// };

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (
      (!values[key] && values[key] === 'startDate') ||
      values[key] === 'endDate'
    ) {
      errors[key] = `Field ${key} is required`;
    }
  });

  const startDate = values.startDate;
  const endDate = values.endDate;

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End date cannot be before start date!';
  }

  return errors;
};

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
};

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />
          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />
          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />
          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />

          <Field name="startDate" label="Start Date" component={PortDate} />

          <Field name="endDate" label="End Date" component={PortDate} />

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
