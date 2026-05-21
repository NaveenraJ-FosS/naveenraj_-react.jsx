
import React from "react";
import API_Call from "../services/API_Call";


const StudentDetails = ({id}) => {

    const user = API_Call (`https://dummyjson.com/users/${id}`);

    return (
        <>
        <h2>student details</h2>
        <table border="1" cellPadding="10">
            <tbody>
                <tr><td>ID</td><td>{user?.id}</td></tr>
                 <tr><td>first name</td><td>{user?.firstName}</td></tr>
                  <tr><td>last name</td><td>{user?.lastName}</td></tr>

                   <tr><td>age</td><td>{user?.age}</td></tr>


               <tr><td>bg</td><td>{user?.bloodGroup}</td></tr>
               <tr><td>height</td><td>{user?.height}</td></tr>
               <tr><td>weight</td><td>{user?.weight}</td></tr>
            </tbody>

        </table>
        
        </>
    )
}

export default StudentDetails
