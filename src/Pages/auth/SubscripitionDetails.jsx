import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  StepLabel,
  Stepper,
  Switch,
  TextField,

  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
// import AuthLayout from "./AuthLayout";
import React, { useState } from "react";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AIStyles from "../../Modals/AIstyles";
import SelectUpload from "../../Modals/select_upload";
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

const SubscriptionForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [openAIModal, setOpenAIModal] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [fastDeliveryEnabled, setFastDeliveryEnabled] = useState(false);

  const steps = [

    "Financial Setup",
    "Store Policies",
    "Shipping & Logistics",
    "Delivery & Return Settings",
    "Store Branding",
    "Subscription Plan"
  ];// Care instruction templates (admin can expand easily)
  const careInstructionTemplates = {
    fashion: [
      "Hand wash with cold water. Do not bleach.",
      "Dry flat in shade. Avoid machine drying.",
    ],
    homeFragrance: [
      "Keep away from direct sunlight. Store in a cool area.",
      "Avoid placing near heat sources. Keep bottle tightly sealed.",
    ],
    accessories: [
      "Avoid contact with water and perfumes.",
      "Store in a dry place. Keep away from sharp objects.",
    ],
  };
  const pickupInstructionOptions = [
    "Call before arrival",
    "Leave at reception",
    "Ring doorbell",
    "Parking available",
    "Custom instruction",
  ];

  const [pickupOption, setPickupOption] = useState("");
  const [selectedInstruction, setSelectedInstruction] = useState("");
  const [customInstruction, setCustomInstruction] = useState("");
  // ========================== STATE ==========================
  const [deliverySLA, setDeliverySLA] = useState("2days"); // default based on category
  const [fastDeliveryEligible, setFastDeliveryEligible] = useState(true); // determine based on business logic

  // Return management
  const [returnPolicy, setReturnPolicy] = useState("7dayReturn");
  const [customReturnText, setCustomReturnText] = useState("");
  const [sameAsPickup, setSameAsPickup] = useState(false);
  const [returnAddress, setReturnAddress] = useState("");
  // ========================== STATE ==========================
  const storeMottoTemplates = [
    "Crafted with Care",
    "Made in the UAE",
    "Celebrate Local Creativity",
    // Admin can add more here
  ];

  const storeStoryTemplates = [
    "Born from a passion for craftsmanship, our store celebrates local artisans and the beauty of handmade traditions...",
    "Inspired by UAE heritage, our brand blends modern aesthetics with timeless cultural values...",
    "Built by creators for creators, our store is a home for unique products made with soul and purpose...",
  ];

  const [selectedMotto, setSelectedMotto] = useState("");
  const [customMotto, setCustomMotto] = useState("");

  const [selectedStoryTemplate, setSelectedStoryTemplate] = useState("");
  const [storeStory, setStoreStory] = useState("");

  const [showStoryEditor, setShowStoryEditor] = useState(false);

  // Assume pickupAddress is stored elsewhere

  // Example category (replace with your real value)
  const selectedCategory = "fashion"; // fashion | homeFragrance | accessories

  const [selectedCareInstruction, setSelectedCareInstruction] = useState("");


  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const renderStepContent = (step) => {
    switch (step) {

      case 0:
        return (

          <form className="form">
            <div className="gap_p">

              {/* Account Holder Name */}
              <div className="control_group w_50">
                <label htmlFor="accountHolder">Account Holder’s Name</label>
                <TextField
                  id="accountHolder"
                  name="accountHolder"
                  placeholder="Enter Account Holder’s Name"
                  fullWidth
                />
              </div>

              {/* Bank */}
              <div className="control_group w_50">
                <label htmlFor="bankName">Bank Name</label>
                <Select fullWidth value={Status} onChange={handleStatusChange}>
                  <MenuItem disabled value="default">Select Bank</MenuItem>
                  <MenuItem value="PNB">PNB</MenuItem>
                  <MenuItem value="SBI">SBI</MenuItem>
                  <MenuItem value="HDFC">HDFC</MenuItem>
                  <MenuItem value="ICICI">ICICI</MenuItem>
                </Select>
              </div>

              {/* IBAN */}
              <div className="control_group w_50">
                <label htmlFor="iban">IBAN Number</label>
                <TextField
                  id="iban"
                  name="iban"
                  placeholder="Enter Number"
                  fullWidth
                />
              </div>

              {/* --- ADVANCED OPTIONS ACCORDION --- */}
              <div className="control_group w_100 accordions_drop">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <strong>Advanced Options</strong>
                  </AccordionSummary>

                  <AccordionDetails>
                    <div className="gap_p" style={{ display: "flex", flexWrap: "wrap" }}>

                      {/* Swift / BIC Code */}
                      <div className="control_group w_50">
                        <label htmlFor="swiftCode">Swift/BIC Code (Optional)</label>
                        <TextField
                          id="swiftCode"
                          name="swiftCode"
                          placeholder="Enter Code"
                          fullWidth
                        />
                      </div>

                      {/* Bank Branch */}
                      <div className="control_group w_50">
                        <label htmlFor="bankBranch">Bank Branch (Optional)</label>
                        <TextField
                          id="bankBranch"
                          name="bankBranch"
                          placeholder="Enter Branch Name"
                          fullWidth
                        />
                      </div>

                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

            </div>
          </form>
        );
      case 1:
        return (
          <form className="form">
            <div className="gap_p return_policy">

              {/* ------------------ C. STORE CARE INSTRUCTIONS ------------------ */}
              <div className="control_group w_100 ai_rec_btn">
                <label htmlFor="careInstructions">
                  Store Care Instructions (Optional)
                  <img src="/static/images/ai_icon.svg" alt="icon" />
                </label>



                <Select fullWidth value={"default"} className="select_abs">
                  <MenuItem disabled value="default">
                    Select Template
                  </MenuItem>
                  {careInstructionTemplates[selectedCategory]?.map((template) => (
                    <MenuItem value="All">  {template}</MenuItem>
                  ))}

                </Select>


                <TextField
                  id="storeName"
                  name="storeName"
                  placeholder="Enter"
                  fullWidth
                  multiline
                  disabled
                />



                {/* Optional AI Button */}
                <Button className="btn btn_primary sm" type="button">
                  <img src="/static/images/ai_icon.svg" alt="" />
                  Enhance with AI
                </Button>
              </div>

              {/* ------------------ D. CUSTOMER TRUST COMMITMENT ------------------ */}
              <div className="control_group w_100">
                <label>Customer Trust Commitment</label>
              </div>

              <div className="control_group">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Authenticity Guaranteed"
                />
              </div>

              <div className="control_group">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Secure Payments"
                />
              </div>

              <div className="control_group">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Transparent Returns"
                />
              </div>

              <div className="control_group">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Privacy Policy"
                />
              </div>

            </div>
          </form>

        );
      case 2:
        return (
          <form className="form">
            {/* Shipping Method Selection */}
            <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mb: 3 }}>
              <div className="form">
                <div className="gap_p">
                  <div className="title_inner">
                    <h3>Integrated Shipping</h3>
                  </div>

                  {/* ---------------- PRIMARY PICKUP ADDRESS ---------------- */}
                  <div className="control_group w_100">
                    <label>Primary Pickup Address</label>

                    <div className="pickup_address_options">

                      {/* Option 1 */}
                      <FormControlLabel
                        control={
                          <Radio
                            checked={pickupOption === "license"}
                            onChange={() => setPickupOption("license")}
                          />
                        }
                        label="Use License Address (auto-fill)"
                      />

                      {/* Option 2 */}
                      <FormControlLabel
                        control={
                          <Radio
                            checked={pickupOption === "personal"}
                            onChange={() => setPickupOption("personal")}
                          />
                        }
                        label="Use Personal Address (from profile)"
                      />

                      {/* Option 3 */}
                      <FormControlLabel
                        control={
                          <Radio
                            checked={pickupOption === "new"}
                            onChange={() => setPickupOption("new")}
                          />
                        }
                        label="Enter New Address (Google Maps autocomplete)"
                      />
                    </div>

                    {/* If NEW ADDRESS → Show Maps Field */}
                    <TextField
                      placeholder="Address"
                      fullWidth
                    // You will integrate Google Autocomplete here
                    />
                  </div>

                  {/* ---------------- CONTACT PHONE NUMBER ---------------- */}
                  <div className="control_group w_50">
                    <label>Contact Phone Number</label>
                    <TextField placeholder="+971" fullWidth />
                  </div>

                  {/* ---------------- PICKUP INSTRUCTIONS ---------------- */}
                  <div className="control_group w_100">
                    <label>Pickup Instructions</label>

                    <div className="instruction_chips">
                      {pickupInstructionOptions.map((option, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`instruction_chip ${selectedInstruction === option ? "selected" : ""
                            }`}
                          onClick={() => {
                            setSelectedInstruction(option);
                            if (option !== "Custom instruction") setCustomInstruction("");
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {/* custom input appears only when selected */}
                    {selectedInstruction === "Custom instruction" && (
                      <TextField
                        placeholder="Enter your custom instruction"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={customInstruction}
                        onChange={(e) => setCustomInstruction(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Box>




            <div className="gap_p">
              <div className="title_inner">
                <h3>Allow Non-Returnable Products</h3>
              </div>
              <div className="control_group">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="For hygiene or customized items only"
                />
              </div>

            </div>
          </form>
        );
      case 3:
        return (
            <form className="form">
              <div className="gap_p">

                {/* ========================== DELIVERY SLA ========================== */}
                <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2 }}>
                  <div className="form">
                    <div className="gap_p">
                      <div className="title_inner">
                        <h3>Delivery SLA (Seller’s Prep Time)</h3>
                        <p style={{ textAlign: "left" }}>How fast can you prepare an order for pickup?</p>
                      </div>

                      {/* RADIO BUTTONS ONLY */}
                      <RadioGroup
                        value={deliverySLA}
                        onChange={(e) => setDeliverySLA(e.target.value)}
                      >
                        <FormControlLabel value="sameDay" control={<Radio />} label="Same-day (24h)" />
                        <FormControlLabel value="1to2days" control={<Radio />} label="1–2 days" />
                        <FormControlLabel value="3days" control={<Radio />} label="3 days" />
                      </RadioGroup>
                    </div>
                  </div>
                </Box>

                {/* ========================== FAST DELIVERY ========================== */}
                <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2 }}>
                  <div className="form">
                    <div className="gap_p">
                      <div className="title_inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }} >
                        <h3>Enable Fast Delivery</h3>
                        {/* Toggle Switch */}
                        <Switch
                          checked={fastDeliveryEnabled}
                          onChange={(e) => setFastDeliveryEnabled(e.target.checked)}
                          color="primary" />
                      </div>
                    </div>
                  </div>
                  {fastDeliveryEnabled && (
                    <Box sx={{ mt: 2, pl: 1 }}> {/* 1. Delivery Type */}
                      <p style={{ textAlign: "left" }}> 1. Delivery Type </p>
                      <div style={{ marginTop: "6px" }}>
                        <FormControlLabel control={<Checkbox />} label="Same-Day Delivery" />
                      </div> {/* 2. Cut-off time */} <p className="mt_20" style={{ textAlign: "left" }}> 2. Cut-Off Time </p>
                      <TextField select size="small" sx={{ mt: 1, width: "200px" }} defaultValue="15:00" >
                        <MenuItem value="12:00">12:00 PM</MenuItem> <MenuItem value="14:00">2:00 PM</MenuItem>
                        <MenuItem value="15:00">3:00 PM</MenuItem> <MenuItem value="16:00">4:00 PM</MenuItem>
                      </TextField> {/* 3. Region Availability */}
                      <p className="mt_20" style={{ textAlign: "left" }}> 3. Region Availability </p>
                      <RadioGroup defaultValue="all" sx={{ mt: 1 }}>
                        <FormControlLabel value="all" control={<Radio />} label="All UAE" />
                        <FormControlLabel value="specific" control={<Radio />} label="Specific Emirates" />
                      </RadioGroup> {/* Emirates checkboxes */} <Box sx={{ pl: 3, mt: 1 }}>
                        <FormControlLabel control={<Checkbox />} label="Dubai" />

                        <FormControlLabel control={<Checkbox />} label="Abu Dhabi" />
                        <FormControlLabel control={<Checkbox />} label="Sharjah / Ajman" />
                        <FormControlLabel control={<Checkbox />} label="RAK" />
                        <FormControlLabel control={<Checkbox />} label="Fujairah" />
                        <FormControlLabel control={<Checkbox />} label="UAQ" />
                      </Box> {/* 4. Information Box */} <Box sx={{ mt: 3, p: 2, border: "1px solid #e0e0e0", borderRadius: 2, background: "#FFF7E6", }} >
                        <Typography sx={{ fontWeight: 600, mb: 1 }}> Vendor Responsibility </Typography>
                        <Typography sx={{ fontSize: "14px", lineHeight: 1.6 }}> You must have the order ready for pickup on time. <br /> If not ready, fast delivery may be disabled for your store. </Typography>
                      </Box>
                    </Box>)}
                </Box>

                {/* ========================== RETURN MANAGEMENT ========================== */}
                <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2 }}>
                  <div className="title_inner">
                    <h3>Return Management</h3>
                  </div>
                  <div className="gap_p">


                    {/* Return & Exchange Options */}
                    <div className="control_group w_100">
                      <label>Return & Exchange Policy</label>
                      <TextField
                        select
                        fullWidth
                        value={returnPolicy}
                        onChange={(e) => setReturnPolicy(e.target.value)}
                      >
                        <MenuItem value="7dayReturn">Standard Return – 7 days</MenuItem>
                        <MenuItem value="7dayExchange">Exchange Only – 7 days</MenuItem>
                        <MenuItem value="noReturn">No Returns (personalized / hygiene)</MenuItem>
                        <MenuItem value="custom">Custom</MenuItem>
                      </TextField>

                      {/* Custom Return Box */}
                      {returnPolicy === "custom" && (
                        <TextField
                          multiline
                          fullWidth
                          placeholder="Enter custom return conditions"
                          sx={{ mt: 2 }}
                          value={customReturnText}
                          onChange={(e) => setCustomReturnText(e.target.value)}
                        />
                      )}
                    </div>

                    {/* Return Address */}
                    <div className="control_group w_100">
                      <label>
                        Return Address
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={sameAsPickup}
                              onChange={(e) => setSameAsPickup(e.target.checked)}
                            />
                          }
                          label="Same as Pickup Address"
                        />
                      </label>

                      <TextField
                        multiline
                        fullWidth
                        placeholder="Enter return address"
                        value={returnAddress}
                        onChange={(e) => !sameAsPickup && setReturnAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </Box>

              </div>
            </form>

        );
      case 4:
        return (
          <form className="form">
            <div className="gap_p">

              {/* ------------------- STORE BANNER ------------------- */}
              <div className="control_group wrap_viewDemo_steps">
                <label>Store Banner</label>
                <div className="upload_box">
                  <label className="upload_action"  onClick={()=> setOpenModal(true)}>
                    <p>
                      <img src="/static/images/upload_icon.svg" alt="icon" />
                      <strong>Upload Store Banner</strong>
                    </p>
                  </label>
                </div>
              </div>

              {/* =================== STORE MOTTO =================== */}
              <div className="control_group ai_rec_btn1">
                <label>Store Motto</label>

                {/* Templates */}

                <Select fullWidth value={"default"} className="select_abs">
                  <MenuItem disabled value="default">
                    Select Motto
                  </MenuItem>
                  {storeMottoTemplates.map((motto, index) => (
                    <MenuItem value="All">  {motto}</MenuItem>
                  ))}

                </Select>


                {/* Custom Input (editable after selecting template OR clicking AI) */}
                <TextField
                  fullWidth
                  placeholder="Enter custom motto"
                  value={customMotto || selectedMotto}
                  onChange={(e) => setCustomMotto(e.target.value)}

                />

                {/* AI Button */}
                <Button
                  className="btn btn_primary sm"
                  sx={{ mt: 2 }}
                  onClick={() => {
                    // Example AI logic
                    const aiGenerated = "A modern celebration of UAE creativity.";
                    setSelectedMotto(aiGenerated);
                    setCustomMotto("");
                  }}
                >
                  <img
                    style={{ filter: "brightness(0) invert(1)" }}
                    src="/static/images/ai_icon.svg"
                    alt=""
                  />
                  Generate with AI
                </Button>
              </div>

              {/* =================== STORE STORY =================== */}
              <div className="control_group ai_rec_btn">
                <label>Store Story / About Your Brand</label>


                <Select fullWidth value={"default"} className="select_abs">
                  <MenuItem disabled value="default">
                    Select Template
                  </MenuItem>
                  {storeStoryTemplates.map((template, index) => (
                    <MenuItem value="All">{template}</MenuItem>
                  ))}

                </Select>
                <TextField
                  className="mt_20"
                  id="Title"
                  placeholder="Short Story"
                  hiddenLabel
                  fullWidth
                  multiline
                />

                {/* AI Button */}
                <Button
                  className="btn btn_primary sm"
                  onClick={() => {
                    const aiStory =
                      "Our journey began with a mission to empower local creators in the UAE. Every product in our store reflects passion, craftsmanship, and cultural pride...";
                    setStoreStory(aiStory);
                    setShowStoryEditor(true);
                  }}
                >
                  <img
                    style={{ filter: "brightness(0) invert(1)" }}
                    src="/static/images/ai_icon.svg"
                    alt=""
                  />
                Enhance with AI
                </Button>

                {/* Editable Text Field AFTER template/AI */}
                {showStoryEditor && (
                  <TextField
                    multiline
                    fullWidth
                    minRows={5}
                    placeholder="Write your store story…"
                    value={storeStory}
                    onChange={(e) => setStoreStory(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                )}
              </div>

            </div>
          </form>

        );
      case 5:
        return (
          <div className="pricing-wrapper">
            <div className="ai_recommendation">
              <figure>
                <img src="/static/images/ai_icon.svg" alt="icon" />
              </figure>

              <h3>AI Recommendation</h3>
              <p>Pro subscription will be best as per your store.</p>
            </div>
            <div className="pricing-container">
              {/* Free Plan */}
              <div className="pricing-card special">
                <div className="icon">🎁</div>
                <h3>Free</h3>
                <h2>
                  AED 0 <span>forever</span>
                </h2>
                <ul>
                  <li>Up to 10 products</li>
                  <li>Basic analytics</li>
                  <li>Email support</li>
                  <li>Payout Speed 48h</li>
                  <li>Standard processing</li>
                </ul>
              </div>

              {/* Grow Plan */}

              {/* Pro Plan */}
              <div className="pricing-card">
                <div className="icon">💼</div>
                <p className="suggested">
                  <img src="/static/images/ai_icon.svg" alt="" />
                  AI Recommended
                </p>
                <h3>Pro</h3>
                <h2>
                  AED 249 <span>per month</span>
                </h2>
                <ul>
                  <li>Unlimited products</li>
                  <li>Full AI suite</li>
                  <li>Premium analytics</li>
                  <li>Dedicated account manager</li>
                  <li>Advanced marketing automation</li>
                  <li>Payout Speed 5d</li>
                  <li>Early access to features</li>
                </ul>
              </div>

              {/* Youth Plan */}
              <div className="pricing-card ">
                <div className="icon">🎁</div>
                <h3>Youth Innovators</h3>
                <h2>
                  Free <span>for under 18</span>
                </h2>
                <ul>
                  <li>All Pro features</li>
                  <li>Mentorship program</li>
                  <li>Educational resources</li>
                  <li>Payout Speed 10d</li>
                  <li>Special recognition badge</li>
                </ul>
              </div>
              {/* Pro Plan */}
              <div className="pricing-card">
                <div className="icon">💼</div>
                <h3>Pro</h3>
                <h2>
                  AED 249 <span>per month</span>
                </h2>
                <ul>
                  <li>Unlimited products</li>
                  <li>Full AI suite</li>
                  <li>Premium analytics</li>
                  <li>Dedicated account manager</li>
                  <li>Advanced marketing automation</li>
                  <li>Payout Speed 5d</li>
                  <li>Early access to features</li>
                </ul>
              </div>
              {/* Pro Plan */}
              <div className="pricing-card">
                <div className="icon">💼</div>
                <h3>Pro</h3>
                <h2>
                  AED 249 <span>per month</span>
                </h2>
                <ul>
                  <li>Unlimited products</li>
                  <li>Full AI suite</li>
                  <li>Premium analytics</li>
                  <li>Dedicated account manager</li>
                  <li>Advanced marketing automation</li>
                  <li>Payout Speed 5d</li>
                  <li>Early access to features</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsOtpVerified(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event
  ) => {
    event.preventDefault();
  };

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
  const handleChangeTabs = (event, newValue) => {
    setValueTabs(newValue);
  };
  const [valueTabs1, setValueTabs1] = useState(0);

  const handleChangeTabs1 = (event, newValue) => {
    setValueTabs1(newValue);
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
  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value.includes("all")) {
      if (selectedCategories.length === categories.length) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories(categories);
      }
    } else {
      setSelectedCategories(
        typeof value === "string" ? value.split(",") : value
      );
    }
  };

  // ----- Handle Sub-Category Change -----
  const handleSubCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value.includes("all")) {
      if (selectedSubCategories.length === subCategories.length) {
        setSelectedSubCategories([]);
      } else {
        setSelectedSubCategories(subCategories);
      }
    } else {
      setSelectedSubCategories(
        typeof value === "string" ? value.split(",") : value
      );
    }
  };

  const handleItemClick = (
    event
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

  const handleNextTab = () => {
    if (valueTabs < 4) {
      setValueTabs((prev) => prev + 1);
    }
  };
  const handleNextTab1 = () => {
    if (valueTabs1 < 4) {
      setValueTabs1((prev) => prev + 1);
    }
  };
  const [selectField1, setSelectField1] = React.useState("default");
  const handleChange1 = (event) => {
    setSelectField1(event.target.value);
  };
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
  const [Status, setStatus] = React.useState("default");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });
  return (
    <>
      {/* <AuthLayout> */}
        <div className="authBox signup_box">
          <section className="wrap_viewDemo_steps uh_spc">
            <div className="container">
              <div className="page_head hd_3">
                <h2>{steps[activeStep]}</h2>
              </div>

              <div className="steps_grid">
                <div className="step_lt">
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => {
                      const percentage = Math.round(
                        ((index + 1) / steps.length) * 100
                      );
                      return (
                        <Step key={index}>
                          <StepLabel>
                            <Box
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                            >
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {percentage}%
                              </Typography>
                            </Box>
                          </StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>

                <div className="step_rt">
                  <div className="shadow_box shadow_box1">
                    {activeStep === steps.length ? (
                      <div className="completed_step">
                        <Typography>
                          All steps completed - you're finished!
                        </Typography>
                        <Button onClick={handleReset} sx={{ mt: 2 }}>
                          Reset
                        </Button>
                      </div>
                    ) : (
                      <>
                        {renderStepContent(activeStep)}

                        <div className="btn_flex">
                          <Button
                            className="btn btn_grey"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                          >
                            Back
                          </Button>

                          {activeStep === steps.length - 1 ? (
                            isOtpVerified ? (
                              <p>sds</p>
                            ) : (
                              <Button
                                className="btn btn_primary"
                                onClick={() => navigate("/dashboard")}
                              >
                                Submit
                              </Button>
                            )
                          ) : (
                            <Button
                              className="btn btn_primary"
                              onClick={handleNext}
                            >
                              Next
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      {/* </AuthLayout> */}
      <AIStyles
        open={openAIModal}
        onClose={() => setOpenAIModal(false)}
        setOpen={setOpenAIModal}
      />
      <SelectUpload
        open={openModal}
        onClose={handleCloseModal}
        setOpen={setOpenModal}
      />
    </>
  );
};

export default SubscriptionForm;
