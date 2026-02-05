import { ChangeEvent, useState } from "react";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  Typography,
  Chip,
  CardMedia,
  Input,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SwitchToggle from "../../components/SwitchToggle";
import CommentIcon from '@mui/icons-material/Comment';
import SelectUpload from "../../Modals/select_upload";
const AddProductEnhanced = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("default");
  const [images, setImages] = useState(Array(8).fill(null));

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value );
  };

  // ✅ Color and Size state
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

  // ✅ Selection handler for colors
  const handleColorClick = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  // ✅ Selection handler for sizes
  const handleSizeClick = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const handleImageChange = (
    event,
    index
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[index] = imageUrl;
      setImages(newImages);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(0);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  // By default, first image is featured
  const [featuredIndex, setFeaturedIndex] = useState(0);
  // const handleRemoveImage = (index: number) => {
  //   const newImages = [...images];
  //   newImages.splice(index, 1);
  //   setImages(newImages);

  //   // Update featuredIndex if needed
  //   if (featuredIndex === index) {
  //     setFeaturedIndex(newImages.length > 0 ? 0 : null);
  //   } else if (featuredIndex > index) {
  //     setFeaturedIndex(featuredIndex - 1);
  //   }
  // };
  const [isFeatured, setIsFeatured] = useState(false);
  const handleToggleFeatured = (e) => {
    setIsFeatured(e.target.checked);
  };


  return (
    <>
      {/* 🟦 Page Header */}
      <div className="main_title">
        <h1>Add Product</h1>
        <p>
          <button onClick={() => navigate("/dashboard")}>Dashboard</button> -{" "}
          <button onClick={() => navigate("/manage-products")}>
            Manage Products
          </button>
          - Add Product
        </p>
      </div>

      {/* 🟦 Product Form */}
      <div className="cards custom_form_details">
        <div className="form">
          <div className="gap_m w_100">
            <div className="control_group w_33">
              <label>Product Name</label>
              <TextField placeholder="Enter here" fullWidth hiddenLabel />
            </div>

            <div className="control_group w_33">
              <label>Product Category <img className="cr_pt" src="/static/images/ai_icon.svg" alt="icon" /> </label>
              <Select fullWidth value={type} onChange={handleTypeChange}>
                <MenuItem disabled value="default">
                  Select Category
                </MenuItem>
                <MenuItem value="category1">Category1</MenuItem>
                <MenuItem value="category2">Category2</MenuItem>
              </Select>
            </div>

            <div className="control_group w_33">
              <label>Product Sub-Category <img className="cr_pt" src="/static/images/ai_icon.svg" alt="icon" /></label>
              <Select fullWidth value={type} onChange={handleTypeChange}>
                <MenuItem disabled value="default">
                  Select Sub-Category
                </MenuItem>
                <MenuItem value="subcategory1">Sub-Category1</MenuItem>
              </Select>
            </div>


            <div className="control_group w_33">
              <label>Tags <img className="cr_pt" src="/static/images/ai_icon.svg" alt="icon" /></label>
              <TextField placeholder="Enter here" fullWidth hiddenLabel />
            </div>
            <div className="control_group w_100 ai_rec_btn">
              <label>Product Description</label>
              <TextField
                label="Product Description*"
                fullWidth
                multiline
                minRows={4}
                placeholder="Enter product description..."
              />
              <Button className="btn btn_primary sm">
                <img src="/static/images/ai_icon.svg" alt="" />
                Enhance with AI
              </Button>
            </div>
          </div>



        </div>
      </div>

      {/* 🟦 Attributes Section */}
      <div className="cards variants">
        <Box sx={{ borderRadius: 2 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Add Attributes
          </Typography>


          {/* ✅ Color Chips */}
          <div className="select_variant">
            <Typography variant="subtitle1" fontWeight={500}>
              <SwitchToggle /> Colour
            </Typography>

            <Box display="flex" gap={1} mt={1}>
              {["Red", "Green", "Blue", "Yellow", "Black"].map((color) => {
                const isSelected = selectedColors.includes(color);
                return (
                  <Chip
                    key={color}
                    label={color}
                    onClick={() => handleColorClick(color)}
                    clickable
                    sx={{
                      backgroundColor: isSelected ? "#D3B88C" : "transparent",
                      color: isSelected ? "#fff" : "inherit",
                      borderColor: "#D3B88C",
                      "&:hover": {
                        backgroundColor: isSelected
                          ? "#1565c0"
                          : "rgba(25,118,210,0.1)",
                      },
                    }}
                    variant="outlined"
                  />
                );
              })}
            </Box>
          </div>

          {/* ✅ Size Chips */}
          <div className="select_variant">
            <Typography variant="subtitle1" fontWeight={500}>
              <SwitchToggle /> Size
            </Typography>

            <Box display="flex" gap={1} mt={1}>
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => {
                const isSelected = selectedSizes.includes(size);
                return (
                  <Chip
                    key={size}
                    label={size}
                    onClick={() => handleSizeClick(size)}
                    clickable
                    sx={{
                      backgroundColor: isSelected ? "#D3B88C" : "transparent",
                      color: isSelected ? "#fff" : "inherit",
                      borderColor: "#D3B88C",
                      "&:hover": {
                        backgroundColor: isSelected
                          ? "#1565c0"
                          : "rgba(25,118,210,0.1)",
                      },
                    }}
                    variant="outlined"
                  />
                );
              })}
            </Box>
          </div>
        </Box>

        <Button className="btn btn_primary">Create Variant</Button>

        {/* 🟦 Example Variant Details */}
        <div className="create_variant mt_20">
          <ul>
            <li>
              <strong>Colour</strong> Black
            </li>
            <li>
              <strong>Size</strong> L
            </li>
            <li>
              <Button>
                <DeleteIcon />
              </Button>
            </li>
          </ul>

          <div className="form">
            <div className="gap_m">
              <div className="control_group w_33">
                <label>Variant Name</label>
                <TextField placeholder="Enter Variant Name" fullWidth />
              </div>

              <div className="control_group w_33">
                <label>Price  <img className="cr_pt" src="/static/images/ai_icon.svg" alt="" /></label>
                <TextField placeholder="Enter Price" fullWidth />
              </div>

              <div className="control_group w_33">
                <label>Discounted Price</label>
                <TextField placeholder="Enter Discounted Price" fullWidth />
              </div>
            </div>
          </div>

          {/* 🟦 Product Images */}
          <Typography variant="subtitle1" fontWeight={500} mt={3}>
            Product Images or Videos* <img className="cr_pt" src="/static/images/ai_icon.svg" alt="" />
          </Typography>

          <div className="gap_p">
            <div className="control_group wrap_viewDemo_steps w_100">
              <label htmlFor="">Upload</label>
              <div className="upload_box">
                <label className='upload_action' onClick={() => setOpenModal(true)} style={{ minHeight: "195px" }}>
                  <p>
                    <img src="/static/images/upload_icon.svg" alt='icon' />
                    <strong>Click to upload image or take photo</strong>
                  </p>
                </label>
              </div>
            </div>
            {images.map((image, i) => (
              <div key={i} className="control_group w_17">
                <label htmlFor="" className="featured">Make Featured</label>
                {image ? (
                  <div className="upload_image">
                    <div className="upload_image_holder square">

                      {/* IMAGE */}
                      <figure>
                        <CardMedia component="img" image={image} alt={`photo-${i}`} />
                      </figure>

                      {/* FEATURED TAG */}
                      {featuredIndex === i && (
                        <span className="featured_tag">Featured</span>
                      )}

                      {/* REMOVE IMAGE */}
                      <CloseIcon onClick={() => handleRemoveImage(i)} />

                      {/* SET AS FEATURED BUTTON */}
                      <button
                        type="button"
                        className={`featured_btn ${featuredIndex === i ? "active" : ""}`}
                        onClick={() => setFeaturedIndex(i)}
                      >
                        {featuredIndex === i ? "Featured" : "Set Featured"}
                      </button>

                    </div>
                  </div>
                ) : (
                  <label className="upload_image" htmlFor={`icon-button-file-${i}`}>

                    {featuredIndex === i && (
                      <span className="featured_tag">Featured</span>
                    )}
                    <span className="upload_image_holder square">
                      <figure className="add_img">
                        <img src="/static/images/placeholder.png" alt="icon" />
                        <span className="upload_img_icon delete_icon">
                          <img src="/static/images/trash2_icon.svg" alt="edit" />
                        </span>
                      </figure>
                    </span>
                  </label>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
      <div className="cards">
        <Grid item xs={12}>
          <Box display="flex" gap={2} flexDirection="column" >

            <Box display="flex" gap={2}>

              Add Product as Featured Products
              <SwitchToggle
                checked={isFeatured}
                onChange={handleToggleFeatured}
              />

            </Box>

            {isFeatured && (
              <div className="flex_clm">
                <Typography>
                  One-time fee AED 300. Featured for 7 days from the moment this product goes live after approval.
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginLeft: "4px" }}>
                  Estimated period: 12 Dec 2025 – 19 Dec 2025<br />
                </Typography>
                <div className="btn_row">
                  <Button className="btn btn_primary sm mt_20">Confirm & Add as featured</Button>
                  <Button className="btn btn_primary sm mt_20">Cancel</Button>
                </div></div>)}
          </Box>
        </Grid>
      </div>
      <div className="cards">
        <Box sx={{ borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Product Promotion  <Typography variant="h6" fontWeight={400}> </Typography>
          </Typography>

          <Box
            sx={{
              background: "#D3B88C",
              p: 2,
              color: "#fff",
              borderRadius: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CommentIcon />
            <Typography style={{ color: "#fff" }}>
              To promote your product you need to upgrade your subscription
            </Typography>
          </Box>
        </Box>
        <div className="form mt_20">
          {/* 🟦 Product Images */}
          <Typography variant="subtitle1" fontWeight={500} mt={3}>
            Product Reels <img className="cr_pt" src="/static/images/ai_icon.svg" alt="" />
          </Typography>
          <div className="gap_p ">
            <div className="control_group wrap_viewDemo_steps w_100">
              <div className="upload_box">
                <label className='upload_action' onClick={() => setOpenModal(true)} style={{ minHeight: "195px" }}>
                  <p>
                    <img src="/static/images/upload_icon.svg" alt='icon' />
                    <strong>Click to upload image or take photo</strong>
                  </p>
                </label>
              </div>
            </div>
            <div className="control_group w_17">

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
                
                  
                  <span className="upload_image_holder square">
                    <figure className="add_img">
                      <img
                        src="/static/images/placeholder.png"
                        alt="icon"
                      />
                      <span className="upload_img_icon">
                        <img src="/static/images/trash2_icon.svg" alt="icon" />
                      </span>
                    </figure>
                  </span>
                </label>
              )}
            </div>
            <div className="control_group w_17">
              <label htmlFor="icon-button-file"></label>
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
                 
                  <span className="upload_image_holder square">
                    <figure className="add_img">
                      <img
                        src="/static/images/placeholder.png"
                        alt="icon"
                      />
                      <span className="upload_img_icon">
                        <img src="/static/images/trash2_icon.svg" alt="icon" />
                      </span>
                    </figure>
                  </span>
                </label>
              )}
            </div>
            <div className="control_group w_17">
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
                  
                  <span className="upload_image_holder square">
                    <figure className="add_img">
                      <img
                        src="/static/images/placeholder.png"
                        alt="icon"
                      />
                      <span className="upload_img_icon">
                        <img src="/static/images/trash2_icon.svg" alt="icon" />
                      </span>
                    </figure>
                  </span>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w_100 mt_20">
        <Button className="w_100 btn btn_primary" size="large">
          Save
        </Button>
      </div>
      <SelectUpload
        open={openModal}
        onClose={handleCloseModal}
        setOpen={setOpenModal}
      />
    </>

  );
};

export default   AddProductEnhanced;
