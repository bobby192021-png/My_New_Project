

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers/DateRangePicker";

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editProduct = location.state?.product;
  const editIndex = location.state?.index;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  // const [startDate, setStartDate] = useState([null,null]);

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.productName);
      setPrice(editProduct.productPrice);
      setImage(editProduct.productImage  || []);
      // setStartDate(editProduct.productStartDate)
    }
  }, [editProduct]);

  const handleSave = () => {
    if (!name || !price || !image) {
      alert("All fields are required");
      return;
    }
     
    const productData = {
      productName: name,
      productPrice: price,
      productImage: image,
      // productStartDate: startDate,
    };

    const oldData = JSON.parse(localStorage.getItem("data")) || [];

    if (editProduct) {
      oldData[editIndex] = productData;
    } else {
      oldData.push({ ...productData, id: Date.now() });
    }
    localStorage.setItem("data", JSON.stringify(oldData));
    
    setName("");
    setPrice("");
    setImage("");
    // setStartDate("");

    navigate("/home-page");
  };
const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  const imageArray = [];

  files.forEach((file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      imageArray.push({
        url: reader.result,
        type: file.type, // image/png, video/mp4 etc
      });

      if (imageArray.length === files.length) {
        setImage(imageArray);
      }
    };

    reader.readAsDataURL(file);
  });
};

  return (
    <div className="outer">
      <h2 >{editProduct ? "Update Product" : "Add Product"}</h2>
      <div className="HELLO">

      <label className="NAME">Name</label>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ></input>
      <br /><br />
        

        <label className="PRICE">Price</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />

      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
        label="Start Date"
        value={startDate}
        onChange={(newValue)=>setStartDate(newValue)}
        />
      </LocalizationProvider>
      <br/> <br/> */}

      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleImageChange}
        multiple
      />
       <br /><br />

      <div>
        {
          image.length?
        
  <CloseIcon
    onClick={() => {
      setImage([]);
      setName("");
      setPrice("");
      // setStartDate("");
    }}
    style={{ cursor: "pointer", marginLeft: 10 }}
  />:null}
{image.length > 0 && (
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    {image.map((image, index) =>
      image.type.startsWith("image") ? (
        <img
          key={index}
          src={image.url}
          alt="preview"
          style={{ height: 100, width: 100, objectFit: "cover" }}
        />
      ) : (
        <video
          key={index}
          src={image.url}
          controls
          style={{ height: 100, width: 100 }}
        />
      )
    )}
  </div>
)}

</div>


      <br /><br />
      <button onClick={handleSave}>
        {editProduct ? "Update Product" : "Add Product"}
      </button>
      </div>
    </div>
  );
};

export default AddProduct;

