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
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    const SidebarContent = () => (
        <Box
            sx={{
                minWidth: "300px",
                backgroundColor: "#212121",
                color: "#EEE692",
                minHeight: "100vh"
            }}
        >
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
        <Grid container>
            
            <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                <IconButton
                    onClick={toggleDrawer}
                    sx={{ 
                        color: "#EEE692", 
                        marginTop: 10,
                        position: "fixed",
                        zIndex: 1200,
                        backgroundColor: "rgba(33, 33, 33, 0.7)",
                        "&:hover": {
                            backgroundColor: "rgba(33, 33, 33, 0.9)",
                        }
                    }}
                >
                    <DensityMediumIcon />
                </IconButton>
            </Grid>

            {/* Sidebar for desktop - hidden on small screens */}
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
                <SidebarContent />
            </Grid>

            {/* Drawer for mobile view */}
            <Drawer 
                anchor="left" 
                open={open} 
                onClose={toggleDrawer}
                sx={{
                    display: { xs: 'none', md: 'none' },
                   width:"100px"
                }}
            >
                <SidebarContent />
            </Drawer>
        </Grid>
    );
};