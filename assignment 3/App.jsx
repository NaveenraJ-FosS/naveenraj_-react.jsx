import React from "react"; 
import { useState } from "react"; // ADD TO SEND STATE VARIABLES EG : setTrainerId 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./views/Home"; 
// import Courses from "./views/Courses"; 
import UserProfile from "./views/UserProfile"; 
import "./assets/CSS/NavCSS.css"; 
// import "./assets/CSS/Footer.css"; 
import StudentLogin from "./views/Studentlogin"; 
import TrainerLogin from "./views/TrainerLogin"; 
 import StudentDetails from "./views/StudentDetails"; 
// import TrainerDetails from "./views/TrainerDetails"; 
 
// import Controlled_Component from "./views/ReactFeatures/Controlled_Component"; 
// import UseEffectHook_List_Keys from "./views/ReactFeatures/UseEffectHook_List_Keys"; 
//  import Props_Parent from "./views/ReactFeatures/Props_Parent"; 
// import Children_Parent from "./views/ReactFeatures/Children_Parent"; 
// import MultiInputs_Controlled_Components from 
// "./views/ReactFeatures/MultiInputs_Controlled_Components"; 
 import Uncontrolled_Component from "./views/ReactFeatures/Uncontrolled_Component"; 
 
const App = () => { 
// TrainerLogin -> sends ID -> App -> passes to TrainerDetails 
  const [studentId, setStudentId] = useState(""); //App.jsx (stores data) 
  const [trainerId, setTrainerId] = useState(""); 
 
  return ( 
    <> 
    <header>Header Component</header> 
    <Router> 
      <div className="navbarCls"> 
 
        <div>My React App</div> 
            <nav> 
              <ul style={{ display: "flex", gap: "2rem" }}> 
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/courses">Courses</Link></li> 
                <li><Link to="/userprofile">UserProfile</Link></li> 
              </ul> 
            </nav> 
      </div> 
           
          {/*Links for React Features */} 
          <nav> 
            <ul style={{ display: "flex", gap: "2rem" }}> 
              <li><Link to="/Controlled_Component">Controlled Component</Link></li> 
              <li><Link to="/UseEffectHook_List_Keys">UseEffectHook Listand Keys</Link></li> 
              <li><Link to="/Props_Parent">Props Parent</Link></li> 
              <li><Link to="/Children_Parent">Children Parent</Link></li> 
              <li><Link to="/MultiInputs_Controlled_Components">MultiInputs Controlled 
Components</Link></li>   
 
              <li><Link to="/Uncontrolled_Component">Uncontrolled Component</Link></li>  
            </ul> 
          </nav> 
<br></br> 
<br></br> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/courses" element={<Courses />} />  */}
        <Route path="/userprofile" element={<UserProfile />} /> 
{/*  
        <Route path="/Controlled_Component" element={<Controlled_Component />} /> 
        <Route path="/UseEffectHook_List_Keys" element={<UseEffectHook_List_Keys />} /> 
        <Route path="/Props_Parent" element={<Props_Parent />} /> 
        <Route path="/Children_Parent" element={<Children_Parent />} /> 
        <Route path="/MultiInputs_Controlled_Components" 
element={<MultiInputs_Controlled_Components />} />  */}
         <Route path="/Uncontrolled_Component" element={<Uncontrolled_Component />} /> 
 
        {/* Pass setter functions as props + children */} 
        <Route path="/StudentLogin" element={ 
                                            <StudentLogin setStudentId={setStudentId}> 
                                              <p>Welcome Student</p> 
                                            </StudentLogin> 
                                            } 
                                            /> 
                                             
        {/* <Route path="/TrainerLogin" element={ 
                                            <TrainerLogin setTrainerId={setTrainerId}> 
                                              <p>Welcome Trainer </p>  
                                            </TrainerLogin>  
                                            }  
                                            />  */}
        <Route path="/StudentDetails" element = {<StudentDetails id={studentId}/>}/> 
        {/* <Route path="/TrainerDetails" element = {<TrainerDetails id={trainerId}/>}/>  */}
      </Routes> 
    </Router> 
    
    <br></br> 
    <br></br> 
         <footer className="footer"> 
          <p>© 2026 My Website. All rights reserved.</p> 
          <p>Contact: SoftLogic@Sytems.com</p> 
        </footer> 
<br></br> 
    </> 
  ); 
}; 
 
export default App; 
 








// import React from "react";
// import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
// import Home from "./views/Home";
// import About from "./views/About";
// import UserProfile from "./views/userProfile";
// import  "./assets/Css/Navcss.css";
// import Studentlogin from "./views/studentlogin";
// import Trainerlogin from "./views/trainerlogin";


// const App=()=> {
 
//   return(
//     <>

//   <header>Header Component</header>
//     <Router>
//     <div className="navbar">
//       <div>my react app</div>
//       <nav>
//         <ul style={{display: "flex" , gap:"2rem"}}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/About">About</Link></li>
//           <li><Link to="/UserProfile">UserProfile</Link></li>
//         </ul>
//       </nav>
//       </div> 

//       <br></br>
//       <br></br>

//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/About" element={<About />}/>
//         <Route path="/UserProfile" element={<UserProfile />} />
//         <Route path="/Studentlogin" element={<Studentlogin />} />
//         <Route path="/Trainerlogin" element={<Trainerlogin />} />
//       </Routes>

//     </Router>

//     <main>Main component</main>

//     <br />
//     <br />

//     <footer>Footer Component</footer>

//     <br />
//     <br /> 
//     </>
  
//   )
 
// }
 
// export default App;

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
