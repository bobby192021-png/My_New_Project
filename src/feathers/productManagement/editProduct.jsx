import { useState } from "react";
import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Switch,
  Chip,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const EditProduct = () => {
  const [type, setType] = React.useState("default");
  const handleTypeChange = (event) => {
    setType(event.target.value );
  };
  const [Range, setRange] = useState("default");
  const [isRecommended, setIsRecommended] = useState(true);
  const [selectedColors, setSelectedColors] = useState([
    "Red",
    "Blue",
    "Green",
  ]);
  const [selectedSizes, setSelectedSizes] = useState([
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ]);

  return (
    <>
      <div className="main_title">
        <h1>Edit Product</h1>
      </div>
      <div className="cards custom_form_details">
        {/* <Typography variant="h6" fontWeight={600} mb={2}>
          Product
        </Typography> */}
        <div className="form">
          <div className="gap_m w_100">
            <div className="control_group w_100">
              <label htmlFor="text">Product Name</label>
              <TextField
                id="text"
                placeholder="Enter here"
                fullWidth
                hiddenLabel
              />
            </div>
            <div className="control_group w_33">
              <label htmlFor="email">Product Category</label>
              <Select fullWidth value={type} onChange={handleTypeChange}>
                <MenuItem disabled value="default">
                  Select Category
                </MenuItem>
                <MenuItem value="broadcast">Category1</MenuItem>
                <MenuItem value="email">Category2</MenuItem>
                <MenuItem value="email">Category3</MenuItem>
              </Select>
            </div>

            <div className="control_group w_33">
              <label htmlFor="email">Product Sub-Category</label>
              <Select fullWidth value={type} onChange={handleTypeChange}>
                <MenuItem disabled value="default">
                  Select Sub-Category
                </MenuItem>
                <MenuItem value="broadcast">sub-Category1</MenuItem>
                <MenuItem value="email">sub-Category2</MenuItem>
                <MenuItem value="email">sub-Category3</MenuItem>
              </Select>
            </div>
            <div className="control_group w_33">
              <label htmlFor="email">Brand</label>
              <Select fullWidth value={type} onChange={handleTypeChange}>
                <MenuItem disabled value="default">
                  Select Brand
                </MenuItem>
                <MenuItem value="broadcast">Brand1</MenuItem>
                <MenuItem value="email">Brand2</MenuItem>
                <MenuItem value="email">Brand3</MenuItem>
              </Select>
            </div>
          </div>
          <Grid item xs={12}>
            <TextField
              label="Product Description*"
              fullWidth
              multiline
              minRows={4}
              placeholder="Enter product details..."
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Warranty*"
              fullWidth
              multiline
              minRows={2}
              placeholder="Enter warranty information..."
            />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Add Product is Recommended*</Typography>
              <Switch
                checked={isRecommended}
                onChange={() => setIsRecommended(!isRecommended)}
              />
            </Box>
          </Grid>
        </div>
      </div>

      {/* Attributes */}
      <div className="cards">
        <Box sx={{ borderRadius: 2, mt: 3 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Add Attributes
          </Typography>

          <Box mb={2}>
            <Typography variant="subtitle1" fontWeight={500}>
              Colour
            </Typography>
            <Box display="flex" gap={1} mt={1}>
              {selectedColors.map((color) => (
                <Chip
                  key={color}
                  label={color}
                  color={
                    color === "Red"
                      ? "error"
                      : color === "Green"
                      ? "success"
                      : "primary"
                  }
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              Size
            </Typography>
            <Box display="flex" gap={1} mt={1}>
              {selectedSizes.map((size) => (
                <Chip key={size} label={size} variant="outlined" />
              ))}
            </Box>
          </Box>
        </Box>
      </div>

      {/* Variant Section */}
      <div className="cards">
        <Box sx={{ borderRadius: 2, mt: 3 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Variant
          </Typography>
          <div className="form">
            <div className="gap_m">
              <div className="control_group w_33">
                <label htmlFor="text">Variant Name</label>
                <TextField
                  id="text"
                  placeholder="Enter Variant Name"
                  fullWidth
                  hiddenLabel
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="text">Market Cost</label>
                <TextField
                  id="text"
                  placeholder="Enter Market Cost"
                  fullWidth
                  hiddenLabel
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="text">Selling Cost</label>
                <TextField
                  id="text"
                  placeholder="Enter Selling Cost"
                  fullWidth
                  hiddenLabel
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="text">Selling Cost</label>
                <TextField
                  id="text"
                  placeholder="Enter Selling Cost"
                  fullWidth
                  hiddenLabel
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="email">Tax*</label>
                <Select fullWidth value={type} onChange={handleTypeChange}>
                  <MenuItem disabled value="default">
                    Select Tax*
                  </MenuItem>
                  <MenuItem value="broadcast">Tax1</MenuItem>
                  <MenuItem value="email">Tax2</MenuItem>
                  <MenuItem value="email">Tax3</MenuItem>
                </Select>
              </div>
              <div className="control_group w_33">
                <label htmlFor="text">Quantity for Inventory*</label>
                <TextField
                  id="text"
                  placeholder=" Quantity for Inventory*"
                  fullWidth
                  hiddenLabel
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="text">Purchase Limit</label>
                <TextField
                  id="text"
                  placeholder=" Purchase Limit"
                  fullWidth
                  hiddenLabel
                />
              </div>
              <div className="control_group w_33">
                <label htmlFor="text">Type</label>
                <TextField
                  id="text"
                  placeholder=" Type"
                  fullWidth
                  hiddenLabel
                />
              </div>
              
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                {Range === "5" && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="form_control"
                      slots={{
                        openPickerIcon: () => (
                          <img
                            src="/static/images/date_icon.svg"
                            alt="Pick date"
                          />
                        ),
                      }}
                      slotProps={{
                        textField: {
                          placeholder: "Select Date",
                          fullWidth: true,
                          hiddenLabel: true,
                        },
                      }}
                      desktopModeMediaQuery="(min-width:0px)"
                    />
                  </LocalizationProvider>
                )}
              </Grid>
            </Grid>
          </div>

          <Typography variant="subtitle1" fontWeight={500} mt={3}>
            Product Image*
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 120px)"
            gap={2}
            mt={1}
          >
            {[...Array(8)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 120,
                  height: 100,
                  border: "1px dashed #ccc",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fafafa",
                }}
              >
                <img
                  src="/static/images/placeholder.png"
                  alt="Placeholder"
                  style={{ width: "60px", height: "60px", opacity: 0.6 }}
                />
              </Box>
            ))}
          </Box>

          <Typography variant="subtitle1" fontWeight={500} mt={3}>
            Product Video (Optional)
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 120px)"
            gap={2}
            mt={1}
          >
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 120,
                  height: 100,
                  border: "1px dashed #ccc",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fafafa",
                }}
              >
                <img
                  src="/static/images/placeholder.png"
                  alt="Placeholder"
                  style={{ width: "60px", height: "60px", opacity: 0.6 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </div>

      <Box textAlign="center" mt={3}>
        <Button
          className="btn_primary"
          variant="contained"
          sx={{ borderRadius: "8px", px: 6, py: 1.5 }}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default EditProduct;
