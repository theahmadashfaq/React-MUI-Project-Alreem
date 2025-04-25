import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { Navbar } from "../Header/Navbar";

export const Dashboard = () => {
  return (
    <Box >
     
      <Box >
      
      

        {/* Dashboard Content */}
        <Box >
          <Grid container spacing={3}>

            {/* Total Order */}
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ backgroundColor: "#2c2c2c", width:"500px", padding: 2, border: "1px solid grey", color: "white"}}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
                  <img src="order.png" alt=""  style={{ width: "90px", height: "90px", marginRight:"10px" }}/>
                  <Typography variant="h4" fontWeight="bold" color="white">
                    Total Order
                  </Typography>
                </Box>
                <Typography sx={{ mb: 0.5 }}>This month amount of total sold Product</Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>0.00 AED</Typography>
              </Card>
            </Grid>

            {/* Total Sales */}
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ backgroundColor: "#2c2c2c",width:"500px", padding: 2, border: "1px solid grey", color: "white" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
                <img src="sale.png" alt=""  style={{ width: "90px", height: "90px", marginRight:"10px" }}/>
                <Typography variant="h4" fontWeight="bold" color="white">
                    Total Sales
                  </Typography>
                </Box>
                <Typography sx={{ mb: 0.5 }}>This month amount of total completed orders.</Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>0</Typography>
              </Card>
            </Grid>

            {/* Orders In Queue */}
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ backgroundColor: "#2c2c2c", width:"500px",padding: 2, border: "1px solid grey", color: "white" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
                <img src="que.png" alt=""  style={{ width: "90px", height: "90px", marginRight:"10px" }}/>
                  <Typography variant="h4" fontWeight="bold" color="white">
                    Orders In Que
                  </Typography>
                </Box>
                <Typography sx={{ mb: 0.5 }}>Orders to be delivered this week.</Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>0</Typography>
              </Card>
            </Grid>

            {/* Inventory */}
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ backgroundColor: "#2c2c2c",width:"500px" ,padding: 2, border: "1px solid grey", color: "white" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
                <img src="inv.png" alt=""  style={{ width: "90px", height: "90px", marginRight:"10px" }}/>
                  <Typography variant="h4" fontWeight="bold" color="white">
                    Inventory
                  </Typography>
                </Box>
                <Typography sx={{ mb: 0.5 }}>Number of Products remaining in the inventory section</Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>0</Typography>
              </Card>
            </Grid>

           

          
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};