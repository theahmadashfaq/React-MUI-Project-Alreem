import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Main/Dashboard";
import { DisputeOrder } from "./components/Main/DisputeOrder";
import { DraftInventory } from "./components/Main/DraftInventory";
import { EditShop } from "./components/Main/EditShop";
import { Inbox } from "./components/Main/Inbox";
import { Inventory } from "./components/Main/Inventory";
import { ManageOrder } from "./components/Main/ManageOrder";
import { Home } from "./components/Main/Home";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Navbar } from "./components/Header/Navbar";
import { Sidebar } from "./components/Main/Sidebar";
import { ChatSupport } from "./components/Main/ChatSupport";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  // Update sidebar state when screen size changes
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarWidth = 300;

  return (
    <Router>
      <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#29292A" }}>
        {/* Responsive Sidebar */}
        <Box
          sx={{
            bgcolor: "#1e1e1e",
            color: "white",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: sidebarWidth,
            zIndex: 1200,
            overflowY: "auto",
            scrollbarWidth: "none",
            transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: sidebarOpen ? '4px 0px 10px rgba(0, 0, 0, 0.2)' : 'none'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            {isMobile && (
              <IconButton 
                onClick={toggleSidebar} 
                sx={{ color: 'white' }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Box>
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            marginLeft: { xs: 0, md: sidebarOpen ? `${sidebarWidth}px` : 0 },
            transition: 'margin-left 0.3s ease-in-out',
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: '100%'
          }}
        >
          {/* Navbar with menu toggle for mobile */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton 
                onClick={toggleSidebar}
                sx={{ 
                  color: 'white', 
                  ml: 1,
                  display: sidebarOpen ? 'none' : 'block'
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Box sx={{ flexGrow: 1 }}>
              <Navbar />
            </Box>
          </Box>
          
          {/* Routes content */}
          <Box 
            sx={{ 
              padding: { xs: 1, sm: 2, md: 3 },
              overflowY: "auto",
              scrollbarWidth: "none",
              flexGrow: 1
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-order" element={<ManageOrder />} />
              <Route path="/dispute-order" element={<DisputeOrder />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/draft-inventory" element={<DraftInventory />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/edit-shop" element={<EditShop />} />
              <Route path="/chat-support" element={<ChatSupport />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;