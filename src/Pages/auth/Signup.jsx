import {
  Box,
  Button,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

 
  const [valueTabs, setValueTabs] = useState(0);

  const handleChangeTabs = () => {
    // setValueTabs(newValue);
  };

  const method = valueTabs === 0 ? "email" : "phone";
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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });
  return (

      <div className="authBox">
        <h2>Sign-up</h2>
        <Box className="custom_tabs1" sx={{ width: "100%", mt: 2 }}>
          <Tabs
            value={valueTabs}
            onChange={handleChangeTabs}
            aria-label="view product tabs"
            className="custom_tabs_links"
          >
            <Tab label="Email" {...a11yProps(0)} />
            <Tab label="Phone Number" {...a11yProps(1)} />
          </Tabs>
        </Box>
            <div className="control_group">
                      <label htmlFor="email">Email Address</label>
                      <TextField
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                        fullWidth
                      />
                    </div>

                      <div className="form_btn">
              <Button
                type="submit"
                className="btn btn_primary w_100"
                variant="contained"
                onClick={() => navigate("/otp?type=signup")}
              >  
                Signup
              </Button>
            </div>
        {/* <CustomTabPanel
         value={valueTabs} index={0}
        >
          <form className="form">
            <div className="control_group">
              <label htmlFor="email">Email Address</label>
              <TextField
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                fullWidth
              />
            </div>

            <div className="form_btn">
              <Button
                type="submit"
                className="btn btn_primary w_100"
                variant="contained"
                onClick={() => navigate("/otp?type=signup")}
              >
                Signup
              </Button>
            </div>
          </form>
        </CustomTabPanel>
        <CustomTabPanel value={valueTabs} index={1}>
          <form className="form">
            <div className="control_group ">
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                inputProps={{
                  id: "phone",
                  placeholder: "Enter Phone Number",
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
                onClick={() => navigate("/otp?type=signup")}
              >
                Signup
              </Button>
            </div>
          </form>
        </CustomTabPanel> */}

        <div className="sign_log">
          <p>
            Already have an account ?<a onClick={() => navigate("/")}>Login</a>
          </p>
        </div>
      </div>

  );
};

export default Signup;
