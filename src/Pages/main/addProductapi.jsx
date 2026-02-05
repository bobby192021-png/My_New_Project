import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddProductApi = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !image) {
      toast.warning("All fields are required");
      return;
    }

    const product = {
      title: title,
      price: price,
      image: image,
    }

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",

        product,

        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      console.log(response.data, "Product Added")
      toast.success("product Added ")
    } catch (error) {
      console.log(error, "error")
      toast.error(error, "Error")
    }
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
    <>

      <div className="outer">

        <h2 className="addAPIheading"> Add Product </h2>

        <div className="addAPI">
          <div className="addAPItext">
            <label htmlFor="title">Title</label>
            <input
              className="editAPItext"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="addAPItext">
            <label htmlFor="price">Price</label>
            <input
              className="editAPItext"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="addAPItext">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageChange}
              multiple
            />
          </div>

          <div className="editAPItext">
            {
              image.length ?

                <CloseIcon
                  onClick={() => {
                    setImage([]);
                    setName("");
                    setPrice("");
                  }}
                  style={{ cursor: "pointer", marginLeft: 10 }}
                /> : null}
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
          <div className="addAPItext">
            <button
              className="addButton"
              onClick={() => {
                { { handleSubmit } navigate("/products") }
                toast.success("product Added ")
              }
              }
            >Add Product </button>
          </div>

        </div>
      </div>
    </>

  )
}

export default AddProductApi;