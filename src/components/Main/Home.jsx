import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ padding: 4, }}>
          {/* Shop Info Skeleton */}
          <Card
            sx={{
              backgroundColor: "#29292A",
              borderRadius: 2,
              padding: 3,
              mb: 3,
              height: "100px",
              border: "1px solid grey",
            }}
          >
           
       <Grid container spacing={3}>
            <Grid >
              <Card
                sx={{
                  backgroundColor: "#29292A",
                 
                 
                }}
              >
                 <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ borderRadius: 2, width: "100px", height: "100px" }}
              />
            </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#29292A",
                  width:"500px",
                  margin:"10px"
                }}
              >
                <Box sx={{  gap: 2,  }}>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ borderRadius: 2 , width:"70px"}} 
        />
        <Box >
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1.2rem", }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem",  }}
          />
        </Box>
      </Box>
              </Card>
            </Grid>

          
          </Grid>
          </Card>

          {/* Details Skeleton */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                  width: "200px",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1.1rem", width: "100px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1rem", width: "70%" }}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                  width: "200px",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1.1rem", width: "100px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100px" }}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                  width: "200px",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1.1rem", width: "100px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1rem", width: "80%" }}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                  width: "200px",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1.1rem", width: "100px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1rem", width: "50%" }}
                />
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginRight: "1000px",
                  width: "100%",
                }}
              >
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1.1rem", width: "30%" }}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100%" }}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ fontSize: "1rem", width: "90%" }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ padding: 4 }}>
          <Card
            sx={{
              backgroundColor: "#2c2c2c",
              borderRadius: 2,
              padding: 3,
              marginBottom: 3,
              border: "1px solid grey",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <img
                src="ooo.jpeg"
                alt="Shop"
                style={{ width: 90, height: 90, borderRadius: 8 }}
              />
              <Box>
                <Typography fontWeight="bold" color="#EEE692">
                  Grado Labs
                </Typography>
                <Typography sx={{ color: "white" }}>
                  headphones or audio equipments, possibly offering unique
                  feature
                </Typography>
              </Box>
            </Box>
          </Card>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                }}
              >
                <Typography fontWeight="bold" color="#EEE692">
                  Address
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Ajman United Arab Emirates
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                }}
              >
                <Typography fontWeight="bold" color="#EEE692">
                  Category
                </Typography>
                <Typography sx={{ color: "white" }}>Indoor Outdoor</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                }}
              >
                <Typography fontWeight="bold" color="#EEE692">
                  Website
                </Typography>
                <Typography sx={{ color: "white" }}>
                  www.gradolabmail.com
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                }}
              >
                <Typography fontWeight="bold" color="#EEE692">
                  Contact Number
                </Typography>
                <Typography sx={{ color: "white" }}>
                  +97 3123 8797123
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{
                  backgroundColor: "#2c2c2c",
                  padding: 2,
                  border: "1px solid grey",
                }}
              >
                <Typography fontWeight="bold" color="#EEE692">
                  Shop Description
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Grado Labs we believe fashion is a journey meant to be shared.
                  Join our vibrant community of fashion aficionados, where
                  inspiration knows no bounds.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
