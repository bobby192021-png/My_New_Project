import React, { useState } from "react";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SwitchToggle from "../../components/SwitchToggle";
import SearchBar from "../../components/SearchBar";
import ReplyIcon from "@mui/icons-material/Reply";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }
// interface User {
//   name: string;
//   email: string;
//   phone: string;
// }

// interface SupportData {
//   id: number;
//   question: string;
//   answer?: string;
//   submittedDate: string;
//   status: "Pending" | "Resolved";
//   user: User;
// }
const ViewProduct = () => {
  const [valueTabs, setValueTabs] = useState (0);

  const handleChangeTabs = (event) => {
    setValueTabs(newValue);
  };
  const [valueTabs1, setValueTabs1] = useState(0);

  const handleChangeTabs1 = (event, newValue) => {
    setValueTabs1(newValue);
  };

  const CustomTabPanel= ({
    children,
    value,
    index,
    ...other
  }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );

  const a11yProps = (index ) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  // Dummy reviews data (replace with API data if needed)
  const reviews = [
    {
      id: 1,
      userName: "Alice Johnson",
      email: "alice.johnson@example.com",
      orderId: "#Order_0001",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, animi consectetur adipisicing elit.",
      date: "25 July 2025",
      userImage: "assets/images/profile.png",
    },
    {
      id: 2,
      userName: "Alice Johnson",
      email: "alice.johnson@example.com",
      orderId: "#Order_0002",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, animi consectetur adipisicing elit.",
      date: "25 July 2025",
      userImage: "assets/images/profile.png",
    },
    {
      id: 3,
      userName: "Alice Johnson",
      email: "alice.johnson@example.com",
      orderId: "#Order_0003",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, animi consectetur adipisicing elit.",
      date: "25 July 2025",
      userImage: "assets/images/profile.png",
    },
  ];
  const [supportData, setSupportData] = useState ([
    {
      id: 1,
      question: "Why is my order delayed?",
      submittedDate: "20 Oct 2025",
      status: "Pending",
      user: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 555 0123",
      },
    },
    {
      id: 2,
      question: "How to return the product?",
      submittedDate: "18 Oct 2025",
      status: "Resolved",
      answer: "You can return the product using the return center.",
      user: {
        name: "Sarah Wilson",
        email: "sarah@example.com",
        phone: "+91 999 333 2222",
      },
    },
  ]);

  const [replyText, setReplyText] = useState ({});

  const handleReplySubmit = (id  ) => {
    if (!replyText[id]) return;

    setSupportData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, answer: replyText[id], status: "Resolved" }
          : item
      )
    );

    setReplyText((prev) => ({ ...prev, [id]: "" }));
  };

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="main_title">
        <h1>View Product</h1>
      </div>

      <Box className="custom_tabs1" sx={{ width: "100%", mt: 2 }}>
        <Tabs
          value={valueTabs}
          onChange={handleChangeTabs}
          aria-label="view product tabs"
          className="custom_tabs_links"
        >
          <Tab label="General Details" {...a11yProps(0)} />
          <Tab label="Customer Questions" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <div className="cards">
        {/* ---------------------- TAB 1: General Details ---------------------- */}
        <CustomTabPanel value={valueTabs} index={0}>
          <div className="view_page">
            <div className="gap_p">
              <div className="w_33">
                <h6>Product ID</h6>
                <p>
                  <strong className="c_black">#PROD-001</strong>
                </p>
              </div>
              <div className="w_33">
                <h6>Product Name</h6>
                <p>Men Sports Shoes</p>
              </div>
              <div className="w_33">
                <h6>Product Category</h6>
                <p>Footwear</p>
              </div>
              <div className="w_33">
                <h6>Product Sub-Category</h6>
                <p>Shoes</p>
              </div>
              <div className="w_33">
                <h6>Brand</h6>
                <p>Nike</p>
              </div>
              <div className="w_33">
                <h6>Created Date</h6>
                <p>30 July 2025</p>
              </div>
              <div className="w_33">
                <h6>Status</h6>
                <p>
                  <SwitchToggle />
                </p>
              </div>

              <div className="w_33">
                <h6>Product Details</h6>
                <ul className="feature_lst">
                  <li>
                    <strong>Sizing:</strong> Lorem
                  </li>
                  <li>
                    <strong>Material:</strong> 42% Cotton
                  </li>
                  <li>
                    <strong>Fit:</strong> Casual Fit
                  </li>
                  <li>
                    <strong>Fabric Name:</strong> Knit
                  </li>
                </ul>
              </div>
              <div className="w_33">
                <h6>Delivery & Returns </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, id.
                </p>
              </div>
              <div className="w_100">
                <h6>Product Description</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos cum odio, sequi, possimus quibusdam voluptatum
                  adipisci cupiditate et, iure iste aliquam! Dolore, magnam
                  delectus. Temporibus distinctio id adipisci obcaecati quaerat!
                </p>
              </div>
              <div className="w_100">
                <h6>Warranty</h6>
                <p>
                  <strong>Shipping details</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ipsam alias aliquam ad earum labore quam at
                  quaerat, quo et!
                </p>
                <p>
                  <strong>Return details</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis ipsam alias aliquam ad earum labore quam at
                  quaerat, quo et!
                </p>
              </div>
            </div>

            <div className="border_box mt_20">
              <ul className="selected_varient">
                <li>
                  <strong>Colour</strong> Black
                </li>
                <li>
                  <strong>Size</strong> L
                </li>
              </ul>

              <div className="gap_p">
                <div className="w_33">
                  <h6>Variant Name</h6>
                  <p>Variant 1</p>
                </div>

                <div className="w_33">
                  <h6>Price</h6>
                  <p>$140</p>
                </div>
                <div className="w_33">
                  <h6>Discounted Price</h6>
                  <p>$120</p>
                </div>
                <div className="w_33">
                  <h6>Comission</h6>
                  <p>GST (5%)</p>
                </div>
                <div className="w_33">
                  <h6>Quantity for inventory</h6>
                  <p>100</p>
                </div>
                <div className="w_33">
                  <h6>Maximum Purchase Limit</h6>
                  <p>10</p>
                </div>

                <div className="w_100">
                  <h6>Product Images</h6>
                  <div className="gap_p">
                    {[1, 2, 3, 4, 5].map((img) => (
                      <div key={img} className="w_20">
                        <figure>
                          <img
                            alt="Product"
                            src="/static/images/placeholder.png"
                          />
                        </figure>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={valueTabs} index={1}>
          {/* Card List */}
          <Box className="custom_tabs1" sx={{ width: "100%", mt: 2 }}>
            <Tabs
              value={valueTabs1}
              onChange={handleChangeTabs1}
              aria-label="view product tabs"
              className="custom_tabs_links"
            >
              <Tab label="Pending" {...a11yProps(0)} />
              <Tab label="Answered" {...a11yProps(1)} />
            </Tabs>
          </Box>
           <CustomTabPanel value={valueTabs} index={0}>  {supportData.map((item) => (
            <Accordion key={item.id} className="qa_accordion">
              {/* ---------- ACCORDION HEADER ---------- */}
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="qa_header"
              >
                <div className="qa_header_row">
                  <AccountCircleIcon className="qa_user_icon" />
                  <div>
                    <strong>{item.user.name}</strong>
                    <p className="qa_date">{item.submittedDate}</p>
                  </div>
                </div>

                <div className="qa_question_preview">
                  <p>{item.question}</p>
                </div>
              </AccordionSummary>

              {/* ---------- ACCORDION BODY ---------- */}
              <AccordionDetails className="qa_body">
                {/* Full question */}
                <div className="qa_question_full">
                  <label>Question:</label>
                  <p>{item.question}</p>
                </div>

                {/* ---------- ANSWER IF RESOLVED ---------- */}
                {item.status === "Resolved" && (
                  <div className="qa_answer">
                    <label>Answer:</label>
                    <p>{item.answer}</p>
                  </div>
                )}

                {/* ---------- REPLY BOX IF PENDING ---------- */}
                {item.status === "Pending" && (
                  <div className="qa_reply_box">
                    <TextField
                      fullWidth
                      multiline
                      minRows={2}
                      placeholder="Type your reply..."
                    />

                    <Button
                      variant="contained"
                      className="mt_20 btn btn_primary"
                      onClick={() => handleReplySubmit(item.id)}
                      startIcon={<ReplyIcon />}
                    >
                      Submit Reply
                    </Button>
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          ))}</CustomTabPanel>
           <CustomTabPanel value={valueTabs} index={1}>  {supportData.map((item) => (
            <Accordion key={item.id} className="qa_accordion">
              {/* ---------- ACCORDION HEADER ---------- */}
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="qa_header"
              >
                <div className="qa_header_row">
                  <AccountCircleIcon className="qa_user_icon" />
                  <div>
                    <strong>{item.user.name}</strong>
                    <p className="qa_date">{item.submittedDate}</p>
                  </div>
                </div>

                <div className="qa_question_preview">
                  <p>{item.question}</p>
                </div>
              </AccordionSummary>

              {/* ---------- ACCORDION BODY ---------- */}
              <AccordionDetails className="qa_body">
                {/* Full question */}
                <div className="qa_question_full">
                  <label>Question:</label>
                  <p>{item.question}</p>
                </div>

                {/* ---------- ANSWER IF RESOLVED ---------- */}
                {item.status === "Resolved" && (
                  <div className="qa_answer">
                    <label>Answer:</label>
                    <p>{item.answer}</p>
                  </div>
                )}

                {/* ---------- REPLY BOX IF PENDING ---------- */}
                {item.status === "Pending" && (
                  <div className="qa_reply_box">
                    <TextField
                      fullWidth
                      multiline
                      minRows={2}
                      placeholder="Type your reply..."
                    />

                    <Button
                      variant="contained"
                      className="mt_20 btn btn_primary"
                      onClick={() => handleReplySubmit(item.id)}
                      startIcon={<ReplyIcon />}
                    >
                      Submit Reply
                    </Button>
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          ))}</CustomTabPanel>
        
        </CustomTabPanel>
        {/* ---------------------- TAB 2: Reviews ---------------------- */}
        <CustomTabPanel value={valueTabs} index={2}>
          <div className="table_header">
            <div className="left_s">
              <Box className="search_box">
                <SearchBar
                  searchTerm={searchTerm}
                  setDebouncedSearchTerm={setSearchTerm}
                  placeholder="Search..."
                />
              </Box>
            </div>
            <div className="right_s"></div>
          </div>
          <TableContainer className="table_container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No</TableCell>
                  <TableCell>User Details</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Review</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {reviews.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                      <div className="user_block click_action">
                        <figure>
                          <img
                            src="/static/images/user_placeholder.png"
                            alt="User"
                          />
                        </figure>
                        <p>
                          <b>{item.userName}</b>
                          {item.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <strong>{item.orderId}</strong>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Typography>{item.rating}</Typography>
                        <StarIcon sx={{ color: "#fbc02d", fontSize: 18 }} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ minWidth: 300 }}
                      className="whitespace nowrap"
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: 13 }}
                      >
                        {item.review}
                      </Typography>
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
      </div>
    </>
  );
};

export default ViewProduct;
