import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can also grab the email value here if needed
    // For now, just navigate with method query param
    navigate("/otp?type=resetPassword");
  };

  return (
      <div className="authBox">
        <h2>Forgot Password</h2>
        <p>Please provide your email address to reset your password</p>

        <form className="form" onSubmit={handleSubmit}>
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
            <Button   type="submit" className="btn btn_primary w_100">
              Submit
            </Button>
          </div>
        </form>

        <div className="auth_bottom">
          <p>
            <button
              type="button"
              className="link"
              onClick={() => navigate("/")}
            >
              <KeyboardBackspaceIcon /> Back to Login
            </button>
          </p>
        </div>
      </div>
  );
};

export default ForgotPassword;
