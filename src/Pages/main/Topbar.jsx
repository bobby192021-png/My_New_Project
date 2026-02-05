// import React, { PropsWithoutRef, useEffect, useRef, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Box,
//   Menu,
//   MenuItem,
//   Typography,
//   Button,
//   Select,
//   Badge,
//   useMediaQuery,
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import LockIcon from '@mui/icons-material/Lock';
// import PersonIcon from "@mui/icons-material/Person";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useNavigate } from "react-router-dom";
// import { SIDEBAR_WIDTH } from "../../constants";
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import MenuIcon from "@mui/icons-material/Menu";
// import StorefrontIcon from '@mui/icons-material/Storefront';
// // import SelectStore from "../Modals/select-store";
// // interface {
// //   handleSidebarToggle: () => void
// // }

// function Topbar({ handleSidebarToggle }) {
//   const navigate = useNavigate();
//   const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
//   const [mobileNotificationOpen, setMobileNotificationOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const profileDrawerRef = useRef<HTMLDivElement | null>(null);
//   const notificationDrawerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (window) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, []);
//   const [openModal, setOpenModal] = useState(false);
//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };
//   const [scroll, setScroll] = useState(false);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
//   const open1 = Boolean(anchorEl1);
//   const handleClick1 = (event) => {
//     if (isMobile) {
//       setMobileNotificationOpen(true);
//     } else {
//       setAnchorEl1(event.currentTarget);
//     }
//   };

//   const handleClose1 = () => {
//     setAnchorEl1(null);
//     if (isMobile) {
//       setMobileNotificationOpen(false);
//     }
//   };

//   const [Status, setStatus] = React.useState('default');
//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScroll(window.scrollY > 10);
//     });
//   }, []);



//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);



//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const target = event.target;

//       // 👉 Close Mobile Profile Drawer
//       if (
//         mobileProfileOpen &&
//         profileDrawerRef.current &&
//         !profileDrawerRef.current.contains(target)
//       ) {
//         setMobileProfileOpen(false);
//       }

//       // 👉 Close Mobile Notification Drawer
//       if (
//         mobileNotificationOpen &&
//         notificationDrawerRef.current &&
//         !notificationDrawerRef.current.contains(target)
//       ) {
//         setMobileNotificationOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [mobileProfileOpen, mobileNotificationOpen]);

//   const isMobile = useMediaQuery("(max-width: 768px)");

//   return (
//     <><Box className={`site_header ${isSticky ? "sticky" : ""}`}>
//       <AppBar
//         position="fixed"
//         className="topbar"
//         sx={{
//           width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
//           ml: { lg: `${SIDEBAR_WIDTH}px` },
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <div className="topbar_left">
//             <IconButton
//               onClick={handleSidebarToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//             <h3>Store 1</h3>
//           </div>
//           <div className="topbar_right">
            
//             <div className="sticky_bottom">
//               {/* <Badge className="chat_badge" badgeContent={4} color="primary" onClick={() => navigate('/Manage-chat')}>
//                 <img src="/static/images/message_icon.svg" alt="icon" />
//                 <span className="text">Chat</span>
//               </Badge> */}
//               <Box>

//                 <IconButton
//                   className="icon_btn"
//                   aria-controls={open1 ? "basic-menu1" : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open1 ? "true" : undefined}
//                   onClick={handleClick1}
//                 >
//                   <NotificationsActiveIcon />
//                   <span className="text">Notification</span>

//                 </IconButton>
//                 {!isMobile && (
//                   <Menu
//                     className="notiDropdown_menu"
//                     id="basic-menu1"
//                     anchorEl={anchorEl1}
//                     open={open1}
//                     onClose={handleClose1}
//                     transformOrigin={{ horizontal: "right", vertical: "top" }}
//                     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//                   >
//                     <Box className="noti_head">
//                       <Typography component="h2">Notifications</Typography>
//                       <Button
//                         className="btn btn_primary sm"
//                         onClick={() => {
//                           navigate("/recieved-notifications");
//                           handleClose1();
//                         }}
//                       >
//                         See All
//                       </Button>
//                     </Box>

//                     <ul className="noti_list">
//                       {[1, 2, 3].map((i) => (
//                         <li key={i}>
//                           <figure>
//                             <img src="/static/images/user_placeholder.png" alt="" />
//                           </figure>
//                           <div className="noti_info">
//                             <Typography component="h3">
//                               Emma Smith
//                               <Typography component="span">1 Day ago</Typography>
//                             </Typography>
//                             <Typography component="p">
//                               Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
//                             </Typography>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </Menu>
//                 )}

