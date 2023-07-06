import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../action/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user.myUser);
  debugger;
  const handleLogout = () => {
    dispatch(userLogout(navigate));

    // navigate("/login");
  };
  const userLocal = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {userData != '' ? (
            <tr class="table-active">
              <td>
                {console.log("userData")}
                {userData[0].first_name} {userData[0].last_name}
              </td>
              <td>{userData[0].phone}</td>
              <td>{userData[0].user_status}</td>
            </tr>
          ) : (
            <tr class="table-active">
              <td>
                {console.log("userLocal")} {userLocal.first_name}{" "}
                {userLocal.last_name}
              </td>
              <td>{userLocal.phone}</td>
              <td>{userLocal.user_status}</td>
            </tr>
          )}
          {/* <tr class="table-active">
            <td>
              {userData[0].first_name} {userData[0].last_name}
            </td>
            <td>{userData[0].phone}</td>
            <td>{userData[0].user_status}</td>
          </tr> */}
        </tbody>
      </table>
      <br />
      <button className="btn btn-md btn-danger rounded" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
