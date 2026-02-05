import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
  TextField,
  Tab,
  Tabs,
  Typography,
  Card,
  Divider,
  IconButton,
  
} from "@mui/material";
import SwitchToggle from "../../components/SwitchToggle";
import SearchBar from "../../components/SearchBar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { CartesianGrid, Line, LineChart, ResponsiveContainer,Tooltip, XAxis, YAxis } from "recharts";
const ManageInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tab, setTab] = useState(0);
  const handleTabChange = (event , newValue) => {
    setTab(newValue);
  };

  // ---------------- INVENTORY MAIN TABLE ----------------
  const products = [
    {
      id: "#PROD_001",
      name: "Wireless Mouse",
      variant: "Variant 1",
      price: "$99.99",
      quantity: 50,
      purchaseLimit: 10,
      category: "Electronics",
      subCategory: "Accessories",
      threshold: 5,
      cost: "$60",
      lastUpdated: "12 Feb 2025",
      aiTag: "High Demand ⚡",
      image: "/static/images/placeholder.png",
    },
    {
      id: "#PROD_002",
      name: "Gaming Keyboard",
      variant: "Variant 2",
      price: "$149.99",
      quantity: 8,
      purchaseLimit: 10,
      category: "Electronics",
      subCategory: "Accessories",
      threshold: 5,
      cost: "$90",
      lastUpdated: "10 Feb 2025",
      aiTag: "Low Performer 📉",
      image: "/static/images/placeholder.png",
    },
    {
      id: "#PROD_003",
      name: "Bluetooth Speaker",
      variant: "Variant 1",
      price: "$79.99",
      quantity: 0,
      purchaseLimit: 10,
      category: "Electronics",
      subCategory: "Audio Devices",
      threshold: 5,
      cost: "$45",
      lastUpdated: "08 Feb 2025",
      aiTag: "Low Performer 📉",
      image: "/static/images/placeholder.png",
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------------- AI RESTOCK SUGGESTIONS ----------------
  const restockSuggestions = [
    {
      id: "#PROD_001",
      product: "Wireless Mouse",
      currentStock: 50,
      recommended: "Restock in 5 days: Suggest 20 units",
      reason: "High demand spike this month",
    },
    {
      id: "#PROD_002",
      product: "Gaming Keyboard",
      currentStock: 8,
      recommended: "Restock in 2 days: Suggest 60 units",
      reason: "Low stock + trending search volume",
    },
    {
      id: "#PROD_003",
      product: "Bluetooth Speaker",
      currentStock: 0,
      recommended: "Immediate restock: Suggest 80 units",
      reason: "Frequently added to cart recently",
    },
  ];

  // ---------------- TOP 5 FAST MOVERS ----------------
  const fastMovers = [
    { id: "#PROD_001", name: "Wireless Mouse", sold: 420 },
    { id: "#PROD_002", name: "Gaming Keyboard", sold: 380 },
    { id: "#PROD_010", name: "USB-C Charger", sold: 275 },
    { id: "#PROD_003", name: "Bluetooth Speaker", sold: 250 },
    { id: "#PROD_008", name: "Laptop Stand", sold: 230 },
  ];

  // ---------------- ITEMS LEFT IN CART ----------------
  const cartItems = [
    { id: "#PROD_001", product: "Wireless Mouse", users: 21 },
    { id: "#PROD_002", product: "Gaming Keyboard", users: 15 },
    { id: "#PROD_003", product: "Bluetooth Speaker", users: 11 },
  ];

  // ---------------- CUSTOMER FEEDBACK SUMMARY ----------------
  const feedbackSummary = [
    {
      id: "#PROD_001",
      customer: "John Doe",
      product: "Wireless Mouse",
      review: "Great product but packaging could be better.",
      sentiment: "Frequent mention: packaging quality",
    },
    {
      id: "#PROD_002",
      customer: "Aisha Khan",
      product: "Gaming Keyboard",
      review: "Typing feels amazing!",
      sentiment: "Positive: praised build quality",
    },
    {
      id: "#PROD_003",
      customer: "Bluetooth Speaker",
      product: "Bluetooth Speaker",
      review: "Sound is decent, battery life average.",
      sentiment: "Neutral: mentions battery life",
    },
  ];
  const demandForecastData = [
    { day: "Mon", sales: 40 },
    { day: "Tue", sales: 52 },
    { day: "Wed", sales: 48 },
    { day: "Thu", sales: 70 },
    { day: "Fri", sales: 90 },
    { day: "Sat", sales: 110 },
    { day: "Sun", sales: 65 },
  ];
  return (
    <>
      <div className="main_title">
        <h1>Inventory Management</h1>
      </div>

      {/* -------------------- STAT CARDS -------------------- */}
      <div className="stats_boxes gap_m">
        <a href="/manage-products" className="cards">
          <h2>42 Active Products</h2>
          <p>Total Products</p>
          <figure className="sucess">
            <img src="/static/images/bag.svg" alt="Total Products" />
          </figure>
          <div className="rating_box">
            <p>
              <span>
                <ArrowUpwardIcon />
                +8
              </span>
              this month
            </p>
          </div>
        </a>

        <div className="cards">
          <figure className="blue">
            <img src="/static/images/star.svg" alt="Low Stock" />
          </figure>
          <h2>7 Low Stock</h2>
          <p>Low Stock Alerts</p>
          <div className="rating_box">
            <p>
              <span>
                <ArrowUpwardIcon />
                +2
              </span>
              this month
            </p>
          </div>
        </div>

        <div className="cards">
          <figure className="sucess">
            <img src="/static/images/reward_icon.svg" alt="Inventory Value" />
          </figure>
          <h2>AED 12,450</h2>
          <p>Inventory Value</p>
          <div className="rating_box">
            <p>
              <span>
                <ArrowUpwardIcon />
                +5%
              </span>
              this month
            </p>
          </div>
        </div>

        {/* ✅ New Card: In Stock */}
        <div className="cards">
          <figure className="sucess">
            <img src="/static/images/bag.svg" alt="In Stock" />
          </figure>
          <h2>37 In Stock</h2>
          <p>Total Products Currently Available</p>
          <div className="rating_box">
            <p>
              <span>
                <ArrowUpwardIcon />
                +3
              </span>
              this month
            </p>
          </div>
        </div>

        {/* ✅ New Card: Out of Stock */}
        <div className="cards">
          <figure className="blue">
            <img src="/static/images/bag.svg" alt="Out of Stock" />
          </figure>
          <h2>5 Out of Stock</h2>
          <p>Products With Zero Quantity</p>
          <div className="rating_box">
            <p>
              <span>
                <ArrowUpwardIcon />
                +1
              </span>
              this month
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------- TABS ----------------------- */}
      <div className="tabs_container mt_20">
        <Box className="custom_tabs1">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="primary"
            className="custom_tabs_links"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ mb: 2 }}
          >
            <Tab label="Inventory" />
            <Tab label="AI Insights" />
            <Tab label="Stock History" />
          </Tabs>
        </Box>
      </div>

      {/* -------------------- TAB 0 : INVENTORY -------------------- */}
      {tab === 0 && (
        <div className="cards ">
          <div className="table_header">
            <div className="left_s">
              <SearchBar
                searchTerm={searchTerm}
                setDebouncedSearchTerm={setSearchTerm}
                placeholder="Search..."
              />
            </div>
            <div className="right_s">
              <Button className="btn btn_primary">Export CSV</Button>
            </div>
          </div>

          <TableContainer className="table_container" sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No</TableCell>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Product Details</TableCell>
                  <TableCell>Variant Name</TableCell>

                  <TableCell>Selling Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Purchase Limit</TableCell>
                  <TableCell>Out Of Stock</TableCell>

                  <TableCell>Category</TableCell>
                  <TableCell>Sub-category</TableCell>
                  <TableCell>Stock Threshold</TableCell>
                  <TableCell>Cost</TableCell>
                  <TableCell>Last Updated</TableCell>
                  <TableCell>AI Recommendation</TableCell>

                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredProducts.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.id}</TableCell>

                    <TableCell>
                      <Box className="user_block">
                        <figure>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "4px",
                              objectFit: "cover",
                              background: "#f5f5f5",
                            }}
                          />
                        </figure>
                        <p>
                          <b>{item.name}</b>
                        </p>
                      </Box>
                    </TableCell>

                    <TableCell>{item.variant}</TableCell>
                    <TableCell>
                      <b>{item.price}</b>
                    </TableCell>

                    <TableCell className="form">
                      <TextField placeholder={String(item.quantity)} />
                    </TableCell>

                    <TableCell className="form">
                      <TextField placeholder={String(item.purchaseLimit)} />
                    </TableCell>

                    <TableCell>
                      <SwitchToggle defaultChecked={item.quantity > 0} />
                    </TableCell>

                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.subCategory}</TableCell>
                    <TableCell>{item.threshold}</TableCell>
                    <TableCell>{item.cost}</TableCell>
                    <TableCell>{item.lastUpdated}</TableCell>
                    <TableCell>{item.aiTag}</TableCell>

                    <TableCell>
                      <div className="tbl_action">
                        <Button
                          variant="contained"
                          className="btn_primary"
                          size="small"
                        >
                          Update
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {/* -------------------- TAB 1 : AI RESTOCK -------------------- */}
      {tab === 1 && (
        <div className="cards">
          {/* ------------------ CARD 1: AI Restock Suggestion ------------------ */}
          <Card
            sx={{
              borderLeft: "4px solid #D3B88C",
              padding: 2,
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ShoppingCartOutlinedIcon sx={{ color: "#D3B88C" }} />
              <Typography variant="h6" fontWeight={600}>
                AI Restock Suggestion
              </Typography>
            </Box>

            {/* --- Restock List --- */}
            <Box sx={{ mt: 2 }}>
              {[
                { item: "Traditional Abaya", days: 5, qty: 20 },
                { item: "Handcrafted Jewelry", days: 3, qty: 15 },
                { item: "Leather Sandals", days: 7, qty: 30 },
                { item: "Premium Scarf", days: 4, qty: 10 },
              ].map((s, i) => (
                <Typography key={i} sx={{ color: "#444", mb: 1 }}>
                  <b>
                    {i + 1}. {s.item}
                  </b>{" "}
                  — Restock in <b>{s.days} days</b>, Suggest:{" "}
                  <b>{s.qty} units</b>
                </Typography>
              ))}
            </Box>

            <Box sx={{ mt: 1 }}>
              <IconButton sx={{ color: "#D3B88C" }}>
                <ThumbUpAltOutlinedIcon />
              </IconButton>
              <IconButton sx={{ color: "#D3B88C" }}>
                <ThumbDownAltOutlinedIcon />
              </IconButton>
            </Box>
          </Card>

          {/* ------------------ CARD 2: AI Demand Forecast ------------------ */}
          <Card
            sx={{
              borderLeft: "4px solid #D3B88C",
              padding: 2,
              marginTop: "20px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TrendingUpOutlinedIcon sx={{ color: "#D3B88C" }} />
              <Typography variant="h6" fontWeight={600}>
                AI Demand Forecast
              </Typography>
            </Box>
 <Box sx={{ height: 220, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demandForecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#D3B88C"
                strokeWidth={3}
                dot={{ r: 4, stroke: "#8A6E45", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
            {/* Forecast data list */}
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ color: "#444", mb: 1 }}>
                📈 Expected weekly growth: <b>12–15%</b>
              </Typography>
              <Typography sx={{ color: "#444", mb: 1 }}>
                🔥 Peak demand days: <b>Thu, Fri, Sat</b>
              </Typography>
              <Typography sx={{ color: "#444", mb: 1 }}>
                🛍️ Top category this week: <b>Abayas & Accessories</b>
              </Typography>
              <Typography sx={{ color: "#444", mb: 1 }}>
                🎯 Suggested Strategy: Increase inventory buffer by <b>8%</b>.
              </Typography>
            </Box>
          </Card>

          {/* ------------------ CARD 3: FAST MOVERS VS CART ITEMS ------------------ */}
          <Card
            sx={{
              padding: 2,
              marginTop: "20px",
              border: "1px solid #D3B88C",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            }}
          >
            <Box display="flex" justifyContent="space-between">
              {/* Left list */}
              <Box width="50%">
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ color: "#D3B88C", mb: 1 }}
                >
                  Top 5 Fast Movers
                </Typography>

                {[
                  "Traditional Abaya",
                  "Designer Handbag",
                  "Handcrafted Jewelry",
                  "Silk Scarf Collection",
                  "Floral Footwear",
                ].map((item, i) => (
                  <Typography key={i} sx={{ color: "#444" }}>
                    {i + 1}. {item}
                  </Typography>
                ))}
              </Box>

              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

              {/* Right list */}
              <Box width="50%">
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ color: "#D3B88C", mb: 1 }}
                >
                  Items Left in Carts
                </Typography>

                <Typography sx={{ color: "#444" }}>
                  1. Embroidered Wallet — <b>12</b>
                </Typography>
                <Typography sx={{ color: "#444" }}>
                  2. Leather Backpack — <b>9</b>
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* ------------------ CARD 4: Feedback Summary ------------------ */}
          <Card
            sx={{
              padding: 2,
              marginTop: "20px",
              borderLeft: "4px solid #D3B88C",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ChatBubbleOutlineOutlinedIcon sx={{ color: "#D3B88C" }} />
              <Typography variant="h6" fontWeight={600}>
                Customer Feedback Summary
              </Typography>
            </Box>

            <Typography sx={{ mt: 1, fontStyle: "italic", color: "#555" }}>
              “Frequent mention: high packaging quality.”
            </Typography>
          </Card>
        </div>
      )}
      {tab === 2 && (
        <div className="cards mt_20">
          <div className="table_header">
            <div className="left_s">
              <SearchBar
                searchTerm={searchTerm}
                setDebouncedSearchTerm={setSearchTerm}
                placeholder="Search..."
              />
            </div>
            <div className="right_s">
              <Button className="btn btn_primary">Export CSV</Button>
            </div>
          </div>

          <TableContainer className="table_container" sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Upload Date & Time</TableCell>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Quantity Added</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Sub-category</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* ---------- SAMPLE DUMMY LOGS ---------- */}
                {[
                  {
                    date: "12 Feb 2025 - 10:23 AM",
                    id: "#PROD_001",
                    name: "Wireless Mouse",
                    image: "/static/images/placeholder.png",
                    qty: "+20",
                    price: "$99.99",
                    category: "Electronics",
                    sub: "Accessories",
                  },
                  {
                    date: "11 Feb 2025 - 4:45 PM",
                    id: "#PROD_003",
                    name: "Bluetooth Speaker",
                    image: "/static/images/placeholder.png",
                    qty: "+50",
                    price: "$79.99",
                    category: "Electronics",
                    sub: "Audio Devices",
                  },
                  {
                    date: "10 Feb 2025 - 2:18 PM",
                    id: "#PROD_002",
                    name: "Gaming Keyboard",
                    image: "/static/images/placeholder.png",
                    qty: "+15",
                    price: "$149.99",
                    category: "Electronics",
                    sub: "Accessories",
                  },
                ].map((log, i) => (
                  <TableRow key={i}>
                    <TableCell>{log.date}</TableCell>

                    <TableCell>{log.id}</TableCell>

                    <TableCell>{log.name}</TableCell>

                    <TableCell>
                      <img
                        src={log.image}
                        alt={log.name}
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                      />
                    </TableCell>

                    <TableCell>
                      <span
                        style={{
                          color: log.qty.includes("+") ? "green" : "red",
                          fontWeight: 600,
                        }}
                      >
                        {log.qty}
                      </span>
                    </TableCell>

                    <TableCell>{log.price}</TableCell>

                    <TableCell>{log.category}</TableCell>

                    <TableCell>{log.sub}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default ManageInventory;
