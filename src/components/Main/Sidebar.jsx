import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    
    // Properly toggle the drawer state
    const toggleDrawer = () => setOpen(!open);
    
    // Close the drawer
    const closeDrawer = () => setOpen(false);

    const SidebarContent = () => (
        <Box
            sx={{
                minWidth: "300px",
                backgroundColor: "#212121",
                color: "#EEE692",
                minHeight: "100vh",
                position: "relative"
            }}
        >
            {/* Close icon only for mobile drawer */}
            <IconButton
                onClick={closeDrawer}
                sx={{ 
                    color: "#EEE692",
                    position: "absolute",
                    top: 10,
                    right: 10,
                    display: { xs: 'block', md: 'none' },
                    zIndex: 1210
                }}
            >
                <CloseIcon />
            </IconButton>
            
            {/* Logo */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0 30px 0",
                }}
            >
                <img
                    src="P1.png"
                    alt="Alreem Logo"
                    style={{ width: "80%" }}
                />
            </Box>

            <List sx={{ padding: 0 }}>
                {/* Home Page */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="home (1).png" 
                                alt="Home Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Home Page
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Dashboard */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/dashboard" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="dashboard.png" 
                                alt="Dashboard Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Dashboard
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Manage Order */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/manage-order" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="mahage.png" 
                                alt="Manage Order Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Manage Order
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Dispute Order */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/dispute-order" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="dispute.png" 
                                alt="Dispute Order Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Dispute Order
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Inventory */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/inventory" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="inventory.png" 
                                alt="Inventory Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Inventory
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Draft Inventory */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/draft-inventory" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="draft.png" 
                                alt="Draft Inventory Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Draft Inventory
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Inbox */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/inbox" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="inbox.png" 
                                alt="Inbox Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Inbox
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                {/* Edit Shop */}
                <ListItem disablePadding>
                    <ListItemButton 
                        component={Link} 
                        to="/edit-shop" 
                        sx={{
                            padding: "16px 24px",
                            "&:hover": {
                                backgroundColor: "rgba(238, 230, 146, 0.2)",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                marginRight: 2,
                            }}
                        >
                            <img 
                                src="edit.png" 
                                alt="Edit Shop Icon" 
                                style={{ width: "24px", height: "24px" }}
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                sx={{
                                    fontWeight: "medium",
                                    color: "#EEE692",
                                    fontSize: "20px",
                                }}
                            >
                                Edit Shop
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* Main menu button for mobile that opens the drawer */}
            <IconButton
                onClick={toggleDrawer}
               
                sx={{ 
                    color: "#EEE692", 
                    position: "fixed",
                    top: 10,
                    left: 10,
                    zIndex: 1200,
                    backgroundColor: "rgba(33, 33, 33, 0.7)",
                    "&:hover": {
                        backgroundColor: "rgba(33, 33, 33, 0.9)",
                    },
                    display: { xs: 'flex', md: 'none' }
                }}
            >
                <DensityMediumIcon />
            </IconButton>

            {/* Permanent sidebar for desktop */}
            <Box sx={{ 
                display: { xs: 'none', md: 'block' },
                position: 'fixed',
                height: '100vh',
                zIndex: 1100
            }}>
                <SidebarContent />
            </Box>

            {/* Drawer for mobile view */}
            <Drawer 
                anchor="left" 
                open={open} 
                onClose={closeDrawer}
                sx={{
                    '& .MuiDrawer-paper': { width: '100%' }  // Make drawer full width on mobile
                }}
            >
                <SidebarContent />
            </Drawer>
        </>
    );
};