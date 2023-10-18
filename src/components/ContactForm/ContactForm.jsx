import { Formik, Field, ErrorMessage } from 'formik';
import { FaRegIdCard } from 'react-icons/fa';
import * as Yup from 'yup';
import { Button, StyledForm } from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number. Please enter a valid phone number in the format XXX-XX-XX.'
    )
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <lebel>Name </lebel>
          <Field name="name" type="text" placeholder="Name Surname" />
          <ErrorMessage component="div" name="name" />

          <lebel>Number</lebel>
          <Field name="number" type="tel" placeholder="000-00-00" />
          <ErrorMessage component="div" name="number" />

          <Button type="submit">
            <span>Add contact</span> <FaRegIdCard />
          </Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
