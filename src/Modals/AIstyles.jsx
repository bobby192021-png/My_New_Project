import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";

// interface ModalProps {
//     open: boolean;
//     onClose: () => void;
//     setOpen: Dispatch<SetStateAction<boolean>>;
// }

export default function AIStyles({ open, onClose, setOpen }) {
    return (
        <Modal className="modal ai_style" open={open} onClose={onClose}>
            <div className="modal-dialog">
                <div className="modal-body">
                    <div className="modal_title">
                        <h2>Select AI Style</h2>
                        <div className="btn-close" onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="form">
                        <div className="gap_p">
                            <div className="control_group">
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    className="checkbox_list"
                                >
                                    <FormControlLabel
                                        value="Elegant"
                                        control={<Radio />}
                                        label="Elegant & Minimalist"
                                    />

                                    <FormControlLabel value="Friendly" control={<Radio />} label="Friendly & Personal" />
                                    <FormControlLabel value="Professional" control={<Radio />} label="Professional & Modern Heritage" />
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="footer_btn_flex">
                            <Button className="btn btn_grey" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button className="btn btn_primary" onClick={() => setOpen(false)}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
