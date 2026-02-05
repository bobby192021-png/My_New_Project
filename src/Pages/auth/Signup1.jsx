import {
  Alert,
  Box,
  Button,
  Checkbox,
  colors,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";

import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import { KeyboardReturnRounded, LocalLaundryService, Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneInput from "react-phone-input-2";

const CustomTabPanel = ({
    children,
    value,
    index,
    ...other
  }) => (
    <div
    role="tabpanel"
    hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box >{children}</Box>}
    </div>
  );

const Signup1 = () => {
  
  const[valueTabs, setValueTabs] = useState(0);
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[number,setNumber]=useState('')

   const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };     
    const handleSubmit = (e) =>{
      const oldData=JSON.parse(localStorage.getItem("user")) || [];
      
      e.preventDefault();

      // empty  all field 
      // valid email   formate
      // valid password 6 digit
      // valid email with old data => copare with old data 
      //  account creat and old data + new data store in local = new account 
      
      
      
      if (!email || !number || !password) {
        alert("All field are required")
        return
      }
      else if(number.length<8){
        alert("please enter minimum 8 digits.")
        return
      }
      else if(password.length<8){
        alert("please enter minimum 8 digits. ")
        return
      }
      else if(oldData.email === email){
        alert("This email is already exist.")
        return
      }
      else{
        alert("account created")
      }
      if (email != "" && number !="" && password != "") { 
        // alert("sign-up successful!")
        
        localStorage.setItem("isSignededIn",true)
        
        const userData = {
          email: email,
          password: password,
          number: number
        };
        
        // const oldData=localStorage.getItem('user');
        
        // console.log(oldData,'<-=-oldData');
        
        oldData.push({...userData})
        // const PrevData = oldData?.length >0? JSON.parse(oldData) : [];
        
        // PrevData.push({...userData,})
      
        // localStorage.setItem("user", JSON.stringify(PrevData));
        localStorage.setItem("user",JSON.stringify(oldData));
        setEmail('');
        setPassword('');
        setNumber('');
        
        navigate('/')
        }else{
        localStorage.setItem("isSignededIn",false)
        alert("all feilds are mend!")  
      }

    };

    const handleClickShowPassword =()=>{
        setValueTabs((prev) => !prev);
    }
        
    const handleMouseDownPassword =()=>{

    }
    
    const a11yProps =()=>{   
    }
  
    
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = React.useState(false);
   const [Status, setStatus] = React.useState('default');
   const handleStatusChange = (event) => {
    setStatus(event.target.value );
   }; 

    return (
    <>
    <div className="LOGO">
      <img src="/public/static/images/logo.png"/>
    </div>

      <div className="authBox">
        <h2>Sign-Up</h2>
        <Box className="custom_tabs1" sx={{ width: "100%", mt: 2 }}>
          <Tabs
            value={valueTabs}
            onChange={handleChangeTabs}
            aria-label="view product tabs"
            className="custom_tabs_links"
          >
            <Tab label="Email" {...a11yProps(0)} />
            {/* <Tab label="Phone Number" {...a11yProps(1)} /> */}
            {/* <Tab label="both" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>

       
          <CustomTabPanel value={valueTabs} index={0}>
          <form className="form" onSubmit={handleSubmit}>
            


            <div className="control_group">
              <label htmlFor="email">Email Address</label>
              <TextField
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                onChange={(e)=>setEmail(e.target.value)}
                required
                fullWidth
              />
            </div>
  
            <div className="control_group">
                <label>Phone number</label>
                <TextField
                 id="number"
                name="number"
                country={"in"}
                 type="number"
                placeholder="Enter your number"
                onChange={(e)=>setNumber(e.target.value)}
                />
            </div>

            <div className="control_group">
              <label htmlFor="password">Password</label>
              <TextField
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
                required
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" className="eye_btn">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>


            <div className="form_btn">
              <Button
                type="submit"
                className="btn btn_primary w_100"
                variant="contained"              >
                Submit
              </Button>
            </div>
          </form>
        </CustomTabPanel>
        {/* <CustomTabPanel value={valueTabs} index={1}>
          <form className="form">
            <div className="control_group ">
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                inputProps={{
                  id: "phone",
                  placeholder: "Enter Phone Number"
                }}
                country={"in"}
                autoFormat={false}
              />
            </div>

            <div className="form_btn">
              <Button
                type="submit"
                className="btn btn_primary w_100"
                variant="contained"
                onClick={() => navigate("/otp?type=phoneLogin")}  
              >
                Login
              </Button>
            </div>
          </form>
        </CustomTabPanel> */}
        {/* <CustomTabPanel value={valueTabs} index={2}>
          <form>
            <div>
              <h1>Hii yhid id both form</h1>
            </div>
          </form>

</CustomTabPanel> */}

        <div className="sign_log">
          <p>
            All ready have an account? <a onClick={() => navigate("/")}>Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup1; 
