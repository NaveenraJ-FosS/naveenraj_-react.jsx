import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Users from "./views/Users";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav style={{ padding: "20px", background: "#27d650" }}>
        <Link to="/" style={{ marginRight: "10px", color:"#276ad6", fontSize:"20px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px",color:"#276ad6", fontSize:"20px" }}>About</Link>
        <Link to="/users" style={{ marginRight: "10px",color:"#276ad6", fontSize:"20px" }}>Users</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;

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
