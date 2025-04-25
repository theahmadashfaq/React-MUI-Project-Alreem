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
  IconButton,
  Pagination,
  useMediaQuery
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const DraftInventory = () => {
  // Simple hard-coded product list
  const initialProducts = [
    {
      id: "25486548",
      name: "Mac Book Pro",
      price: "AED560:00",
      status: "Active", 
      image: "mac.jpg",
    },
    {
      id: "25486549",
      name: "HeadPhone",
      price: "AED250:00",
      status: "Active",
      image: "head.jpg",
    },
    {
      id: "25486550",
      name: "Gold Ring",
      price: "AED1200:00",
      status: "Active",
      image: "gold.jpg",
    },
    {
      id: "25486551",
      name: "Apple Watch",
      price: "AED850:00",
      status: "Active",
      image: "apple.jpg",
    },
    {
      id: "25486552",
      name: "Premium HeadPhone",
      price: "AED320:00",
      status: "Active",
      image: "head.jpg",
    },
    {
      id: "25486553",
      name: "MacBook Air",
      price: "AED480:00",
      status: "Limited",
      image: "mac.jpg",
    },
    {
      id: "25486554",
      name: "Silver Ring",
      price: "AED750:00",
      status: "Active",
      image: "gold.jpg",
    },
    {
      id: "25486555",
      name: "Apple Watch SE",
      price: "AED650:00",
      status: "Low Stock",
      image: "apple.jpg",
    },
    {
      id: "25486556",
      name: "iPad Pro",
      price: "AED890:00",
      status: "Active",
      image: "mac.jpg",
    },
    {
      id: "25486557",
      name: "Wireless Earbuds",
      price: "AED199:00",
      status: "Popular",
      image: "head.jpg",
    },
    {
      id: "25486558",
      name: "Diamond Pendant",
      price: "AED1500:00",
      status: "Limited",
      image: "gold.jpg",
    },
    {
      id: "25486559",
      name: "Apple Watch Ultra",
      price: "AED1200:00",
      status: "New",
      image: "apple.jpg",
    },
    {
      id: "25486560",
      name: "Gaming Laptop",
      price: "AED2300:00",
      status: "Hot",
      image: "mac.jpg",
    },
    {
      id: "25486561",
      name: "Bluetooth Speaker",
      price: "AED400:00",
      status: "Trending",
      image: "head.jpg",
    },
    {
      id: "25486562",
      name: "Platinum Ring",
      price: "AED1700:00",
      status: "Limited",
      image: "gold.jpg",
    },
    {
      id: "25486563",
      name: "iPhone 14 Pro",
      price: "AED3200:00",
      status: "New Arrival",
      image: "apple.jpg",
    },
    {
      id: "25486564",
      name: "Noise Cancelling Headphones",
      price: "AED600:00",
      status: "Best Seller",
      image: "head.jpg",
    },
    {
      id: "25486565",
      name: "Mac Studio",
      price: "AED5000:00",
      status: "Active",
      image: "mac.jpg",
    },
    {
      id: "25486566",
      name: "Luxury Bracelet",
      price: "AED1900:00",
      status: "Limited Edition",
      image: "gold.jpg",
    },
    {
      id: "25486567",
      name: "Apple AirTag",
      price: "AED129:00",
      status: "New",
      image: "apple.jpg",
    },
    {
      id: "25486568",
      name: "Apple MacBook",
      price: "AED2200:00",
      status: "New Arrival",
      image: "mac.jpg",
    },
    {
      id: "25486569",
      name: "Gaming Keyboard",
      price: "AED1500:00",
      status: "Active",
      image: "kei.jpg",
    },
    {
      id: "25486570",
      name: "Gold Necklace",
      price: "AED3500:00",
      status: "Limited",
      image: "gold.jpg",
    },
    {
      id: "25486571",
      name: "Apple HomePod",
      price: "AED750:00",
      status: "Popular",
      image: "apple.jpg",
    },
    {
      id: "25486572",
      name: "Head Phone",
      price: "AED320:00",
      status: "Hot",
      image: "head.jpg",
    },
    {
      id: "25486573",
      name: "Air Pods",
      price: "AED450:00",
      status: "Trending",
      image: "air.jpg",
    },
    {
      id: "25486574",
      name: "Diamond Earrings",
      price: "AED2800:00",
      status: "Limited Edition",
      image: "gold.jpg",
    },
    {
      id: "25486575",
      name: "iPhone 14",
      price: "AED2800:00",
      status: "Best Seller",
      image: "apple.jpg",
    },
    {
      id: "25486576",
      name: "Ultrabook Pro",
      price: "AED3100:00",
      status: "New",
      image: "mac.jpg",
    },
    {
      id: "25486577",
      name: "Professional Microphone",
      price: "AED880:00",
      status: "Active",
      image: "kei.jpg",
    },
    {
      id: "25486578",
      name: "Silver Bracelet",
      price: "AED650:00",
      status: "Limited",
      image: "gold.jpg",
    },
    {
      id: "25486579",
      name: "AirPods Pro",
      price: "AED920:00",
      status: "Popular",
      image: "apple.jpg",
    }
   
  ];

  // State variables
  const [products, setProducts] = useState(initialProducts);
  const [open, setOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  //  pagination settings
  const perPage = 12;
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentProducts = products.slice(start, end);
  

  // Basic delete functionality
  const handleClickOpen = (productId) => {
    setProductToDelete(productId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProductToDelete(null);
  };

  const handleDelete = () => {
    if (productToDelete) {
      // Remove the product from the array
      const updatedProducts = products.filter(
        (product) => product.id !== productToDelete
      );
      setProducts(updatedProducts);

      // Check if current page should change
      if (currentProducts.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
    handleClose();
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {/* Delete confirmation dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-confirmation-dialog"
      >
        <DialogTitle id="delete-confirmation-dialog">
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this item?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            sx={{ backgroundColor: "red", color: "white" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ minHeight: "100vh", margin: 0 }}>
        {/* Header with search and add button */}
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

        {/* Product grid */}
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
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
                <CardMedia component="img" height="160" image={product.image} />


                {/* Delete Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 270,
                    bgcolor: "black",
                    px: 1,
                    borderBottomLeftRadius: 50,
                  }}
                >
                  <IconButton
                    sx={{ color: "red" }}
                    onClick={() => handleClickOpen(product.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
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

                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      Name:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#d4d45a" }}>
                      {product.name}
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

        {/* pagination */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            mt: 4,
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}></Box>

          <Pagination
            count={10}
            page={currentPage}
            onChange={handlePageChange}
            color="standard"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#fff",
                margin: "0 2px",
                borderRadius: 0,
                minWidth: "30px",
                height: "30px",

                "&.Mui-selected": {
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold",
                },

                "&:hover": {
                  backgroundColor: "#3a3a3a",
                },
              },
              "& .MuiPaginationItem-page": {
                border: "1px solid #444",
              },
              "& .MuiPaginationItem-previousNext": {
                display: "none",
              },
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
    </>
  );
};
