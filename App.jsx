import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from"./Views/Home";
import About from "./Views/About";
import UserProfile from "./Views/UserProfile";
import"./assets/Css/NavCss.css";
import StudentLogin from "./Views/StudentLogin";

import TrainerLogin from "./Views/TrainerLogin";
import"./assets/Css/Home.css";

import StudentDetails from "./Views/StudentDetails";
import Propschild from "./Views/Propschild";
import Propsparent from "./Views/Propsparent";
import Multiinputscontrolledcomponents from "./Views/Multiinputs controlled components";

import UnControledComp from "./Views/UncontroledComp";
import UseEffect_Keys from "./Views/UseEffectHooks";

function App() {
  const [studentId, setStudentId] = useState("");
  return (
    <>
      <header>Welcome To React</header>
      <Router>
        <div className="navbarCls">
          <div className="head">
            My React App
          </div>
          <nav>
            <ul style={{ display: "flex", gap: "2rem" }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/userprofile">UserProfile</Link></li>
              
              
            </ul>
          </nav>
        </div><br></br>
        <div className="li" style={{display:"flex",gap:"2rem"}}>
          <Link to="/Propsparent">Props_Parent</Link>
           <Link to="/Propschild">Props_child</Link>
           <Link to ="/Multiinputscontrolledcomponents">Multiinputscontrolledcomponents</Link>
          <Link to ="/UseEffect_Keys">UseEffect</Link>
          <Link to="/UncontroledComp">UncontroledComp</Link>
        </div>
        <br></br>
        <br></br>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          
         


          <Route path="/StudentLogin" element={<StudentLogin setStudentId={setStudentId}>
            <p>Welcome Student</p>
          </StudentLogin>} />
          <Route path="/TrainerLogin" element={<TrainerLogin />}/>
           <Route path="/Propsparent" element={<Propsparent />}/> 
           <Route path="/StudentDetails" element={<StudentDetails id={studentId}/>}/>
           <Route path="/Propschild" element={<Propschild />}/>
           <Route path="/multiinputscontrolledcomponents" element={<Multiinputscontrolledcomponents/>}/>
        <Route path="/UseEffect_keys" element={< UseEffect_Keys />}/>
        <Route path="/UncontroledComp" element={<UnControledComp/>}/>
        </Routes>
      </Router>
      
      <br></br>
      <br></br>
      <footer>All Rights Reserved Are!!! &copy; 2026</footer>

      <br></br>
      <br></br>
    </>
  )
};
export default App;