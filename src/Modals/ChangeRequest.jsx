import { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Button, } from '@mui/material'

// interface ModalProps {
//     open: boolean;
//     onClose: () => void;
//     setOpen: Dispatch<SetStateAction<boolean>>
// }

export default function ChangeRequest({ open, onClose, setOpen }) {
    return (
        <Modal
            className="modal addReply_modal"
            open={open}
            onClose={onClose}
        >
            <div className="modal-dialog">
                <div className="modal-body">
                    <div className="modal_title">
                        <h2>Change Request</h2>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                   
                    <form className="form" action="">
                        <div className="control_group">
                           
                                    <div className="section_title">
                                        <h2>Add Reason</h2>
                                    </div>
                                    <TextField
                                        placeholder="Enter Reason"
                                        fullWidth
                                        hiddenLabel
                                        multiline
                                        maxRows={5}
                                        minRows={5}
                                    />
                             
                        </div>
                     
                            <div className="footer_btn_flex">
                                <Button className="btn btn_grey" onClick={() => setOpen(false)}>Cancel</Button>
                                <Button className="btn btn_primary" onClick={() => setOpen(false)}>Submit</Button>
                            </div>
                     
                    </form>
                </div>
            </div>
        </Modal >
    )
}
