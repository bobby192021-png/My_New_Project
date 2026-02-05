import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import SwitchToggle from "../../components/SwitchToggle";
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const CampaignList = () => {
  const navigate = useNavigate(); 

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Diwali Mega Sale",
      type: "Discount",
      discountType: "Percentage",
      discountValue: "15%",
      startDate: "20 Nov 2025",
      endDate: "30 Nov 2025",
      minPurchase: "₹500",
      usageLimit: "100",
      createdDate: "10 Nov 2025",
      status: true,
    },
    {
      id: 2,
      name: "Free Shipping Weekend",
      type: "Free Shipping",
      discountType: "-",
      discountValue: "-",
      startDate: "15 Dec 2025",
      endDate: "17 Dec 2025",
      minPurchase: "-",
      usageLimit: "Unlimited",
      createdDate: "05 Dec 2025",
      status: false,
    },
  ];

  return (
    <>
      <div className="main_title">
        <h1>Marketing Suite</h1>
        <p>
          <button onClick={() => navigate("/dashboard")}>Dashboard</button> - Marketing Suite
        </p>
      </div>

      {/* Stats boxes can remain unchanged */}
      <div className="stats_boxes gap_m">
        <a href="/manage-users" className="cards">
          <h2>AED 62,037</h2>
          <p>Total Revenue (30d)</p>
          <figure className="sucess">
            <img src="/static/images/bag.svg" alt="Users" />
          </figure>
        </a>

        <a className="cards" href="/manage-users">
          <figure className="active_order">
            <img src="/static/images/active_order.svg" alt="Active Users" />
          </figure>
          <h2>91</h2>
          <p>Total Orders (30d)</p>
        </a>

        <div className="cards">
          <figure className="warning">
            <img src="/static/images/reward_icon.svg" alt="Revenue" />
          </figure>
          <h2>3,468</h2>
          <p>Store Views (30d)</p>
        </div>

        <div className="cards">
          <figure className="blue">
            <img src="/static/images/star.svg" alt="Revenue" />
          </figure>
          <h2>3.3%</h2>
          <p>Conversion Rate</p>
        </div>
      </div>

      <ul className="add_campaign">
        <li className="one" onClick={()=> navigate("add")}>
          <AddIcon />
          <h3>Create Campaign</h3>
          <p>Launch promotions and boost sales</p>
        </li>
        <li className="two" onClick={()=> navigate("/revenue")}>
          <AnalyticsIcon />
          <h3>View Analytics</h3>
          <p>Deep dive into your performance</p>
        </li>

      </ul>

      {/* Campaign Table */}
      <div className="cards mt_20">
        <div className="table_header">
          <div className="left_s">
            <SearchBar
              searchTerm={""}
              setDebouncedSearchTerm={() => { }}
              placeholder="Search campaigns..."
            />
          </div>
         
        </div>

        <TableContainer className="table_container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No</TableCell>
                <TableCell>Campaign Name</TableCell>
                <TableCell>Campaign Type</TableCell>
                <TableCell>Discount Type</TableCell>
                <TableCell>Discount Value</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Min Purchase</TableCell>
                <TableCell>Usage Limit</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {campaigns.map((item, index) => (
                <TableRow hover key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.discountType}</TableCell>
                  <TableCell>{item.discountValue}</TableCell>
                  <TableCell>{item.startDate}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
                  <TableCell>{item.minPurchase}</TableCell>
                  <TableCell>{item.usageLimit}</TableCell>
                  <TableCell>{item.createdDate}</TableCell>
                  <TableCell>
                    <SwitchToggle />
                  </TableCell>
                  <TableCell>
                    <div className="table_actions v2">
                      <IconButton onClick={() => navigate("/marketing/view")}>
                        <img src="/static/images/eye_icon.svg" alt="View" />
                      </IconButton>
                  
                      <IconButton>
                        <img src="/static/images/trash2_icon.svg" alt="Delete" />
                      </IconButton>
                    </div>
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

export default CampaignList;
