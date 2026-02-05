import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Select,
  MenuItem,
  Tooltip,
  Divider,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import SearchBar from "../../components/SearchBar";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

const rows = [
  {
    id: "Order_001",
    customerName: "Aman Verma",
    customerPhone: "+91 9876501234",
    orderDateTime: "02 August 2025, 09:30 AM",
    amount: "SAR 120.00",
    method: "Card",
    status: "Pending",
    category: "Electronics",
    subCategory: "Earphones",
    quantity: 1,
    expectedDelivery: "2025-10-17",
    notes: "-",
  },
  {
    id: "Order_002",
    customerName: "Rahul Mehta",
    customerPhone: "+91 9812345678",
    orderDateTime: "03 August 2025, 12:15 PM",
    amount: "SAR 250.00",
    method: "Cash on Delivery",
    status: "Accept",
    category: "Clothing",
    subCategory: "T-Shirts",
    quantity: 3,
    expectedDelivery: "2025-10-16",
    notes: "Deliver after 5 PM",
  },
  {
    id: "Order_003",
    customerName: "Priya Singh",
    customerPhone: "+91 9876000000",
    orderDateTime: "04 August 2025, 01:45 PM",
    amount: "SAR 500.00",
    method: "Online",
    status: "Ongoing",
    category: "Accessories",
    subCategory: "Watches",
    quantity: 1,
    expectedDelivery: "2025-10-18",
    notes: "Gift wrap item",
  },
  {
    id: "Order_004",
    customerName: "Alice Johnson",
    customerPhone: "+91 9876543210",
    orderDateTime: "02 August 2025, 03:30 PM",
    amount: "SAR 199.99",
    method: "Card",
    status: "Completed",
    category: "Clothing",
    subCategory: "Jackets",
    quantity: 2,
    expectedDelivery: "2025-10-15",
    notes: "Gift wrap the item",
  },
  {
    id: "Order_005",
    customerName: "Ravi Sharma",
    customerPhone: "+91 9821012345",
    orderDateTime: "05 August 2025, 10:45 AM",
    amount: "SAR 299.50",
    method: "Cash on Delivery",
    status: "Cancelled",
    category: "Electronics",
    subCategory: "Headphones",
    quantity: 1,
    expectedDelivery: "2025-10-12",
    notes: "-",
  },
];

const OrderManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedOrder(null);
  };
  const [valueTabs, setValueTabs] = useState (0);
  const navigate = useNavigate();

  const handleChangeTabs = (event , newValue ) => {
    setValueTabs(newValue);
  };

  const CustomTabPanel  = ({
    children,
    value,
    index,
  }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );

  const a11yProps = (index ) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const tabStatus = [
    "All",
    "Pending",
    "Accept",
    "Ongoing",
    "Completed",
    "Cancelled",

  ];

  const filteredRows =
    tabStatus[valueTabs] === "All"
      ? rows
      : rows.filter((row) => row.status === tabStatus[valueTabs]);

  return (
    <>
      <div className="main_title">
        <h1>Order Management</h1>
      </div>

      <div className="stats_boxes gap_m">
        <a className="cards">
          <h2>142 Orders (This Month)</h2>
          <p>Total Orders</p>

        </a>

        <a className="cards">

          <h2>12 Pending</h2>
          <p>Pending Fulfillment</p>
        </a>

        <a className="cards">

          <h2>8 In Transit</h2>
          <p>Shipped / In Transit</p>
        </a>

        <a className="cards">

          <h2>118 Delivered</h2>
          <p>Delivered / Completed</p>
        </a>

        <a className="cards">

          <h2>AED 2,450</h2>
          <p>Awaying Payout</p>
        </a>

        <a className="cards">

          <h2>4 Orders</h2>
          <p>Cancelled / Returned</p>
        </a>
      </div>




      <Box className="custom_tabs1" sx={{ width: "100%", mt: 2 }}>
        <Tabs
          value={valueTabs}
          onChange={handleChangeTabs}
          aria-label="order management tabs"
          className="custom_tabs_links"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile

        >
          {tabStatus.map((status, index) => (
            <Tab key={status} label={status} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

      <div className="cards order_wrap">
        <div className="table_header">
          <div className="left_s">
            <SearchBar
              searchTerm={""}
              setDebouncedSearchTerm={() => { }}
              placeholder="Search..."
            />
            <div className="form">
              <div className="control_group">
                <Select fullWidth value={"default"}>
                  <MenuItem disabled value="default">
                    Payment Type
                  </MenuItem>
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className="right_s">
            <Button className="btn btn_primary" onClick={() => navigate("/")}>
              <DownloadIcon /> Export CSV
            </Button>
          </div>
        </div>

        {tabStatus.map((status, index) => (
          <CustomTabPanel key={index} value={valueTabs} index={index}>
            <TableContainer className="table_container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer Detail</TableCell>
                    <TableCell>Order Date/Time</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Method</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Sub-Category</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Expected Delivery</TableCell>
                    <TableCell>Notes</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row) => (
                      <TableRow hover key={row.id}>
                        <TableCell className="cr_pt" onClick={() => navigate("view")}>#{row.id}</TableCell>
                        <TableCell>
                          <strong>{row.customerName}</strong>
                          <br />
                          <span>{row.customerPhone}</span>
                        </TableCell>
                        <TableCell>{row.orderDateTime}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                        <TableCell>{row.method}</TableCell>
                        <TableCell className="form">
                          <Select size="small" value={row.status}>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Accept">Accept</MenuItem>
                            <MenuItem value="Ongoing">Ongoing</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                          </Select>
                        </TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>{row.subCategory}</TableCell>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{row.expectedDelivery}</TableCell>
                        <TableCell>{row.notes}</TableCell>
                        <TableCell>
                          <Box className="table_actions v2">
                            <Tooltip title="Generate Reports">
                              <IconButton onClick={() => handleViewOrder(row)}>
                                <SystemUpdateAltIcon color="action" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="View">
                              <IconButton onClick={() => navigate("view")}>
                                <VisibilityIcon color="action" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={12} align="center">
                        No orders found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CustomTabPanel>
        ))}
      </div>

      {/* order drawer */}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{ sx: { width: 400 } }}
      >
        {selectedOrder && (
          <Box p={3}>
            <h2>Order Details</h2>
            <Divider sx={{ mb: 2 }} />

            <div
              className=" p-drawer-content"
            >
              <div className="order_detail_drawer view_page">
                {/* Order Header */}
                <div className="border_box">
                  <div className="head hd_5">
                    <h2>#Order_001</h2>
                    <span className="status_btn c_warning">Pending</span>
                  </div>
                  <div className="body">
                    <div className="gap_p">
                      <div className="w_100 flex">
                        <h6>Order Date/Time</h6>
                        <p>02 August 2025, 03:30 PM</p>
                      </div>
                      <div className="w_100 flex">
                        <h6>Order Type</h6>
                        <p>Pickup</p>
                      </div>
                      <div className="w_100 flex">
                        <hr />
                      </div>
                      <div className="w_100">
                        <h6>Pickup Date & Time</h6>
                        <p>06 August 2025, 03:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pickup and Delivery Options */}
                <div className="border_box">
                  <div className="head hd_5">
                    <h2>Pickup and Deliver Options</h2>
                  </div>
                  <div className="body">
                    <div className="gap_p v2">
                      <div className="w_100">
                        <h6>Pickup Store</h6>
                        <p>Saginaw Supercenter</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items Details */}
                <div className="border_box">
                  <div className="head hd_5">
                    <h2>Items Details</h2>
                  </div>
                  <div className="body">
                    <div className="product_box">
                      <figure>
                        <img
                          alt="place_img"
                          src="static/images/placeholder.png"
                        />
                      </figure>
                      <div className="info">
                        <div className="hd_6">
                          <h3>Men Sports Shoes</h3>
                          <p>
                            <strong className="c_success">$1200</strong>
                            <span>x1</span>
                          </p>
                        </div>
                        <div className="gap_p">
                          <div className="w_100 flex">
                            <h6>Colour:</h6>
                            <p>Red</p>
                          </div>
                          <div className="w_100 flex">
                            <h6>Size:</h6>
                            <p>L</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product_box">
                      <figure>
                        <img
                          alt="place_img"
                          src="static/images/placeholder.png"
                        />
                      </figure>
                      <div className="info">
                        <div className="hd_6">
                          <h3>Men Sports Shoes</h3>
                          <p>
                            <strong className="c_success">$1200</strong>
                            <span>x1</span>
                          </p>
                        </div>
                        <div className="gap_p">
                          <div className="w_100 flex">
                            <h6>Colour:</h6>
                            <p>Red</p>
                          </div>
                          <div className="w_100 flex">
                            <h6>Size:</h6>
                            <p>L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Details */}
                <div className="border_box">
                  <div className="head hd_5">
                    <h2>User Details</h2>
                  </div>
                  <div className="body">
                    <div className="user_block big">
                      <figure>
                        <img alt="place_img" src="static/images/admin_icon.png" />
                      </figure>
                      <p>
                        <b>Alice Johnson</b>
                        <span>alice.johnson@example.com</span>
                        <span>+91 9876543210</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Driver Details */}
                <div className="border_box">
                  <div className="head hd_5">
                    <h2>Driver Details</h2>
                  </div>
                  <div className="body">
                    <div className="user_block big">
                      <figure>
                        <img alt="place_img" src="static/images/admin_icon.png" />
                      </figure>
                      <p>
                        <b>Rajesh Kumar</b>
                        <span>rajesh.kumar@example.com</span>
                        <span>+91 9876543210</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Billing Summary */}
                <div className="border_box bill_summary">
                  <div className="head hd_5">
                    <h2>Billing Summary</h2>
                    <p>
                      <span className="c_primary">Paid by Card</span>
                    </p>
                  </div>
                  <div className="body">
                    <div className="gap_p">
                      <div className="w_100 ">
                        <h6>Subtotal</h6>
                        <p>$849,159</p>
                      </div>
                      <div className="w_100 ">
                        <h6>Total discount</h6>
                        <p>-$36,808</p>
                      </div>
                      <div className="w_100 ">
                        <h6>Taxes and Fees</h6>
                        <p>$20,000</p>
                      </div>
                      <div className="w_100 ">
                        <h6>Delivery</h6>
                        <p>$25,000</p>
                      </div>
                      <div className="w_100 ">
                        <h6>
                          <span className="c_warning">Promo</span>
                        </h6>
                        <p>
                          <span className="c_warning">-$15,000</span>
                        </p>
                      </div>
                      <div className="w_100 ">
                        <hr />
                      </div>
                      <div className="w_100 fs_big ">
                        <h6>Total</h6>
                        <p>
                          <strong className="c_success">$879,159</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Divider sx={{ my: 2 }} />

            <Button
              fullWidth
              className="btn_primary"
              onClick={handleCloseDrawer}
            >
              Close
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default OrderManagement;
