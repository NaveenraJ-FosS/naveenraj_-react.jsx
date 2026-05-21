import React , {useState} from "react";


const MultiInputs_Controlled_Components =()=> {
    const [formData, setFormData]= useState(
        {
            name :"",
            eamil:""
        }
    );


const handleChange=(e)=> {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = (e)=> {
    e.preventDefault();
    alert(formData.name + "\n" + formData.email);
};


return(
    <form onSubmit={handleSubmit}>
        <h2>multiple inputs controlled components</h2>

        <input
         type="text" 
         name="name"
         value= {formData.name}
         onChange={handleChange}
         placeholder="enter name" />

         <br />
         <br />
         <input
          type="email"
          name="email"
          value={formData.email} 
          onChange={handleChange}
          placeholder="enter email" />

          <br /><br />

          <button type="submit">submit</button>


    </form>
);
}

export default MultiInputs_Controlled_Components;
