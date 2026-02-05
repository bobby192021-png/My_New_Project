import { PropsWithoutRef, useState, useEffect } from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  IconButton,
  Tooltip,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from "@mui/icons-material/Category";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SIDEBAR_WIDTH } from "../constants";

// interface Props {
//   mobileOpen: boolean;
//   handleSidebarToggle: () => void;
// }

export default function Sidebar({
  mobileOpen,
  handleSidebarToggle,
}) {
  // ⭐ ALL DROPDOWN STATES (one for each group)
  const [openProductMenu, setOpenProductMenu] = useState(false);
  const [openMarketingMenu, setOpenMarketingMenu] = useState(false);
  const [openCustomerMenu, setOpenCustomerMenu] = useState(false);
  const [openComplianceMenu, setOpenComplianceMenu] = useState(false);
  const [openPurchaseMenu, setOpenPurchaseMenu] = useState(false);
  const [openSupportMenu, setOpenSupportMenu] = useState(false);
  const [openSettingsMenu, setOpenSettingsMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isBelow992 = useMediaQuery("(max-width:992px)");

  // ⭐ Close ALL dropdowns
  const closeAllDropdowns = () => {
    setOpenProductMenu(false);
    setOpenMarketingMenu(false);
    setOpenCustomerMenu(false);
    setOpenComplianceMenu(false);
    setOpenPurchaseMenu(false);
    setOpenSupportMenu(false);
    setOpenSettingsMenu(false);
  };

  // Close dropdown & navigate
  const handleNavClick = (path) => {
    closeAllDropdowns();
    navigate(path);
    if (isBelow992) handleSidebarToggle();
  };

  // ⭐ Utility → close others except the opened one
  const closeOthers = (open) => {
    if (open !== "product") setOpenProductMenu(false);
    if (open !== "marketing") setOpenMarketingMenu(false);
    if (open !== "customer") setOpenCustomerMenu(false);
    if (open !== "compliance") setOpenComplianceMenu(false);
    if (open !== "purchase") setOpenPurchaseMenu(false);
    if (open !== "support") setOpenSupportMenu(false);
    if (open !== "settings") setOpenSettingsMenu(false);
  };

  // ⭐ Dropdown handlers
  const handleProductClick = () => {
    setOpenProductMenu(!openProductMenu);
    closeOthers("product");
  };

  const handleMarketingClick = () => {
    setOpenMarketingMenu(!openMarketingMenu);
    closeOthers("marketing");
  };

  const handleCustomerClick = () => {
    setOpenCustomerMenu(!openCustomerMenu);
    closeOthers("customer");
  };

  const handleComplianceClick = () => {
    setOpenComplianceMenu(!openComplianceMenu);
    closeOthers("compliance");
  };

  const handlePurchaseClick = () => {
    setOpenPurchaseMenu(!openPurchaseMenu);
    closeOthers("purchase");
  };

  const handleSupportClick = () => {
    setOpenSupportMenu(!openSupportMenu);
    closeOthers("support");
  };

  const handleSettingsClick = () => {
    setOpenSettingsMenu(!openSettingsMenu);
    closeOthers("settings");
  };

  // ⭐ Auto-open matching dropdown using route
  useEffect(() => {
    // closeAllDropdowns();

    if (location.pathname.startsWith("/manage-")) 
        // setOpenProductMenu(true);

    if (
      location.pathname === "/customer-support" ||
      location.pathname === "/admin-support"
    ) {
    //   setOpenSupportMenu(true);
    }

    if (
      location.pathname === "/my-orders" ||
      location.pathname === "/services" ||
      location.pathname === "/products"
    ) {
    //   setOpenPurchaseMenu(true);
    }
  }, [location.pathname]);

  // Drawer Content
  const drawer = (
    <>
      <Toolbar className="sidebar-logo" sx={{ position: "relative" }}>
        <a
          href="/dashboard"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("/dashboard");
          }}
          className="logo_link web"
        >
          <figure>
            <img src="/static/images/logo.png" alt="Bouteek Logo" />
          </figure>
        </a>

        <a
          href="/dashboard"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("/dashboard");
          }}
          className="logo_link mobile"
        >
          <figure>
            <img src="/static/images/logo_small.png" alt="Bouteek Logo" />
          </figure>
        </a>

        <IconButton
          sx={{
            display: { xs: "block", lg: "none" },
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          onClick={handleSidebarToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <List sx={{ flexGrow: 1 }} className="sidebr-lst">
        {/* Dashboard */}
        <Tooltip title="Dashboard" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/dashboard"}
            onClick={() => handleNavClick("/dashboard")}
          >
            <ListItemIcon>
              <img src="/static/images/dashboard_icon.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Dashboard" />
          </ListItemButton>
        </Tooltip>

        {/* Product Management */}
        <ListItemButton className="lst-itm" onClick={handleProductClick}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText className="lstitm-txt" primary="Product Management" />
          {openProductMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openProductMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/manage-products"}
              onClick={() => handleNavClick("/manage-products")}
            >
              <ListItemText primary="Manage Products" /> <span className="sidebar_badge">10</span>
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/manage-inventory"}
              onClick={() => handleNavClick("/manage-inventory")}
            >
              <ListItemText primary="Inventory Management" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Order Management */}
        <Tooltip title="Order Management" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/order-management"}
            onClick={() => handleNavClick("/order-management")}
          >
            <ListItemIcon>
              <img src="/static/images/logs_icon.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Order Management" />
          </ListItemButton>
        </Tooltip>

        {/* Marketing Suite */}
        <ListItemButton className="lst-itm" onClick={handleMarketingClick}>
          <ListItemIcon>
            <img src="/static/images/marketing.svg" alt="" />
          </ListItemIcon>
          <ListItemText className="lstitm-txt" primary="Marketing Suite" />
          {openMarketingMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openMarketingMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/marketing"}
              onClick={() => handleNavClick("/marketing")}
            >
              <ListItemText primary="Marketing tools" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/ai-insights"}
              onClick={() => handleNavClick("/ai-insights")}
            >
              <ListItemText primary="AI Growth Planner" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Revenue */}
        <Tooltip title="Analytics & AI Insights" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/revenue"}
            onClick={() => handleNavClick("/revenue")}
          >
            <ListItemIcon>
              <img src="/static/images/revenue_icon.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText
              className="lstitm-txt"
              primary="Analytics & AI Insights"
            />
          </ListItemButton>
        </Tooltip>

        {/* Subscription */}
        <Tooltip title="Subscription Plans" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/subscription"}
            onClick={() => handleNavClick("/subscription")}
          >
            <ListItemIcon>
              <img src="/static/images/subscription.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Subscription Plans" />
          </ListItemButton>
        </Tooltip>

        {/* Finances */}
        <Tooltip title="My Finances" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/finances"}
            onClick={() => handleNavClick("/finances")}
          >
            <ListItemIcon>
              <img src="/static/images/finance.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="My Finances" />
          </ListItemButton>
        </Tooltip>
        {/* Finances */}
        <Tooltip title="Transactions" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/transactions"}
            onClick={() => handleNavClick("/transactions")}
          >
            <ListItemIcon>
              <img src="/static/images/transaction.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Transactions" />
          </ListItemButton>
        </Tooltip>

        {/* Customers & Communication */}
        <ListItemButton className="lst-itm" onClick={handleCustomerClick}>
          <ListItemIcon>
            <img src="/static/images/communication.svg" alt="icon" />
          </ListItemIcon>
          <ListItemText
            className="lstitm-txt"
            primary="Customers & Communication"
          />
          {openCustomerMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openCustomerMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/Manage-chat"}
              onClick={() => handleNavClick("/Manage-chat")}
            >
              <ListItemText primary="Chat with Customers" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/customer-support"}
              onClick={() => handleNavClick("/customer-support")}
            >
              <ListItemText primary="Customer Support" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/ratings"}
              onClick={() => handleNavClick("/ratings")}
            >
              <ListItemText primary="Reviews & Ratings" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Store Management */}
        <Tooltip title="Store Management" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/store-management"}
            onClick={() => handleNavClick("/store-management")}
          >
            <ListItemIcon>
              <img src="/static/images/store-management.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Store Management" />
          </ListItemButton>
        </Tooltip>

        {/* Store Branding */}
        <Tooltip title="Store Branding" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/store-branding"}
            onClick={() => handleNavClick("/store-branding")}
          >
            <ListItemIcon>
              <img src="/static/images/store_icon.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Store Branding" />
          </ListItemButton>
        </Tooltip>

        {/* Compliance & Documents */}
        <ListItemButton className="lst-itm" onClick={handleComplianceClick}>
          <ListItemIcon>
            <img src="/static/images/documents.svg" alt="" />
          </ListItemIcon>
          <ListItemText
            className="lstitm-txt"
            primary="Compliance & Documents"
          />
          {openComplianceMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openComplianceMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/license"}
              onClick={() => handleNavClick("/license")}
            >
              <ListItemText primary="Trade License" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/compliance"}
              onClick={() => handleNavClick("/compliance")}
            >
              <ListItemText primary="Compliance Status" />
            </ListItemButton>


          </List>
        </Collapse>

        {/* Journal Feature Article */}
        <Tooltip title="Journal Feature Article" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/blogs"}
            onClick={() => handleNavClick("/blogs")}
          >
            <ListItemIcon>
              <img src="/static/images/blogs.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText
              className="lstitm-txt"
              primary="Journal Feature Article"
            />
          </ListItemButton>
        </Tooltip>

        {/* Questions & Answers */}
        {/* <Tooltip title="Questions and answers" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/ques-ans"}
            onClick={() => handleNavClick("/ques-ans")}
          >
            <ListItemIcon>
              <img src="/static/images/questions.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Questions and answers" />
          </ListItemButton>
        </Tooltip> */}
        <Tooltip title="Referral" placement="right">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/referral"}
            onClick={() => handleNavClick("/referral")}
          >
            <ListItemIcon>
              <img src="/static/images/referral.svg" alt="Icon" />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Referral" />
          </ListItemButton>
        </Tooltip>

        {/* Service Booking */}
        <ListItemButton className="lst-itm" onClick={handlePurchaseClick}>
          <ListItemIcon>
            <img src="/static/images/service.svg" alt="Icon" />
          </ListItemIcon>
          <ListItemText className="lstitm-txt" primary="Service Booking" />
          {openPurchaseMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openPurchaseMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/services"}
              onClick={() => handleNavClick("/services")}
            >
              <ListItemText primary="Services" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/my-orders"}
              onClick={() => handleNavClick("/my-orders")}
            >
              <ListItemText primary="My Service Booking" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Support Management */}
        <ListItemButton className="lst-itm" onClick={handleSupportClick}>
          <ListItemIcon>
            <img src="/static/images/support_icon.svg" alt="Icon" />
          </ListItemIcon>
          <ListItemText className="lstitm-txt" primary="Support Management" />
          {openSupportMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openSupportMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/admin-support"}
              onClick={() => handleNavClick("/admin-support")}
            >
              <ListItemText primary="Admin Support" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Settings & Account */}
        <ListItemButton className="lst-itm" onClick={handleSettingsClick}>
          <ListItemIcon>
            <img src="/static/images/settings.svg" alt="Icon" />
          </ListItemIcon>
          <ListItemText className="lstitm-txt" primary="Settings & Account" />
          {openSettingsMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openSettingsMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/manage-subadmin"}
              onClick={() => handleNavClick("/manage-subadmin")}
            >
              <ListItemText primary="Team Members" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/settings"}
              onClick={() => handleNavClick("/settings")}
            >
              <ListItemText primary="My Store Status" />
            </ListItemButton>
            {/* <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/ai-token"}
              onClick={() => handleNavClick("/ai-token")}
            >
              <ListItemText primary="AI Token Utilization" />
            </ListItemButton> */}
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/my-subscription"}
              onClick={() => handleNavClick("/my-subscription")}
            >
              <ListItemText primary="My Subscription and Ai Tokens" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/payment-preferences"}
              onClick={() => handleNavClick("/payment-preferences")}
            >
              <ListItemText primary="Payment Preferences" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/terms"}
              onClick={() => handleNavClick("/terms")}
            >
              <ListItemText primary="Terms & Conditions" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/faq"}
              onClick={() => handleNavClick("/faq")}
            >
              <ListItemText primary="FAQs" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={location.pathname === "/privacy"}
              onClick={() => handleNavClick("/privacy")}
            >
              <ListItemText primary="Privacy Policies" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: mobileOpen ? SIDEBAR_WIDTH : 0,
        transition: "width 0.3s",
        overflowX: "hidden",
      }}
      className={mobileOpen ? "sidebar-main-div active" : "sidebar-main-div"}
    >
      <Drawer
        className="sidebar_drawer"
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            width: SIDEBAR_WIDTH,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
