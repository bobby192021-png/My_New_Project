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
import GoogleIcon from '@mui/icons-material/Google'; 
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import { LocalLaundryService, Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneInput from "react-phone-input-2";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfiguration/config";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../../firebaseConfiguration/config";

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

const Login = () => {
  const [valueTabs, setValueTabs] = useState(0);
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

   const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };

    const handleSubmit = (e) =>{
      e.preventDefault();

      const storedUser = JSON.parse(localStorage.getItem("user")) || []; 
      // console.log(storedUser,"<><><>?<>/");

      const foundUsers = storedUser.find(
        (user)=>user.email === email && user.password === password
      )       
      if(foundUsers){
        alert("Login successFully")
        localStorage.setItem("isLoggedIn", true); 
        navigate("/home-page")
      }else{
        alert("Invalid credentials")
      }
  
      // if (
      //   storedUser &&
      //   storedUser.email === email &&
      //   storedUser.password === password
      // ) {
      //   alert("Login successful!");
      //   // localStorage.setItem("isLoggedIn", false); 
      //   navigate("/home-page");
      // } else {
      //   // localStorage.setItem("isLoggedIn", false);
      //   alert("Invalid credentials");
      // }


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
   
    async function signIn(){
     await signInWithPopup(auth,googleProvider)
    navigate("/home-page")
  }

    return (
    <>
    <div className="LOGO">
      <img src="/public/static/images/logo.png"/>
    </div>

      <div className="authBox">
        <h2>Login</h2>
        <Box className="custom_tabs1" sx={{ width: "100%", mt: 2 }}>
          <Tabs
            value={valueTabs}
            onChange={handleChangeTabs}
            aria-label="view product tabs"
            className="custom_tabs_links"
          >
            {/* <Tab label="Email" {...a11yProps(0)} /> */}
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

            <div className="control_group d_flex">
              <div className="remember_box">
                <FormControlLabel
                  control={<Checkbox />}
                  name="remember"
                  label="Remember me"
                />
              </div>
              <button
                type="button"
                className="anchor_link"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>

            <div className="form_btn">
              <Button
                type="submit"
                className="btn btn_primary w_100"
                variant="contained"              >
                Login
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
            Don't have an account? <a onClick={() => navigate("/sign-up1")}>Sign up</a>
          </p>
        </div>
        <Button onClick={signIn}>
          <GoogleIcon/>
        </Button>
      </div>
    </>
  );
};

export default Login; 




