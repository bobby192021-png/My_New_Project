import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
// import Topbar from "../Pages/main/Topbar";
import { SIDEBAR_WIDTH } from "../constants";
import {  useState } from "react";

function MainContainer({ hideHeader = false }) {
// const theme = useTheme();
// const isMobile = useMediaQuery("(max-width:1200px)");
const [mobileOpen, setMobileOpen] = useState(false);

// useEffect(() => {
//   if (isMobile) {
//     setMobileOpen(true);  // Sidebar active below 1200px
//   } else {
//     setMobileOpen(false); // Sidebar inactive above 1200px
//   }
// }, [isMobile]);

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* {!hideHeader && <Topbar handleSidebarToggle={handleSidebarToggle} />} */}
      <Sidebar
        mobileOpen={mobileOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
      <Box
        component="main"
        className="main_content"
        sx={{
          marginLeft: "auto",
          width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        }}
      >
        <Container className="sub-layout">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
export default MainContainer;
