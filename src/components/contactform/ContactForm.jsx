import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { addContact } from "../../redux/contacts/operations"; 
import { toast } from 'react-hot-toast';

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    contactPhone: Yup.string()
      .matches(/^[0-9\-+\s()]*$/, "Invalid phone number")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.contactName,
      number: values.contactPhone,
    };

    dispatch(addContact(newContact))
      .then(res => {
        if (res.error) {
          toast.error('Failed to add contact');
        } else {
          toast.success('Contact added successfully');
          actions.resetForm();
        }
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ contactName: "", contactPhone: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={styles.formContainer}>
          <label className={styles.Contactlabel} htmlFor={nameFieldId}>Name</label>
          <Field className={styles.contactInput} type="text" name="contactName" id={nameFieldId} />
          <ErrorMessage name="contactName" component="span" className={styles.errorMessage} />

          <label className={styles.Contactlabel} htmlFor={phoneFieldId}>Number</label>
          <Field className={styles.contactInput} type="tel" name="contactPhone" id={phoneFieldId} />
          <ErrorMessage name="contactPhone" component="span" className={styles.errorMessage} />

          <button className={styles.btnAddContact} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
