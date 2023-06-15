import {Typography} from "@mui/material"
import Form from "./component/Form"


function App() {
  return (
    <div >
      {/* //sx= custum for chanching the color */}

      {/* for buttons */}
      <Typography variant="h4" sx={{color:"red",margin:"30px" }}>Register Page</Typography>
      {/* <h1 >material ui react</h1>
      <Button variant="contained" color="success" sx={{margin:"30px"}} onClick={()=>prompt("click me")}>Click Me</Button>
      <Button variant="text" disabled>Click Me</Button>
      <Button variant="outlined" onClick={()=> alert("you clicked")} >Click Me</Button> */}

      {/* for input boxes */}
       {/* <br/>
      <br/>
      
      <TextField type="text" placeholder="name" variant="standard" sx={{margin:"30px"}}></TextField>
      <TextField type="text" placeholder="email" variant="outlined" sx={{margin:"30px"}}></TextField>
      <TextField type="text" placeholder="pass" variant="filled" sx={{margin:"30px"}}></TextField>  */}


      {/* adding the form component */}

      <Form/>
    </div>
  );
}

export default App;
