import React from "react";
import Header from "./Header";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../action/userAction";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    phone: "",
    password: "",
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required("Phone No is required"),
    password: Yup.string().required("Passowrd is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    debugger;

    const user = {
      user: {
        ...values,
        country_code: "+92",
      },
      user_session: {
        device_type: "ios/android",
        device_token: "xxx",
      },
    };

    dispatch(userLogin(user, navigate));
    resetForm();

    // navigate("/dashboard");
  };
  return (
    <div>
      <div className="container"></div>
      <div className="signupForm">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
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

            <br />

            <button className="btn btn-lg btn-success " type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <br />
        <Link to="/">Click Here for Signup </Link>
      </div>
    </div>
  );
};

export default Login;
