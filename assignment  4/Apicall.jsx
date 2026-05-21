// ApiCall.jsx
import React, { useEffect, useState } from "react";
import StudentDetails from "../views/StudentDetails.jsx";

const ApiCall = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <StudentDetails students={students} />
    </div>
  );
};

export default ApiCall;
