import React from "react";
import API_call from '../Services/API_call';


const StudentDetails = ({id}) =>{
   

    const user = API_call(`https://dummyjson.com/users/${id}`);

    return(
        <>

            <h2>Student Details</h2>
            <table border="1" cellPadding="10">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{user?.id}</td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>{user?.firstName}</td>
                    </tr>
                     <tr>
                        <td>Last Name</td>
                        <td>{user?.lastName}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user?.age}</td>
                    </tr>
                     <tr>
                        <td>Gender</td>
                        <td>{user?.gender}</td>
                    </tr>
                     <tr>
                        <td>Email</td>
                        <td>{user?.email}</td>
                    </tr>
                     <tr>
                        <td>Phone</td>
                        <td>{user?.phone}</td>
                    </tr>
                     <tr>
                        <td>Username</td>
                        <td>{user?.username}</td>
                    </tr>

                    <tr>
                        <td>Image</td>
                        <td>
                            <img src={user?.image} alt="user" width="80" />
                        </td>
                    </tr>
                </tbody>


            </table>
         
        
        </>
    )
}
export default StudentDetails;
