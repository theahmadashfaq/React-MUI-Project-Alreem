import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";


export const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#212121",
        color: "white",
        padding: 2,
        position: "sticky",
        top: 0,
        zIndex: 10,
       
      }}
    >
      <Grid
        container
        sx={{
          margin: "0 auto",
          maxWidth: "1600px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
          <Typography variant="h5" fontWeight="bolder" color="#EEE692">
            Aleem Seller Dashboard
          </Typography>
        </Grid>
        <Grid item container spacing={1}> 
          <Grid item>
            <Avatar
              alt="Michael Jorden"
              src="avatar.png"
              sx={{ border: "2px solid #EEE692" }}
            />
          </Grid>
          <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography fontWeight="bold">Michael Jorden</Typography>
            <Typography variant="body2">Seller</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
