import React from "react";
// TODO: import useFormik from formik library
import {Form, useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};

      if(!values.emailField){
        errors.emailField = "Field required"
      }else if(!values.emailField.includes('@') || !values.emailField.includes(".")){
        errors.emailField = "Username should be an email";
      }else if(!values.emailField.includes('com') &&
      !values.emailField.includes('net') &&
      !values.emailField.includes('fr') &&
      !values.emailField.includes('br') &&
      !values.emailField.includes('de')){
        errors.emailField = "emailField should be an email";
      }

      if(!values.password) errors.password = "Field required";

      return errors;
    }
  })

  return (
    <div>
      <>
      <h1 id="logTitle">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <h3>Username</h3>
        <input id="emailField" className="textInput" name="emailField" type="text" onChange={formik.handleChange} 
        values={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailError" style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
        <h3>Password</h3>
        <input id="pswField" className="textInput" name="password" type="text" onChange={formik.handleChange} 
        values={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>: null}
        <div>
          <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
      </>
    </div>
  );
}

export default App;
