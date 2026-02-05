import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
// interface ModalProps {
//     open: boolean;
//     onClose: () => void;
//     setOpen: Dispatch<SetStateAction<boolean>>;
// }

export default function SelectUpload({ open, onClose, setOpen }) {
    return (
        <Modal className="modal" open={open} onClose={onClose}>
            <div className="modal-dialog">
                <div className="modal-body">
                    <div className="modal_title">
                        <h2>Select Upload Type</h2>
                        <div className="btn-close" onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="upload_listing">
                        <ul>
                            <li>
                                <CameraAltIcon />
                                Camera
                            </li>
                            <li>
                                <input type="file" />
                                <CollectionsIcon />
                                Gallery
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </Modal>
    );
}
