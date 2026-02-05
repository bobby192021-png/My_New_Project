import { Button, FormControl, Modal } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OTPInput from "react-otp-input";

// interface ModalProps {
//   open: boolean;
//   onClose: () => void;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   onVerify?: () => void;
// }

const OtpVerification2 = ({ open, onClose, setOpen, onVerify }) => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    onVerify?.();
  };

  return (
    <Modal className="modal otp_modal" open={open} onClose={onClose}>
      <div className="modal-dialog">
        <div className="modal-body">
          <div className="btn-close" onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
          <div className="modal_title text_center hd_4">
            <h3>Verify Email Address</h3>
            <p>A 4 digit OTP has been sent to johndoe@yopmail.com</p>
          </div>
          <form className="form">
            <div className="gap_m">
              <div className="control_group w_100">
                <FormControl className="opt_fields" sx={{ width: "100%" }}>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputType="tel"
                  />
                </FormControl>
              </div>
            </div>
            <div className="form_btn">
              <Button className="btn btn_primary w_100" onClick={handleVerify}>
                Verify
              </Button>
            </div>
          </form>
          <p>Resend OTP <span>00:42</span></p>
        </div>
      </div>
    </Modal>
  );
};

export default OtpVerification2;
