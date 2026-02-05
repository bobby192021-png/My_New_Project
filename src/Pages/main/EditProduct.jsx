import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const EditProduct = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]); // ALWAYS ARRAY
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 PREFILL DATA (FIXED)
  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setPrice(product.price || "");

      // normalize image
      if (typeof product.image === "string") {
        setImage([{ url: product.image, type: "image" }]);
      } else if (Array.isArray(product.image)) {
        setImage(product.image);
      } else {
        setImage([]);
      }
    }
  }, [product]);

  // 🔥 UPDATE API
  const handleUpdate = async () => {
    setLoading(true);
    setError("");

    try {
      await axios.patch(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          title,
          price,
          image: image[0]?.url, // FakeStoreAPI only accepts URL
        }
      );

      navigate("/products");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 IMAGE CHANGE
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

  if (loading) return <h3>Loading edit product...</h3>;

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="outer">
      <h2 className="addAPIheading">Edit Product</h2>
        <div className="editAPIedit">

          <label>Title</label>
          <input
          className="editAPItext"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />

          <label>Price</label>
          <input
          className="editAPItext"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />

          <input
          className="editAPItext"
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleImageChange}
          />
          <div className="editAPItext"> 
          {image.length > 0 && (
            <>

              <CloseIcon
                onClick={() => setImage([])}
                style={{ cursor: "pointer", margin: "10px 0" }}
              />

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {image.map((img, index) =>
                  img.type.startsWith("image") ? (
                    <img
                      key={index}
                      src={img.url}
                      alt="preview"
                      style={{ width: 100, height: 100, objectFit: "cover" }}
                    />
                  ) : (
                    <video
                      key={index}
                      src={img.url}
                      controls
                      style={{ width: 100, height: 100 }}
                    />
                  )
                )}
              </div>
            </>
          )}
          </div>
          
          <button onClick={handleUpdate}>
            Update Product
          </button>

        </div>
      </div>
    </>
  );
};

export default EditProduct;
