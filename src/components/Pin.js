import React from "react";
import Header from "./Header";
// import React from "react";

import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { pinUser } from "../action/userAction";

const Pin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    phone_pin: "",
  };

  const validationSchema = Yup.object().shape({
    phone_pin: Yup.string().required("Pin is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    debugger;

    console.log(values);

    dispatch(pinUser(values, navigate));
    resetForm();
    // navigate("/dashboard");
  };

  return (
    <div>
      <div className="container">
        <div className="signupForm">
          <h2>Enter 4 Digit Pin</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="formField">
                <label htmlFor="phone_pin" className="formLabel">
                  Pin
                </label>
                <br />
                <Field
                  type="text"
                  id="phone_pin"
                  name="phone_pin"
                  className="form-control  "
                />
                <ErrorMessage
                  name="phone_pin"
                  component="span"
                  className="error errMsg"
                />
              </div>
              <span></span>
              <br />
              <button className="btn btn-sm btn-success " type="submit">
                submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Pin;
