import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  MenuItem,
  Select,
  Box,
  Button,
  TextField,
} from "@mui/material";
import SwitchToggle from "../../components/SwitchToggle";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import React from "react";

const ManageProducts = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = React.useState("default");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const products = [
    {
      id: "#PROD-001",
      name: "Men Sports Shoes",
      category: "Footwear",
      brand: "Nike",
      price: 120,
      badge: 3,
      status: true,
      createdDate: "30 July 2025",
      questions: 12, // ⭐ NEW FIELD
      image: "/static/images/placeholder.png",
    },
    {
      id: "#PROD-002",
      name: "Men Sports Shoes",
      category: "Footwear",
      brand: "Nike",
      price: 90,
      status: true,
      questions: 8, // ⭐ NEW FIELD
      createdDate: "30 July 2025",
      image: "/static/images/placeholder.png",
    },
    {
      id: "#PROD-003",
      name: "Men Sports Shoes",
      category: "Footwear",
      brand: "Nike",
      price: 150,
      status: true,
      questions: 20, // ⭐ NEW FIELD
      createdDate: "30 July 2025",
      image: "/static/images/placeholder.png",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="main_title">
        <h1>Manage Products</h1>
      </div>

      <div className="cards">
        <div className="table_header">
          <div className="left_s">
            <SearchBar
              searchTerm={searchTerm}
              setDebouncedSearchTerm={setSearchTerm}
              placeholder="Search..."
            />
          </div>
          <div className="right_s">
            <Button className="btn btn_primary">Upload CSV</Button>
            <Button className="btn btn_primary">Export CSV</Button>
            <Button
              className="btn btn_primary"
              onClick={() => navigate("/add-product")}
            >
              <AddIcon /> Add Products
            </Button>
          </div>
        </div>

        <TableContainer className="table_container" sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product Detail</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Price</TableCell>

                {/* ⭐ NEW HEADER */}
                <TableCell>No. of Questions</TableCell>

                <TableCell>Status</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredProducts.map((item, index) => (
                <TableRow key={index} hover>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <Box className="user_block click_action">
                      <figure>
                        <img src={item.image} alt={item.name} />
                      </figure>
                      <p>
                        <b>{item.name}</b>
                      </p>
                      {item.badge && (
                        <span className="sidebar_badge">{item.badge}</span>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.questions}</TableCell>
                  <TableCell>
                    <SwitchToggle />
                  </TableCell>

                  <TableCell>{item.createdDate}</TableCell>

                  <TableCell>
                    <Box className="table_actions v2">
                      <IconButton onClick={() => navigate('/manage-products/view')}>
                        <img src="/static/images/eye_icon.svg" alt="View" />
                      </IconButton>

                      <IconButton onClick={() => navigate('/add-product')}>
                        <img src="/static/images/edit2_icon.svg" alt="Edit" />
                      </IconButton>

                      <IconButton>
                        <img
                          src="/static/images/trash2_icon.svg"
                          alt="Delete"
                        />  
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ManageProducts;
