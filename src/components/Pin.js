import React, { useEffect } from "react";
import Header from "./Header";
// import React from "react";

import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { pinUser } from "../action/userAction";

const Pin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myUserData = useSelector((state) => state.user.myUser);
  // const statusCode = myUserData[0].status ? myUserData[0].status : 300;
  const statusCode = myUserData[0]?.status || 300;
  useEffect(() => {
    if (statusCode != 200) {
      navigate("/login");
    }
  }, [statusCode, navigate]);
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
