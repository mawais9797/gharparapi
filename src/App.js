import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Main from "./components/Main";
import { Signup } from "./components/Signup";
import Pin from "./components/Pin";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));
  const userStatus = userData != null ? userData.user_status : null;
  const navigate = useNavigate();
  debugger;
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      {/* {userStatus != null || userStatus != undefined ? (
        <Route path="/dashboard" element={<Dashboard />} />
      ) : (
        <Route path="/pin" element={<Pin />} />
      )} */}

      <Route path="/pin" element={<Pin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {!token && <Route path="/login" element={<Login />} />}
    </Routes>
  );
}

function RouterWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterWrapper;

// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// import { Signup } from "./components/Signup";
// import Pin from "./components/Pin";
// import Login from "./components/Login";
// import "./App.css";
// import Dashboard from "./components/Dashboard";

// function App() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   if (token) {
//     navigate("/dashboard");
//   }
//   // useEffect(() => {
//   //   if (token) {
//   //     navigate("/dashboard");
//   //   }
//   // }, [navigate, token]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Signup />} />
//         <Route path="/pin" element={<Pin />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {!token && <Route path="/login" element={<Login />} />}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// import { Signup } from "./components/Signup";
// import Pin from "./components/Pin";
// import Login from "./components/Login";
// import "./App.css";
// import Dashboard from "./components/Dashboard";

// function App() {
//   const token = localStorage.getItem("token");

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Signup />} />
//         <Route path="/pin" element={<Pin />} />
//         {token ? (
//           <Route path="/dashboard" element={<Dashboard />} />
//         ) : (
//           <Route path="/login" element={<Login />} />
//         )}
//         {/* Redirect to dashboard if token is present */}
//         {token && <Navigate to="/dashboard" replace />}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// import { Signup } from "./components/Signup";
// import Pin from "./components/Pin";
// import Login from "./components/Login";
// import "./App.css";
// import Dashboard from "./components/Dashboard";
// function App() {
//   const token = localStorage.getItem("token");
//   debugger;
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         <Route path="/" element={<Signup />} />
//         <Route path="/pin" element={<Pin />} />
//         {token !== null ? (
//           <Route path="/dashboard" element={<Dashboard />} />
//         ) : (
//           <Route path="/login" element={<Login />} />
//         )}
//         {/* <Route path="/login" element={<Login />} /> */}
//         {token && <Navigate to="/dashboard" replace />}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
