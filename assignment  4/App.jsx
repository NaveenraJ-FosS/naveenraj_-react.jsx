// App.jsx
import React from "react";
import ApiCall from "./server/ApiCall.jsx";

const App = () => {
  return (
    <div>
      <ApiCall />
    </div>
  );
};

export default App;







// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
// import StudentLogin from "./views/StudentLogin";
// import StudentDetails from "./views/StudentDetails";
// import "./assets/Css/studentlogin.css"

// function App() {
//   const [student, setStudent] = useState(null);

//   return (
//     <Router>
//       <nav className="navbar">
//         <h2 className="Logo">Student Login</h2>
        
//       <div className="nav-Links">
//         <Link to="/">Login</Link> 
//         <Link to="/details">Details</Link>
//         </div>
        
//       </nav>

//       <Routes>
//         <Route path="/" element={<StudentLogin setStudent={setStudent} />} />
//         <Route
//           path="/details"
//           element={<StudentDetails student={student} /> }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;








// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Student from "./views/Student";
// import Trainer from "./views/Trainer";
// import "./assets/Css/home.css"

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/student">Student</Link> |{" "}
//         <Link to="/trainer">Trainer</Link>
//       </nav>

//       <Routes>
//         <Route
//           path="/student"
//           element={
//             <Student id="S101">
//               <h3>This is student child content</h3>
//             </Student>
//           }
//         />

//         <Route
//           path="/trainer"
//           element={
//             <Trainer id="T201">
//               <h3>This is trainer child content</h3>
//             </Trainer>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from "./views/Home";
// import About from "./views/About";
// import Users from "./views/Users";

// const App = () => {
//   return (
//     <Router>
//       {/* Navbar */}
//       <nav style={{ padding: "20px", background: "#27d650" }}>
//         <Link to="/" style={{ marginRight: "10px", color:"#276ad6", fontSize:"20px" }}>Home</Link>
//         <Link to="/about" style={{ marginRight: "10px",color:"#276ad6", fontSize:"20px" }}>About</Link>
//         <Link to="/users" style={{ marginRight: "10px",color:"#276ad6", fontSize:"20px" }}>Users</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





// 

// import { Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<h1>Home Page</h1>} />
//         <Route path="/about" element={<h1>About Page</h1>} />
//         <Route path="/contact" element={<h1>Contact Page</h1>} />
//       </Routes>
//     </>
//   );
// }

// export default App;
