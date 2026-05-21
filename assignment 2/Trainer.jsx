
import React from "react";

const Trainer = ({ id, children }) => {
  return (
    <div className="container">
      <h2>Trainer</h2>
      <p>ID: {id}</p>

      <div className="child">
        {children}
      </div>
    </div>
  );
};

export default Trainer;
