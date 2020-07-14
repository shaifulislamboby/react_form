import React, { Component } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

class Formula extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="loginContainer" className="signinup-container">
        <h3 className="mb-4"> Formula </h3>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            acceptedTerms: false, // added for our checkbox

          }}

          // validation schema , validating against different conditions using Yup.
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Muss aus 15 Zeichen oder weniger bestehen")
              .required("Dies ist ein Pflichtfeld. Bitte füllen Sie die gewünschten Angaben aus."),
            lastName: Yup.string()
              .max(20, "Muss aus 15 Zeichen oder weniger bestehen")
              .required("Dies ist ein Pflichtfeld. Bitte füllen Sie die gewünschten Angaben aus."),
            email: Yup.string()
              .email("Ungültige E-Mail-Adresse")
              .required("Dies ist ein Pflichtfeld. Bitte füllen Sie die gewünschten Angaben aus."),
            password: Yup.string()
              .required('Kein Passwort angegeben.')
              .min(8, 'Das Passwort ist zu kurz - sollte mindestens 8 Zeichen lang sein.')
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                'Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben und eine Ziffer enthalten.'
              ),
            acceptedTerms: Yup.boolean()
              .required("Dies ist ein Pflichtfeld. Bitte füllen Sie die gewünschten Angaben aus.")
              .oneOf([true], "Sie müssen die Bedingungen und Konditionen akzeptieren."),
            address: Yup.string()
              // specify the set of valid values for job type
              // @see http://bit.ly/yup-mixed-oneOf

              .required("Dies ist ein Pflichtfeld. Bitte füllen Sie die gewünschten Angaben aus.")
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
              // redirecting to danke page with the input values        
              this.props.history.push({
                pathname: '/danke',
                state: {
                  fristname: values.firstName,
                  lastname: values.lastName,
                  email: values.email,
                  password: values.password,
                  address: values.address
                }
              })
            }, 500);
          }}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange
            } = props;

            return (
              <Form  >
                <MyTextInput
                  label="Vorname"
                  name="firstName"
                  type="text"
                  placeholder="Andreas"
                />
                <MyTextInput
                  label="Nachname"
                  name="lastName"
                  type="text"
                  placeholder="Nürnberger"
                />

                <MyTextInput
                  label="E-Mail"
                  name="email"
                  type="email"
                  placeholder="andreas.nurnburger@ovgu.com"
                />
                <MyTextInput
                  label="Passwort"
                  name="password"
                  type="password"

                />
                <MyTextInput
                  label="Anschrift"
                  name="address"
                  type="address"
                  placeholder="City"
                />

                <MyCheckbox name="acceptedTerms">
                  Ich akzeptiere die Bedingungen und Konditionen
                </MyCheckbox>

                <button type="submit" >Anmelden</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default withRouter(Formula);

