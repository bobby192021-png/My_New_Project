import React, { useEffect, useState } from "react";

import SearchBar from "../../Components/SearchBar";
// import { AddIcCallOutlined, AddTask, Search } from "@mui/icons-material";
import { Badge, Button, IconButton } from "@mui/material";
import {useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { useSelector } from "react-redux";
import ProductCardCom from "../../Components/ProductCardCom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const HomePage = () => {
  const navigate = useNavigate();

   const [dropdownOpen, setDropdownOpen] = useState(false);

     const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || "false";
    if (isLoggedIn === "false") {
      navigate("/"); 
    }
  }, [navigate]);
  const data = JSON.parse(localStorage.getItem('data'));
  console.log(data,">?>?>?>?")

  const cart = useSelector((state) => state.cart)

  return (
    <>
        <div className="topbar">
      <div className="logo">Store</div>

      <div className="profile" onClick={toggleDropdown}>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="profile-img"
        />
        <span className="profile-name">John Doe</span>
        <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
          <a href="/profile">My Profile</a>
          <a href="/settings">Settings</a>
          <a href="/">Logout</a>
        </div>
      </div>
    </div>

      
      <div className="outer">
        <div className="table_header">
      <div className="main_title">
        <h2>Home Page</h2>
      </div>
      <div className="homeNavbar"> 
          <div className="left_s">
            <SearchBar
              placeholder="Search..." 
            />
          </div>
          <div
          className="API" 
          >
            <Button
            onClick={()=>navigate("/Products")}
            >
            <RemoveRedEyeIcon  />
            </Button>
          </div>
          <div className="Cart">
             <Button
              onClick={() => navigate('/cart-page')}
            >
              <Badge badgeContent={cart.length} color="warning">
                <AddShoppingCartIcon />
              </Badge>
            </Button>
          </div>
          <div className="right_s">
            <Button className="btn btn_primary"
              onClick={() => navigate("/add")}
            >
              <AddIcon /> Add Product
            </Button>
          </div>
          </div>
        </div>
        <div>
          <h2>Products</h2>
         
          <ProductCardCom data = {(data)}/>
         
        </div>
      </div>

    </>
  )
}
export default HomePage;


