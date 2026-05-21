import React from "react";

const Student = ({ id, children }) => {
  return (
    <div className="container">
      <h2>Student</h2>
      <p>ID: {id}</p>

      <div className="child">
        {children}
      </div>
    </div>
  );
};

export default Student;
