import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProductApi = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);

  // ---------- HANDLE SUBMIT ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || image.length === 0) {
      toast.warning("All fields are required");
      return;
    }

    const product = {
      title,
      price,
      image,
    };

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data, "Product Added");
      toast.success("Product added successfully");

      // clear form
      setTitle("");
      setPrice("");
      setImage([]);

      // optional navigation
      // navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // ---------- HANDLE IMAGE ----------
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageArray = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        imageArray.push({
          url: reader.result,
          type: file.type,
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
      <h2 className="addAPIheading">Add Your Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="addAPI">
          {/* TITLE */}
            <label>Title</label>
            <input
              className="addAPItitle"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

          {/* PRICE */}
  
            <label>Price</label>
            <input
              className="addAPIprice"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

          {/* IMAGE INPUT */}
            <input
            className="addAPIimage"
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleImageChange}
            />

          {/* PREVIEW */}
          <div className="editAPItext">
            {image.length > 0 && (
              <>
                <CloseIcon
                  onClick={() => {
                    setTitle("");
                    setPrice("");
                    setImage([]);
                  }}
                  style={{ cursor: "pointer", marginLeft: 10 }}
                />

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginTop: "10px",
                  }}
                >
                  {image.map((item, index) =>
                    item.type.startsWith("image") ? (
                      <img
                      className="addAPIinner"
                        key={index}
                        src={item.url}
                        alt="preview"
                        style={{
                          height: 100,
                          width: 100,
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <video
                        key={index}
                        src={item.url}
                        controls
                        style={{ height: 100, width: 100 }}
                      />
                    )
                  )}
                </div>
              </>
            )}
          </div>

          {/* BUTTON */}
          
            <button className="addButton" type="submit">
              Add Product
            </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductApi;
