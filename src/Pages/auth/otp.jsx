// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Button } from "@mui/material";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import OTPInput from "react-otp-input";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// const OtpVerification = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const location = useLocation();
//   const method = location.state?.method || "email";
// const [searchParams] = useSearchParams();
//   const type= searchParams.get("type")
// console.log(type);

// //   Conditionally define the text
//   const otpText =
//     method === "phone"
//       ? "A verification OTP has been sent to your phone number. Please check your messages."
//       : "A verification OTP has been sent to your email. Please check your inbox.";

//       const handleSubmit = (e) => {
//          e.preventDefault();
//           //  console.log("type value:", type);
//          if(type==="forgotPassword"){
//            navigate(" /reset-password");
//         //  console.log("Inside forgotPassword block");
//       return 
//     }
//     if(type==="phoneLogin"){
//        navigate("/dashboard");
//       return
//     }
//     if(type==="signup"){
//        navigate("/signup-form");
//       return
//     }
  
//   };
//     // console.log("Condition false");


//   const getTitle=()=>{
//     if(type==="forgotPassword") return ""
//     if(type==="phoneLogin") return ""
//     if(type==="signup") return ""
//   }

//   return (

//         <div className="authBox">
//         <h2>Verify {getTitle()}</h2>{" "}
//         <p>{otpText}</p>
//         <form className="form">
//           <div className="control_group">
//             <div className="opt_fields">
//               <OTPInput
//                 value={otp}
//                 onChange={setOtp}
//                 numInputs={4}
//                 renderInput={(props) => <input {...props} id="otp" />}
//                 inputType="tel"
//                 shouldAutoFocus
//               />
//             </div>
//             <div className="auth_bottom">
//               <p>
//                 <button className="link" onClick={() => navigate("/")}>
//                   Resend OTP (30s)
//                 </button>
//               </p>
//             </div>
//           </div>
//           <div className="form_btn">
//             <Button type="submit" className="btn btn_primary w_100" onClick={handleSubmit}>
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

// export default OtpVerification;


// import AuthLayout from "./AuthLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import OTPInput from "react-otp-input";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const method = location.state?.method || "type";
const [searchParams] = useSearchParams();
  const type= searchParams.get("type")

  // Conditionally define the text
  const otpText =
    method === "phone"
      ? "A verification OTP has been sent to your phone number. Please check your messages."
      : "A verification OTP has been sent to your email. Please check your inbox.";

  const handleSubmit = () => {
    if(type==="resetPassword"){
       navigate("/reset-password");

      return 
    }
    if(type==="phoneLogin"){
       navigate("/dashboard");
      return
    }
    if(type==="signup"){
       navigate("/signup-form");
      return
    }
  
  };

  const getTitle=()=>{
    if(type==="forgotPassword") return ""
    if(type==="phoneLogin") return ""
    if(type==="signup") return ""
  }

  return (
    // <AuthLayout>
      <div className="authBox">
        <h2>Verify {getTitle()}</h2>{" "}
        <p>{otpText}</p>
        <form className="form">
          <div className="control_group">
            <div className="opt_fields">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} id="otp" />}
                inputType="tel"
                shouldAutoFocus
              />
            </div>
            <div className="auth_bottom">
              <p>
                <button className="link" onClick={() => navigate("/")}>
                  Resend OTP (30s)
                </button>
              </p>
            </div>
          </div>
          <div className="form_btn">
            <Button type="submit" className="btn btn_primary w_100" onClick={handleSubmit}>
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
    // </AuthLayout> 
  );
};

export default OtpVerification;

