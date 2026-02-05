
import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../feathers/carts/cartSlice';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ProductImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const total = images.length;
  const hasMultipleImages = total > 1;


  const startAutoSlide = () => {
    sliderRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (sliderRef.current) clearInterval(sliderRef.current);
  };

  useEffect(() => {
    if (!hasMultipleImages) return;
    startAutoSlide();
    return () => stopAutoSlide();
  }, [images]);

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    startAutoSlide();
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="imageContainer" style={{ position: "relative", overflow: "hidden" }}>

      <div
        style={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.6s ease-in-out"
        }}
      >
        {images.map((img, i) => {

          return (
            <>
              {
                img?.type?.startsWith("video") ? (
                  <video
                    key={i}
                    src={img.url}
                    className='setVideo'
                    controls
                    // style={{ height: 300, width: 300 }}
                  /> ):(
                  <img
                    key={i}
                    src={img.url || img}
                    className="productImage"
                    alt="product"
                    style={{ width: "100%", flexShrink: 0 }}
                  />
        )}
           </>
          )
        })}
      </div>

      {hasMultipleImages && (
        <>
          <button className="slider-btn left" onClick={prevSlide}><KeyboardArrowLeftIcon /></button>
          <button className="slider-btn right" onClick={nextSlide}><KeyboardArrowRightIcon /></button>

          <div className="slider-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};


function ProductCardCom(props) {
  const { data } = props || [];

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const handleDelete = (index) => {
    const isConfirm = window.confirm("Do you want to delete product?");
    if (isConfirm) {
      const storedData = JSON.parse(localStorage.getItem("data")) || [];
      const updatedData = storedData.filter((_, i) => i !== index)
      localStorage.setItem("data", JSON.stringify(updatedData));
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  };

  return (
    <div className="d_flex">
      {data?.length && data.map((product, index) => {
        const inCart = isProductInCart(product.id);

        return (
          <div className="productset" key={index}>
            {Array.isArray(product?.productImage) ? (
              <ProductImageSlider images={product.productImage} />
            ) : (
              <div className="imageContainer">
                <img
                  src={product?.productImage}
                  alt={product?.productName}
                  className="productImage"
                />
              </div>
            )}

            <div className='line'>
              <h3 className="Name">Name: {product?.productName}</h3>
              <p className="Price">Price: ₹ {product?.productPrice}</p>
            </div>

            <div className="Button">
              <IconButton onClick={() => Navigate('/add', { state: { product, index } })}>
                <img src="/public/static/images/edit2_icon.svg" alt="Edit" />
              </IconButton>

              <IconButton onClick={() => handleDelete(index)}>
                <img src="/public/static/images/trash2_icon.svg" alt="Delete" />
              </IconButton>

              <IconButton onClick={() => {
                dispatch(addToCart(product))
                alert("Product added")
              }}>
                {inCart ? <BookmarkAddedIcon /> : <AddShoppingCartIcon />}
              </IconButton>

              <div className='heart'>
                <IconButton onClick={() => {
                  dispatch(addToCart(product))
                  alert("Product added")
                }}>
                  {inCart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default ProductCardCom;
