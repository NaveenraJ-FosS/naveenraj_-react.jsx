// import React from "react";

// const StudentDetails = ({ student }) => {
//   if (!student) {
//     return <h3>No student data available</h3>;
//   }

//   return (
//     <div>
//       <h2>Student Details</h2>
//       <p><strong>Name:</strong> {student.name}</p>
//       <p><strong>ID:</strong> {student.id}</p>
//     </div>
//   );
// };

// export default StudentDetails;

// StudentDetails.jsx

import React from "react";

const StudentDetails = ({ students }) => {
  return (
    <div>
      {students.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <h4>{student.name}</h4>
              <p>Email: {student.email}</p>
              <p>City: {student.address.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDetails;
