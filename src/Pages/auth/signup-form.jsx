import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  IconButton,
  Input,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
//   SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
// import AuthLayout from "./AuthLayout";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import  { ChangeEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import CloseIcon from "@mui/icons-material/Close";
// import AddReply from "../../Modals/addReply";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChangeRequest from "../../Modals/changeRequest";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import Step1 from "../../components/delete-store-steps/step1";
// import Step2 from "../../components/delete-store-steps/step2";
// import Step3 from "../../components/delete-store-steps/step3";
// import Step4 from "../../components/delete-store-steps/step4";
// import Step5 from "../../components/delete-store-steps/step5";

// interface TabPanelProps {
//    children?: React.ReactNode;
//   index: number;
//   value: number;
// }
const bioTemplates = [
  "Handcrafted products made with passion in the UAE",
  "Locally made goods inspired by modern heritage and tradition",
  "Unique curated items from a licensed UAE home business",
  // Admin can add/edit templates here
];
const SignupForm = () => {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here
    navigate("/dashboard");
  };

  const [valueTabs, setValueTabs] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(0);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const categories = ["Fashion", "Beauty", "Electronics", "Books"];
  const subCategories = ["Men", "Women", "Kids", "Accessories"];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const [openCategory, setOpenCategory] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(false);




  const handleItemClick = (
    MouseEvent
  ) => {
    event.stopPropagation();
    const selectedIndex = selectedItems.indexOf(value);
    let newSelected = [];

    if (selectedIndex === -1) newSelected = [...selectedItems, value];
    else newSelected = selectedItems.filter((v) => v !== value);

    setSelectedItems(newSelected);
  };

  // ✅ Select All / Clear All handler
  const handleSelectAll = (
    event
  ) => {
    event.stopPropagation();
    if (selectedItems.length === allItems.length) setSelectedItems([]);
    else setSelectedItems(allItems);
  };

  return (
    <>
      {/* <AuthLayout> */}
        <div className="authBox signup_box">
          <h2>Setup Store</h2>

          <form className="form" onSubmit={handleSubmit}>
            {/* IMAGE UPLOAD */}
            <div className="gap_p">
              <div className="control_group w_100">
                <label htmlFor="icon-button-file">Upload Logo</label>
                {image ? (
                  <div className="upload_image">
                    <div className="upload_image_holder">
                      <figure>
                        <CardMedia component="img" image={image} alt="photo" />
                      </figure>
                      <CloseIcon
                        onClick={() => {
                          setImage("");
                          setFileName("");
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <label className="upload_image" htmlFor="icon-button-file">
                    <Input
                      sx={{ display: "none" }}
                      id="icon-button-file"
                      type="file"
                      inputProps={{
                        accept: "image/png,image/jpeg",
                      }}
                      onChange={(event) => {
                        const files = (event.target).files;
                        if (files && files[0].type.includes("image")) {
                          setFileName(files[0].name);
                          setImage(URL.createObjectURL(files[0]));
                        } else {
                          setAlertType(0);
                          setShowAlert(true);
                          setAlertMessage("This field only accepts images.");
                        }
                      }}
                    />
                    <span className="upload_image_holder">
                      <figure className="add_img">
                        <img
                          src="/static/images/user_placeholder.png"
                          alt="icon"
                        />
                        <span className="upload_img_icon">
                          <img src="/static/images/edit2_icon.svg" alt="icon" />
                        </span>
                      </figure>
                    </span>
                  </label>
                )}
              </div>

              {/* OWNER NAME */}
              <div className="control_group w_33">
                <label htmlFor="ownerName">Short Name </label>
                <TextField
                  id="ownerName"
                  name="ownerName"
                  placeholder="Enter Short Name"
                  fullWidth
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="ownerName">Store Name</label>
                <TextField
                  id="ownerName"
                  name="ownerName"
                  placeholder="Enter Store Name"
                  fullWidth
                />
              </div>

              {/* PHONE NUMBER */}

              {/* EMAIL */}
              <div className="control_group w_33">
                <label htmlFor="email">Contact Email </label>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  fullWidth
                />
              </div>

              <div className="control_group w_33">
                <label htmlFor="storeName">Contact Phone</label>
                <TextField
                  id="storeName"
                  name="storeName"
                  placeholder="+971"
                  fullWidth
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="storeName">License number</label>
                <TextField
                  id="storeName"
                  name="storeName"
                  placeholder="Enter License number"
                  fullWidth
                />
              </div>

              <div className="control_group w_33">
                <label htmlFor="storeName">Store Address (Emirate)</label>
                <Select fullWidth value={"default"}>
                  <MenuItem disabled value="default">
                    Select
                  </MenuItem>
                  <MenuItem value="All">Abu Dhabi</MenuItem>
                  <MenuItem value="Cash">Dubai</MenuItem>
                  <MenuItem value="Online">Sharjah</MenuItem>
                  <MenuItem value="Other">Ajman</MenuItem>
                  <MenuItem value="Other">Umm al-Quwain</MenuItem>
                  <MenuItem value="Other">Ras al-Khaimah</MenuItem>
                  <MenuItem value="Other">Fujairah</MenuItem>
                </Select>
              </div>
              <div className="control_group w_33">
                <label htmlFor="category">
                  Category{" "}
                  <Tooltip
                    title="To change the category you need to send a request to admin"
                    enterTouchDelay={0}
                    leaveTouchDelay={1000}
                  >
                    <span className="info_icon">
                      <InfoOutlinedIcon fontSize="small" />
                    </span>
                  </Tooltip>
                </label>

                <Select
                  multiple
                  displayEmpty
                  open={openCategory}
                  onOpen={() => setOpenCategory(true)}
                  onClose={() => setOpenCategory(false)}
                  value={selectedCategories}
                  renderValue={(selected) =>
                    selected.length === 0 ? (
                      <span style={{ color: "#999" }}>Select Category</span>
                    ) : (
                      (selected).join(", ")
                    )
                  }
                  fullWidth
                  MenuProps={{
                    PaperProps: { style: { maxHeight: 300 } },
                  }}
                >
                  {/* Select All / Clear All */}
                  <MenuItem
                    value="all"
                    onClick={(e) =>
                      handleSelectAll(
                        e,
                        categories,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                  >
                    <Checkbox
                      checked={
                        categories.length > 0 &&
                        selectedCategories.length === categories.length
                      }
                      indeterminate={
                        selectedCategories.length > 0 &&
                        selectedCategories.length < categories.length
                      }
                    />
                    <ListItemText
                      primary={
                        selectedCategories.length === categories.length
                          ? "Clear All"
                          : "Select All"
                      }
                    />
                  </MenuItem>

                  {categories.map((cat) => (
                    <MenuItem
                      key={cat}
                      value={cat}
                      onClick={(e) =>
                        handleItemClick(
                          e,
                          cat,
                          selectedCategories,
                          setSelectedCategories
                        )
                      }
                    >
                      <Checkbox checked={selectedCategories.includes(cat)} />
                      <ListItemText primary={cat} />
                    </MenuItem>
                  ))}
                </Select>
              </div>

              {/* ---------- SUB-CATEGORY SELECT ---------- */}
              <div className="control_group w_33">
                <label htmlFor="subCategory">
                  Sub-Category{" "}
                  <Tooltip
                    title="Once submitted, your request will be reviewed by the admin team to ensure alignment with your registered trade license."
                    enterTouchDelay={0}
                    leaveTouchDelay={1000}
                  >
                    <span className="info_icon">
                      <InfoOutlinedIcon fontSize="small" />
                    </span>
                  </Tooltip>
                </label>

                <Select
                  multiple
                  displayEmpty
                  open={openSubCategory}
                  onOpen={() => setOpenSubCategory(true)}
                  onClose={() => setOpenSubCategory(false)}
                  value={selectedSubCategories}
                  renderValue={(selected) =>
                    selected.length === 0 ? (
                      <span style={{ color: "#999" }}>Select Sub-Category</span>
                    ) : (
                      (selected).join(", ")
                    )
                  }
                  fullWidth
                  MenuProps={{
                    PaperProps: { style: { maxHeight: 300 } },
                  }}
                >
                  {/* Select All / Clear All */}
                  <MenuItem
                    value="all"
                    onClick={(e) =>
                      handleSelectAll(
                        e,
                        subCategories,
                        selectedSubCategories,
                        setSelectedSubCategories
                      )
                    }
                  >
                    <Checkbox
                      checked={
                        subCategories.length > 0 &&
                        selectedSubCategories.length === subCategories.length
                      }
                      indeterminate={
                        selectedSubCategories.length > 0 &&
                        selectedSubCategories.length < subCategories.length
                      }
                    />
                    <ListItemText
                      primary={
                        selectedSubCategories.length === subCategories.length
                          ? "Clear All"
                          : "Select All"
                      }
                    />
                  </MenuItem>

                  {subCategories.map((sub) => (
                    <MenuItem
                      key={sub}
                      value={sub}
                      onClick={(e) =>
                        handleItemClick(
                          e,
                          sub,
                          selectedSubCategories,
                          setSelectedSubCategories
                        )
                      }
                    >
                      <Checkbox checked={selectedSubCategories.includes(sub)} />
                      <ListItemText primary={sub} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="control_group w_100 ai_rec_btn">
                <label htmlFor="storeBio">
                  Store Bio
                  <p style={{ margin: 0 }}>(250 characters maximum)</p>
                </label>
                <Select fullWidth value={"default"} className="select_abs">
                  <MenuItem disabled value="default">
                    Select Template
                  </MenuItem>
                  {bioTemplates.map((template, index) => (
                    <MenuItem value="All">{template}</MenuItem>
                  ))}
                 
                </Select>


                <TextField
                  id="storeBio"
                  name="storeBio"
                  placeholder="Enter Store Bio"
                  multiline
                  fullWidth
                  disabled
                  inputProps={{ maxLength: 250 }}
                />

                {/* AI Generation Button */}
                <Button
                  className="btn btn_primary sm"
                  type="button"
                >
                  <img src="/static/images/ai_icon.svg" alt="" />
                  Generate My Bio with AI
                </Button>
              </div>


              <div className="form_btn">
                {/* <Button className="btn btn_primary" variant="contained" onClick={() => setOpenModal(true)}>
                  Edit
                </Button> */}
                <Button
                  className="btn btn_primary"
                  variant="contained"
                  onClick={() => navigate("/subscription-form")}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </form>
        </div>
      {/* </AuthLayout> */}
      <ChangeRequest
        open={openModal}
        onClose={handleCloseModal}
        setOpen={setOpenModal}
      />
    </>
  );
};

export default SignupForm;
