// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { VisibilityOff, Visibility } from "@mui/icons-material";

// const ResetPassword = () => {
//   const navigate = useNavigate();

//   const [passwordVisibility, setPasswordVisibility] = React.useState({
//     new: false,
//     confirm: false,
//   });

//   const toggleVisibility = () => {
//     setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleMouseDown = () => {
//   };

//   return (
//       <div className="authBox">
//         <h2>Reset Password</h2>
//         <p>Create a secure password to protect your account.</p>
//         <form className="form">
//           <div className="control_group">
//             <label htmlFor="new-password">New Password</label>
//             <TextField
//               id="new-password"
//               placeholder="Enter New Password"
//               fullWidth
//               hiddenLabel
//               type={passwordVisibility.new ? "text" : "password"}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end" className="eye_btn">
//                     <IconButton
//                       aria-label={
//                         passwordVisibility.new ? "Hide password" : "Show password"
//                       }
//                       onClick={() => toggleVisibility("new")}
//                       onMouseDown={handleMouseDown}
//                       edge="end"
//                     >
//                       {passwordVisibility.new ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>

//           <div className="control_group">
//             <label htmlFor="confirm-password">Confirm Password</label>
//             <TextField
//               id="confirm-password"
//               placeholder="Enter Confirm Password"
//               fullWidth
//               hiddenLabel
//               type={passwordVisibility.confirm ? "text" : "password"}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end" className="eye_btn">
//                     <IconButton
//                       aria-label={
//                         passwordVisibility.confirm ? "Hide password" : "Show password"
//                       }
//                       onClick={() => toggleVisibility("confirm")}
//                       onMouseDown={handleMouseDown}
//                       edge="end"
//                     >
//                       {passwordVisibility.confirm ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </div>

//           <div className="form_btn">
//             <Button
//               className="btn btn_primary w_100"
//               type="button"
//               onClick={() => navigate("/")}
//             >
//               Submit
//             </Button>
//           </div>
//         </form>

//         <div className="auth_bottom">
//           <p>
//             <button className="link" onClick={() => navigate("/")}>
//               <KeyboardBackspaceIcon /> Back to Login
//             </button>
//           </p>
//         </div>
//       </div>
//   );
// };

// export default ResetPassword;


import React from "react";
// import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = React.useState({
    new: false,
    confirm: false,
  });

  const toggleVisibility = () => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    // <AuthLayout>
      <div className="authBox">
        <h2>Reset Password</h2>
        <p>Create a secure password to protect your account.</p>
        <form className="form">
          <div className="control_group">
            <label htmlFor="new-password">New Password</label>
            <TextField
              id="new-password"
              placeholder="Enter New Password"
              fullWidth
              hiddenLabel
              type={passwordVisibility.new ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="eye_btn">
                    <IconButton
                      aria-label={
                        passwordVisibility.new ? "Hide password" : "Show password"
                      }
                      onClick={() => toggleVisibility("new")}
                      onMouseDown={handleMouseDown}
                      edge="end"
                    >
                      {passwordVisibility.new ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="control_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <TextField
              id="confirm-password"
              placeholder="Enter Confirm Password"
              fullWidth
              hiddenLabel
              type={passwordVisibility.confirm ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="eye_btn">
                    <IconButton
                      aria-label={
                        passwordVisibility.confirm ? "Hide password" : "Show password"
                      }
                      onClick={() => toggleVisibility("confirm")}
                      onMouseDown={handleMouseDown}
                      edge="end"
                    >
                      {passwordVisibility.confirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="form_btn">
            <Button
              className="btn btn_primary w_100"
              type="button"
              onClick={() => navigate("/")}
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="auth_bottom">
          <p>
            <button className="link" onClick={() => navigate("/")}>
              <KeyboardBackspaceIcon /> Back to Login
            </button>
          </p>
        </div>
      </div>
    //  </AuthLayout>
  );
};

export default ResetPassword;
