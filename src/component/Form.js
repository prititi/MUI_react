import React, {useState}  from 'react'
import {TextField, Button, FormGroup, FormControlLabel, Checkbox} from "@mui/material"

const Form = () => {
    const [inputs, setInputs]= useState({
        name:"",
        email:"",
        password:"",
        terms: false
    });

    //input change function
    const handleChange=(e)=>{
        //prevstate= previous value to as it is rkhnege
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:[e.target.value],
        }));
    };

    //form handle function 
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
           <TextField name="name" 
           value={inputs.name}   //for binding
           onChange={handleChange}
           placeholder='Enter your name' 
           type='text' 
           variant='outlined' 
           sx={{margin:"20px"}}/>
           <br/>


            <TextField name="email" 
            value={inputs.email} //for binding
            onChange={handleChange}
            placeholder='Enter your Email' 
            type='email' 
            variant='outlined' 
            sx={{margin:"20px"}}/>
            <br/>


            <TextField name="password" 
            value={inputs.password} //for binding
            onChange={handleChange}
            placeholder='Enter your Password' 
            type='password'
             variant='outlined' 
             sx={{margin:"20px"}}
             />
             <br/>
            <FormGroup>
                <FormControlLabel label="I Agree T&C" 
                control={<Checkbox onChange={()=>setInputs(prevState=>({
                    ...prevState, terms:!inputs.terms
                }))} />} sx={{margin:"30px"}} />
            </FormGroup>
             <br/>
             <Button type='submit' variant='contained' color='success' sx={{margin:"20px"}} size='large'>Submit</Button>


         </form>
    </div>
  );
};

export default Form;


