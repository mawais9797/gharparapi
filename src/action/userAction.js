import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const register = (user, navigate) => async (dispatch) => {
  debugger;

  try {
    const header = {
      "Content-Type": "application/json",
      "DEVICE-TYPE": "XXX",
    };

    const response = await axios.post(
      "http://demoapi.gharpar.co/api/v8/registrations.json",
      user,
      header
    );
    debugger;
    //==============================================
    // const user = {
    //   user: {
    //     ...values,
    //     country_code: "+92",
    //   },
    //   user_session: {
    //     device_type: "ios/android",
    //     device_token: "xxx",
    //   },
    // };
    // const responseLogin = await axios.post(
    //   "http://demoapi.gharpar.co/api/v8/user_sessions.json",
    //   user
    // );
    //===============================================

    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "USER_CREATED",
      payload: response,
    });
    navigate("/pin");
  } catch (error) {
    console.log(error.message);
  }
};

export const pinUser = (pin, navigate) => async (dispatch) => {
  debugger;
  try {
    const myUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      user: {
        ...pin,
        phone: myUser.user.phone,
      },
      user_session: {
        device_type: "ios/android",
        device_token: "xxx",
      },
    };
    const response = await axios.post(
      "http://demoapi.gharpar.co/api/v8/user_sessions/pin_verification.json",
      user
    );

    localStorage.setItem("token", response.data.auth_token);
    //====================================================
    const data = JSON.parse(localStorage.getItem("user"));
    const userLogin = {
      user: {
        phone: data.user.phone,
        password: data.user.password,
        country_code: "+92",
      },
      user_session: {
        device_type: "ios/android",
        device_token: "xxx",
      },
    };

    debugger;
    const responseLogin = await axios.post(
      "http://demoapi.gharpar.co/api/v8/user_sessions.json",
      userLogin
    );
    //====================================================
    dispatch({
      type: "USER_LOGIN_SUCCESSFUL",
      payload: responseLogin.data,
    });
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(responseLogin.data));

    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

export const userLogin = (data, navigate) => async (dispatch) => {
  debugger;
  try {
    const response = await axios.post(
      "http://demoapi.gharpar.co/api/v8/user_sessions.json",
      data
    );

    localStorage.setItem("token", response.data.auth_token);
    localStorage.setItem("user", JSON.stringify(response.data));
    const myUser = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "USER_LOGIN_SUCCESSFUL", payload: myUser });
    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

export const userLogout = (navigate) => async (dispatch) => {
  debugger;
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.auth_token;
  localStorage.clear();
  navigate("/login");
};

// export const login = (email, password) => async (dispatch) => {
//   //   debugger;
//   try {
//     dispatch({
//       type: USER_LOGIN_REQUEST,
//     });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(
//       "http://localhost:4000/login",
//       { email, password },
//       config
//     );
//     // debugger;
//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });

//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     // debugger;
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
