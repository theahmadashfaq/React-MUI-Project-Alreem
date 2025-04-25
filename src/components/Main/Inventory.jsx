import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Modal,
  IconButton,
  Divider,
  Select,
  FormControl,
  MenuItem,
  useMediaQuery
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const products = [
  {
    id: "25486548",
    name: "Mac Book Pro",
    price: "AED560:00",
    status: "Active",
    image: "mac.jpg",
    details: "Mac Book Pro with advanced features for professionals.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "4 items (only)",
    ratings: 4.0,
    reviews: 400,
  },
  {
    id: "25486549",
    name: "HeadPhone",
    price: "AED250:00",
    status: "Active",
    image: "head.jpg",
    details:"Headphones have revolutionized the way we experience audio, offering a personalized and immersive sound and experience thats intimate and portable.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "7 items (only)",
    ratings: 4.0,
    reviews: 400,
  },
  {
    id: "25486550",
    name: "Gold Ring",
    price: "AED1200:00",
    status: "Active",
    image: "gold.jpg",
    details: "Exquisite gold ring with premium craftsmanship and elegant design.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "2 items (only)",
    ratings: 4.5,
    reviews: 120,
  },
  {
    id: "25486551",
    name: "Apple Watch",
    price: "AED850:00",
    status: "Active",
    image: "apple.jpg",
    details: "Apple Watch with health monitoring and connectivity features.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "9 items (only)",
    ratings: 4.2,
    reviews: 350,
  },
  {
    id: "25486552",
    name: "Apple AirPod",
    price: "AED450:00",
    status: "Active",
    image: "air.jpg",
    details: "Wireless earbuds with exceptional sound quality and easy connectivity.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "12 items (only)",
    ratings: 4.3,
    reviews: 280,
  },
  {
    id: "25486553",
    name: "RGB Gradient Lighting Keyboard",
    price: "AED250:00",
    status: "Active",
    image: "kei.jpg",
    details:
      "RGB Gradient Lighting Keyboard with customizable lighting effects and responsive keys.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "4 items (only)",
    ratings: 4.0,
    reviews: 400,
  },
  {
    id: "25486552",
    name: "Apple AirPod",
    price: "AED450:00",
    status: "Active",
    image: "air.jpg",
    details: "Wireless earbuds with exceptional sound quality and easy connectivity.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "12 items (only)",
    ratings: 4.3,
    reviews: 280,
  },
  {
    id: "25486550",
    name: "Gold Ring",
    price: "AED1200:00",
    status: "Active",
    image: "gold.jpg",
    details: "Exquisite gold ring with premium craftsmanship and elegant design.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "2 items (only)",
    ratings: 4.5,
    reviews: 120,
  },
  {
    id: "25486549",
    name: "HeadPhone",
    price: "AED250:00",
    status: "Active",
    image: "head.jpg",
    details: "Headphones have revolutionized the way we experience audio, offering a personalized and immersive sound and experience thats intimate and portable.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "7 items (only)",
    ratings: 4.0,
    reviews: 400,
  },
  {
    id: "25486552",
    name: "Apple AirPod",
    price: "AED450:00",
    status: "Active",
    image: "air.jpg",
    details: "Wireless earbuds with exceptional sound quality and easy connectivity.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "12 items (only)",
    ratings: 4.3,
    reviews: 280,
  },
  {
    id: "25486550",
    name: "Gold Ring",
    price: "AED1200:00",
    status: "Active",
    image: "gold.jpg",
    details: "Exquisite gold ring with premium craftsmanship and elegant design.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "2 items (only)",
    ratings: 4.5,
    reviews: 120,
  },
  {
    id: "25486549",
    name: "HeadPhone",
    price: "AED250:00",
    status: "Active",
    image: "head.jpg",
    details: "Headphones have revolutionized the way we experience audio, offering a personalized and immersive sound and experience thats intimate and portable.",
    colors: ["#8884d8", "#82ca9d", "#ff66c8", "#ffd84d", "#ff7e75"],
    availability: "7 items (only)",
    ratings: 4.0,
    reviews: 400,
  },
];