//                 {/* 📱 MOBILE DRAWER VIEW */}
//                 {isMobile && (
//                   <Drawer
//                     anchor="right"
//                     open={mobileNotificationOpen}
//                     onClose={() => setMobileNotificationOpen(false)}
//                     className="profile_menu_drawer"
//                     PaperProps={{ ref: notificationDrawerRef }}
//                     hideBackdrop>
//                     <Box className="noti_head">
//                       <Typography component="h2">Notifications</Typography>
//                       <Button
//                         className="btn btn_primary sm"
//                         onClick={() => {
//                           navigate("/recieved-notifications");
//                           handleClose1();
//                         }}
//                       >
//                         See All
//                       </Button>
//                     </Box>

//                     <ul className="noti_list">
//                       {[1, 2, 3].map((i) => (
//                         <li key={i}>
//                           <figure>
//                             <img src="/static/images/user_placeholder.png" alt="" />
//                           </figure>
//                           <div className="noti_info">
//                             <Typography component="h3">
//                               Emma Smith
//                               <Typography component="span">1 Day ago</Typography>
//                             </Typography>
//                             <Typography component="p">
//                               Lorem ipsum dolor sit amet consectetur, adipisicing elit dolor sit amet consectetur.
//                             </Typography>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </Drawer>
//                 )}
//               </Box>

//               <Box className="profile_menu">
//                 <IconButton
//                   className="topbar_user_btn"
//                   aria-controls={open ? "basic-menu" : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? "true" : undefined}
//                   onClick={isMobile ? () => setMobileProfileOpen(true) : handleClick}
//                 >
//                   <img src="/static/images/admin_icon.png" alt="" />
//                   <span className="text">Account</span>

//                 </IconButton>
//                 {/* Desktop Menu */}
//                 {!isMobile && (
//                   <Menu
//                     id="basic-menu"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     MenuListProps={{
//                       "aria-labelledby": "basic-button",
//                     }}
//                     transformOrigin={{ horizontal: "right", vertical: "top" }}
//                     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//                   >
//                     <MenuItem onClick={() => { navigate("/manage-profile"); handleClose(); }}>
//                       <PersonIcon /> User Information
//                     </MenuItem>

//                     <MenuItem onClick={() => { setOpenModal(true); handleClose(); }}>
//                       <StorefrontIcon /> Select Store
//                     </MenuItem>
//                     <MenuItem onClick={() => { navigate("/store-information"); handleClose(); }}>
//                       <StorefrontIcon /> Store Information
//                     </MenuItem>

//                     <MenuItem onClick={() => { navigate("/manage-profile/change-password"); handleClose(); }}>
//                       <LockIcon /> Change Password
//                     </MenuItem>

//                     <MenuItem onClick={() => { navigate("/"); handleClose(); }}>
//                       <LogoutIcon /> Logout
//                     </MenuItem>
//                   </Menu>
//                 )}

//                 {/* Mobile Drawer (full-page menu) */}
//                 {isMobile && (
//                   <Drawer anchor="right" open={mobileProfileOpen} onClose={() => setMobileProfileOpen(false)} className="profile_menu_drawer" hideBackdrop PaperProps={{ ref: profileDrawerRef }}>
//                     <Box sx={{ width: 260, p: 2 }}>
//                       <List>
//                         <ListItemButton onClick={() => { navigate("/manage-profile"); setMobileProfileOpen(false); }}>
//                           <ListItemIcon><PersonIcon /></ListItemIcon>
//                           <ListItemText primary="User Information" />
//                         </ListItemButton>

//                         <ListItemButton onClick={() => { navigate("/store-information"); setMobileProfileOpen(false); }}>
//                           <ListItemIcon><StorefrontIcon /></ListItemIcon>
//                           <ListItemText primary="Store Information" />
//                         </ListItemButton>

//                         <ListItemButton onClick={() => { navigate("/manage-profile/change-password"); setMobileProfileOpen(false); }}>
//                           <ListItemIcon><LockIcon /></ListItemIcon>
//                           <ListItemText primary="Change Password" />
//                         </ListItemButton>

//                         <ListItemButton onClick={() => { navigate("/"); setMobileProfileOpen(false); }}>
//                           <ListItemIcon><LogoutIcon /></ListItemIcon>
//                           <ListItemText primary="Logout" />
//                         </ListItemButton>
//                       </List>
//                     </Box>
//                   </Drawer>
//                 )}
//               </Box>
//             </div>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </Box><SelectStore
//         open={openModal}
//         onClose={handleCloseModal}
//         setOpen={setOpenModal} /></>
//   );
// }

// export default Topbar;
