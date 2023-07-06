import React, { useState } from "react";
import Header from "./Header";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
// import { addUser } from "../actions/Actions";

import { Link, useNavigate } from "react-router-dom";
import { register } from "../action/userAction";
// import { register } from "../action/userAction";

export const Signup = () => {
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone No is required"),
    password: Yup.string().required("Passowrd Name is required"),
    password_confirmation: Yup.string()
      .required("Must enter confirm password ")
      .test("Password Match", "WRONG PASSWORD", function (value) {
        return this.parent.password === value;
      }),
  });

  const handleSubmit = (values, { resetForm }) => {
    // console.log("here");
    // console.log(values.company);
    // const newEmployee = { ...values };
    // setUserValue((previous) => [...previous, newEmployee]);
    debugger;
    // const newUser = {
    //   first_name: values.first_name,
    //   last_name: values.last_name,
    //   phone: values.phone,
    //   password: values.password,
    //   password_confirmation: values.password_confirmation,
    //   country_code: "+92",
    // };

    const user = {
      user: {
        ...values,
        country_code: "+92",
      },
    };

    // setUserValue([...userValue, newUser]);

    // console.log("FormValues =", values);
    // console.log("NewEmployee Values =", newEmployee);
    // console.log("UserValueState =", userValue);

    // dispatch(register(newUser));
    dispatch(register(user, navigate));
    resetForm();

    // navigate("/pin");
  };
  return (
    <div>
      <div className="container">
        <div className="signupForm">
          <h1>Sign Up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="formField">
                <label htmlFor="first_name" className="formLabel">
                  First Name
                </label>
                <br />
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="form-control  "
                />
                <ErrorMessage
                  name="first_name"
                  component="span"
                  className="error errMsg"
                />
              </div>
              <span></span>

              <div className="formField">
                <label htmlFor="last_name" className="formLabel">
                  Last Name
                </label>
                <Field
                  type="text"
                  className="form-control "
                  id="last_name"
                  name="last_name"
                />
                <ErrorMessage
                  name="last_name"
                  component="span"
                  className="error errMsg"
                />
                <span></span>
              </div>

              <div className="formField">
                <label htmlFor="phone" className="formLabel">
                  Phone No
                </label>
                <Field
                  type="text"
                  className="form-control "
                  id="phone"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="error errMsg"
                />
                <span></span>
              </div>

              <div className="formField">
                <label htmlFor="password" className="formLabel">
                  Password
                </label>
                <Field
                  type="password"
                  className="form-control "
                  id="password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error errMsg"
                />
                <span></span>
              </div>

              <div className="formField">
                <label htmlFor="password_confirmation" className="formLabel">
                  Password
                </label>
                <Field
                  type="password"
                  className="form-control "
                  id="password_confirmation"
                  name="password_confirmation"
                />
                <ErrorMessage
                  name="password_confirmation"
                  component="span"
                  className="error errMsg"
                />
                <span></span>
              </div>

              <br />

              <button className="btn btn-lg btn-success " type="submit">
                Sign Up
              </button>
            </Form>
          </Formik>
          <br />
          <Link to="/login">Login Here</Link>
        </div>
      </div>
    </div>
  );
};