export const Inventory = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Product detail modal component
  const ProductDetailModal = () => {
    return (



 <Box
    sx={{
      width: '100%',
      minHeight: '100vh',
   
      display: 'flex',
      justifyContent: 'center',
      px: 2,
    }}
  >
    <Box
      sx={{
        width:"100%"
       
       
      }}
    >



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-detail-modal"
        aria-describedby="product-detail-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 1200,
            bgcolor: "#29292A",
            border: "1px solid #333",
            borderRadius: 2,
            boxShadow: 24,
            p: 0,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left side - Image gallery */}
            <Box
              sx={{
                border: "1px solid rgb(65, 64, 64)",
                borderRadius: 2,
                marginTop: "20px",
                width: "70%",
                marginLeft: "10px",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                {/* Thumbnail column on left */}
                <Box
                  sx={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        height: 65,
                        width: "100%",
                        borderRadius: 1,
                        overflow: "hidden",
                        opacity: index === 0 ? 1 : 0.7,
                        "&:hover": { opacity: 1 },
                        cursor: "pointer",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ height: "100%", objectFit: "cover" }}
                        image={selectedProduct.image}
                      />
                    </Box>
                  ))}
                </Box>

                {/* Main image on right */}
                <Box sx={{ height: "100px", position: "relative" }}>
                  <Box
                    sx={{
                      height: 400,
                      bgcolor: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        maxHeight: "100%",
                        maxWidth: "100%",
                      }}
                      image={selectedProduct.image}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right side - Product details */}
            <Box
              sx={{
                border: "1px solid rgb(65, 64, 64)",
                borderRadius: 2,
                marginTop: "20px",
                width: "50%",
                marginLeft: "10px",
                marginRight: "30px",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "90%" }, p: 4 }}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {selectedProduct.name}
                </Typography>

                <Typography variant="h5" sx={{ color: "#ffd84d", mb: 3 }}>
                  {selectedProduct.price}
                </Typography>

                {/* Color section with text and circles on same line */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    color
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    {selectedProduct.colors.map((color, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: color,
                          border: "1px solid #333",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Product Availability with text and value on same line */}
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Product Availability
                  </Typography>
                  <Typography variant="body1">
                    {selectedProduct.availability}
                  </Typography>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  Product Size
                </Typography>

                {/* Dropdown menu for size selection */}
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <Select
                    value=""
                    displayEmpty
                    sx={{
                      p: 1,
                      border: "1px solid rgb(65, 64, 64)",
                      borderRadius: 1,
                      color: "#fff",
                      "& .MuiSelect-select": { p: 1 },
                      "& .MuiSelect-icon": { color: "#fff" },
                    }}
                    IconComponent={(props) => (
                      <ArrowBackIcon
                        {...props}
                        sx={{ transform: "rotate(270deg)" }}
                      />
                    )}
                  >
                    <MenuItem value="" disabled>
                      Check size
                    </MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={34}>34</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                  </Select>
                </FormControl>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 1, color: "#CBBA71" }}
                >
                  Product Details
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {selectedProduct.details}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Reviews section - Now as a separate section below */}
          <Box sx={{ p: 4, border: "1px solid rgb(65, 64, 64)", margin: "20px" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
              Reviews
            </Typography>
            <Box sx={{ backgroundColor: "#212121" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                }}
              >
                {/* Left side - Reviews list with scrollbar */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "65%" },
                    maxHeight: 300,
                    overflow: "auto",
                    pr: 2,
                    borderRight: { xs: "none", md: "1px solid #333" },
                  }}
                >
                  {/* Review 1 */}
                  <Box
                    sx={{
                      mb: 3,
                      pb: 3,
                      borderBottom: "1px solid #333",
                      border: "1px solid rgb(65, 64, 64)",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        margin: "20px",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            bgcolor: "#333",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <Typography variant="h6">M</Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                          >
                            Michael Jordan
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#888" }}>
                            19 March, 2024
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarBorderIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarBorderIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                      </Box>
                    </Box>
         
                    <Typography sx={{ marginLeft: "20px" }} variant="body2">
                      I recently invested in a new keyboard, and I must say, it
                      has truly transformed my computing experience.
                    </Typography>
                  </Box>

                  {/* Review 2 */}
                  <Box
                    sx={{
                      mb: 3,
                      pb: 3,
                      borderBottom: "1px solid #333",
                      border: "1px solid rgb(65, 64, 64)",
                      marginLeft: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        margin: "20px",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            bgcolor: "#333",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <Typography variant="h6">C</Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                          >
                            Chris Jerry
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#888" }}>
                            28 April, 2024
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarBorderIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarBorderIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                      </Box>
                    </Box>

                    <Typography sx={{ marginLeft: "20px" }} variant="body2">
                      I recently invested in a new keyboard, and I must say, it
                      has truly transformed my computing experience.
                    </Typography>
                  </Box>

                  {/* Additional reviews to demonstrate scrolling */}
                  <Box
                    sx={{
                      mb: 3,
                      pb: 3,
                      marginLeft: "20px",
                      borderBottom: "1px solid #333",
                      border: "1px solid rgb(65, 64, 64)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        margin: "20px",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            bgcolor: "#333",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <Typography variant="h6">J</Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                          >
                            Jessica Smith
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#888" }}>
                            5 April, 2024
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                        <StarBorderIcon sx={{ color: "#ffd84d", fontSize: 20 }} />
                      </Box>
                    </Box>

                    <Typography sx={{ marginLeft: "20px" }} variant="body2">
                      Great product, excellent build quality and the RGB
                      lighting really enhances my setup.
                    </Typography>
                  </Box>
                </Box>

                {/* Right side - Rating summary */}
                <Box sx={{ width: { xs: "100%", md: "35%", marginTop: "50px" } }}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#888", mb: 1 }}
                    >
                      Average Rating
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {selectedProduct.ratings}
                    </Typography>
                    <Box sx={{ display: "flex", mb: 2 }}>
                      {Array.from(
                        Array(Math.floor(selectedProduct.ratings))
                      ).map((_, index) => (
                        <StarIcon key={`star-${index}`} sx={{ color: "#ffd84d" }} />
                      ))}
                      {selectedProduct.ratings % 1 !== 0 && (
                        <StarIcon sx={{ color: "#ffd84d" }} />
                      )}
                      {Array.from(
                        Array(5 - Math.ceil(selectedProduct.ratings))
                      ).map((_, index) => (
                        <StarBorderIcon
                          key={`star-border-${index}`}
                          sx={{ color: "#ffd84d" }}
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ color: "#888" }}>
                      {selectedProduct.reviews} reviews
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      </Box>
      </Box>
      
    );
    
  };

  return (

     <Box
        sx={{
          width: '100%',
          minHeight: "100vh", margin:0,
       
          display: 'flex',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "100%"
           
           
          }}
        >



    
      {/* Header */}
     
     
    <Box 
      sx={{ 
        mb: 4, 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 2 : 0,
        alignItems: isMobile ? "stretch" : "center",
        width: "100%"
      }}
    >
      <Box sx={{ 
        flexGrow: 1, 
        ml: isMobile ? 0 : isTablet ? 2 : 40,
        width: "100%"
      }}>
        <TextField
          placeholder="Search"
          fullWidth={isMobile}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#888" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            bgcolor: "#2a2a2a",
            borderRadius: "50px",
            width: isMobile ? "100%" : isTablet ? "80%" : "60%",
            input: { color: "#fff" },
            border: "1px solid grey",
            "&:hover": {
              borderColor: "#fff",
              bgcolor: "#2c2c2c",
            },
          }}
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth={isMobile}
        sx={{
          color: "#fff",
          borderColor: "#444",
          borderRadius: "30px",
          px: 3,
          py: isMobile ? 1 : undefined,
          textTransform: "none",
          "&:hover": {
            borderColor: "#fff",
            bgcolor: "#2c2c2c",
          },
        }}
      >
        {isMobile ? "Add" : "Add Product"}
        <AddIcon sx={{ ml: 1 }} /> 
      </Button>
    </Box>
     

      {/* Grid Cards */}

      <Grid container spacing={3} sx={{width:"100%"}}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              onClick={() => handleOpen(product)}
              sx={{
                bgcolor: "#2a2a2a",
                borderRadius: 3,
                color: "#fff",
                width: "310px",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={product.image}
               
              />

              {/* Text on Img */}
              <Box
                sx={{
                  position: "absolute",
                  top: 124,
                  
                  left: 0,
                  bgcolor: "black",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderTopRightRadius: 20,
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {product.name}
              </Box>

              <CardContent>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    Product ID:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#d4d45a" }}>
                    {product.id}
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    Status:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#d4d45a" }}>
                    {product.status}
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    Price:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#d4d45a" }}>
                    {product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>




        ))}
      </Grid>
      {ProductDetailModal()}





      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          pb: 2,
        }}
      >
        <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <Box
            onClick={() => handlePageChange(1)}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mx: 0.5,
              bgcolor: "#fff",
              color: "#000",
              border: "1px solid #444",
              borderRadius: 0,
            }}
          >
            1
          </Box>

          <Box
            onClick={() => handlePageChange(2)}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mx: 0.5,
              bgcolor: "black",
              color: "white",
              border: "1px solid #444",
              borderRadius: 0,
            }}
          >
            2
          </Box>

          <Box
            onClick={() => handlePageChange(3)}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mx: 0.5,
              bgcolor: "black",
              color: "white",
              border: "1px solid #444",
              borderRadius: 0,
            }}
          >
            3
          </Box>

          <Box
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: 0.5,
              color: "#fff",
            }}
          >
            ...
          </Box>

          <Box
            onClick={() => handlePageChange(11)}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mx: 0.5,
              bgcolor: "black",
              color: "white",
              border: "1px solid #444",
              borderRadius: 0,
            }}
          >
            11
          </Box>

          <Box
            onClick={() => handlePageChange(12)}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mx: 0.5,
              bgcolor: "black",
              color: "white",
              border: "1px solid #444",
              borderRadius: 0,
            }}
          >
            12
          </Box>

          <Box
            onClick={() => handlePageChange(13)}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mx: 0.5,
              bgcolor: "black",
              color: "white",
              border: "1px solid #444",
              borderRadius: 0,
            }}
          >
            13
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#444",
              borderRadius: 0,
              mr: 1,
              px: 2,
              textTransform: "none",
              "&:hover": {
                borderColor: "#666",
                bgcolor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            Previous
          </Button>

          <Button
            endIcon={<ArrowForwardIcon />}
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#444",
              borderRadius: 0,
              px: 2,
              textTransform: "none",
              "&:hover": {
                borderColor: "#666",
                bgcolor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};