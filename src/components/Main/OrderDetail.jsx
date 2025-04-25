import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DoneIcon from "@mui/icons-material/Done";
import { Done } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const OrderDetail = ({ onBack, orderType = "pending", orderData }) => {
  // Track order status - set initial status based on orderType
  const [orderStatus, setOrderStatus] = useState(
    orderType === "completed"
      ? "dispatched"
      : orderType === "cancelled"
      ? "cancelled"
      : "placed"
  );

  // State for review modal
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Functions to handle order flow
  const handleAcceptOrder = () => {
    setOrderStatus("accepted");
  };

  const handleDispatchOrder = () => {
    setOrderStatus("dispatched");
  };

  // Functions to handle review modal
  const openReviewModal = () => {
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  // Current date formatting
  const currentDate = "14 November";

  return (


     <Box
        sx={{
         
          minHeight: '100vh',
          color: "white" ,
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
   
      {/* Back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{
          color: "white",
          mb: 3,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
        onClick={onBack}
      >
        Back to Orders
      </Button>

      <Grid container spacing={3}>
        {/* Left Side - Order Details */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              backgroundColor: "#2d2d2d",
              color: "white",
              width: "600px",
              border: "1px solid rgb(65, 64, 64)",
              borderRadius: 2,
              mb: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ color: "#C6AF5F", mb: 2 }}>
                Order Details
              </Typography>

              {/* Product 1 */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ width: 80, height: 80, mr: 2 }}>
                  <img
                    src="shoe.png"
                    alt="Vitality vibeshoes"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="subtitle1">
                    Product Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Vitality vibeshoes
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Price
                  </Typography>
                  <Typography variant="body1">AED 500</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Quantity
                  </Typography>
                  <Typography variant="body1">1</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Size
                  </Typography>
                  <Typography variant="body1">40</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Color
                  </Typography>
                  <Typography variant="body1">Pink</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2, backgroundColor: "grey" }} />

              {/* Product 2 */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ width: 80, height: 80, mr: 2 }}>
                  <img
                    src="ring.png"
                    alt="Vitality vibeshoes"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="subtitle1">
                    Product Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Diamond Ring
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Price
                  </Typography>
                  <Typography variant="body1">AED 350</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Quantity
                  </Typography>
                  <Typography variant="body1">1</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Size
                  </Typography>
                  <Typography variant="body1">40</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2, backgroundColor: "grey" }} />

              {/* Product 3 */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ width: 80, height: 80, mr: 2 }}>
                  <img
                    src="power.png"
                    alt="Vitality vibeshoes"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="subtitle1">
                    Product Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Power Bank
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Price
                  </Typography>
                  <Typography variant="body1">AED 500</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Quantity
                  </Typography>
                  <Typography variant="body1">1</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Size
                  </Typography>
                  <Typography variant="body1">40</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Order Info */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              backgroundColor: "#2d2d2d",
              color: "white",
              width: "500px",
              border: "1px solid rgb(65, 64, 64)",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ color: "#C6AF5F", mb: 2 }}>
                Order Info
              </Typography>

              {/* Buyer Details Section */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{ bgcolor: "#C6AF5F", mr: 1, width: 24, height: 24 }}
                  >
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </Avatar>
                  <Typography variant="h6">Buyer Details</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Name
                  </Typography>
                  <Typography variant="body2">Michael Jordan</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Phone Number
                  </Typography>
                  <Typography variant="body2">+9914876498562</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Email Address
                  </Typography>
                  <Typography variant="body2">
                    micheljordan@gmail.com
                  </Typography>
                </Box>
              </Box>

              {/* Payment Method Section */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{ bgcolor: "#C6AF5F", mr: 1, width: 24, height: 24 }}
                  >
                    <IconButton sx={{ width: 24 }}>
                      <PaymentIcon />
                    </IconButton>
                  </Avatar>
                  <Typography variant="h6">Payment Method</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Total Amount
                  </Typography>
                  <Typography variant="body2">1024.00 AED</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Delivery Charges
                  </Typography>
                  <Typography variant="body2">20.00 AED</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Order Placed on
                  </Typography>
                  <Typography variant="body2">2024-11-14,1447</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Order Id
                  </Typography>
                  <Typography variant="body2">ALREEM-1</Typography>
                </Box>
              </Box>

              {/* Shipping Method Section */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{ bgcolor: "#C6AF5F", mr: 1, width: 24, height: 24 }}
                  >
                    <IconButton>
                      <LocalShippingIcon />
                    </IconButton>
                  </Avatar>
                  <Typography variant="h6">Shipping Method</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Tracking Id
                  </Typography>
                  <Typography variant="body2">ALREEM-1</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Address
                  </Typography>
                  <Typography variant="body2">
                    96 church way bradbury
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Alternative Address
                  </Typography>
                  <Typography variant="body2">
                    96 church way bradbury
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Country
                  </Typography>
                  <Typography variant="body2">
                    United Arab Emirates (UAE)
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    City
                  </Typography>
                  <Typography variant="body2">Abu Dhabi</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "grey" }} variant="body2">
                    Postal Code
                  </Typography>
                  <Typography variant="body2">65488</Typography>
                </Box>
              </Box>

              {/* Order Status Timeline */}
              <Box sx={{ mb: 3 }}>
                {/* Order Placed - Always visible */}
                <Box
                  sx={{
                    position: "relative",
                    mb: 1,
                    padding: 1,
                    border: "1px solid rgb(65, 64, 64)",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      margin: "5px",
                    }}
                  >
                    <Avatar
                      sx={{ bgcolor: "#EEE692", mr: 1, width: 24, height: 24 }}
                    >
                      <IconButton sx={{ p: 0 }}>
                        <Done sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Avatar>
                    <Avatar
                      sx={{ bgcolor: "#C6AF5F", mr: 1, width: 24, height: 24 }}
                    >
                      <IconButton sx={{ p: 0 }}>
                        <PersonIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Avatar>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1">
                        Order Place by Buyer
                      </Typography>
                      <Typography variant="body2">14 November</Typography>
                    </Box>

                    <Typography variant="body2" sx={{ ml: "auto" }}>
                      2:55 PM
                    </Typography>
                  </Box>
                  {/* Vertical line connecting to next status */}
                  {(orderStatus === "accepted" ||
                    orderStatus === "dispatched" ||
                    orderType === "completed" ||
                    orderType === "cancelled") && (
                    <>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px", // Adjust slightly to center the dots
                          top: "50px", // Adjust for initial dot position
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "65px", // Adjust spacing between dots
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "80px", // Adjust spacing
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "95px", // Adjust spacing
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "110px", // Adjust spacing for the last dot
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                    </>
                  )}
                </Box>

                {/* Order Accepted - Show for accepted, dispatched or completed orders */}
                {(orderStatus === "accepted" ||
                  orderStatus === "dispatched" ||
                  orderType === "completed") && (
                  <Box
                    sx={{
                      position: "relative",
                      mb: 1,
                      padding: 1,
                      border: "1px solid rgb(65, 64, 64)",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#EEE692",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <Done sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: "#C6AF5F",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <PersonIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body1">Order Accepted</Typography>
                        <Typography variant="body2">14 November</Typography>
                      </Box>

                      <Typography variant="body2" sx={{ ml: "auto" }}>
                        2:55 PM
                      </Typography>
                    </Box>
                    {/* Vertical line connecting to next status */}
                    {(orderStatus === "dispatched" ||
                      orderType === "completed") && (
                      <>
                        <Box
                          sx={{
                            position: "absolute",
                            left: "23px", // Adjust slightly to center the dots
                            top: "50px", // Adjust for initial dot position
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            zIndex: 2,
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            left: "23px",
                            top: "65px", // Adjust spacing between dots
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            zIndex: 2,
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            left: "23px",
                            top: "80px", // Adjust spacing
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            zIndex: 2,
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            left: "23px",
                            top: "95px", // Adjust spacing
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            zIndex: 2,
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            left: "23px",
                            top: "110px", // Adjust spacing for the last dot
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            zIndex: 2,
                          }}
                        />
                      </>
                    )}
                  </Box>
                )}

                {/* Order Dispatched - Show button if accepted, or status if already dispatched or completed */}
                {orderStatus === "accepted" ? (
                  <Button
                    onClick={handleDispatchOrder}
                    sx={{
                      mb: 1,
                      p: 1.5,
                      width: "100%",
                      backgroundColor: "#C6AF5F",
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#d6bf6f",
                      },
                    }}
                  >
                    Order Dispatched
                  </Button>
                ) : (
                  (orderStatus === "dispatched" ||
                    orderType === "completed") && (
                    <Box
                      sx={{
                        position: "relative",
                        mb: 1,
                        padding: 1,
                        border: "1px solid rgb(65, 64, 64)",
                        borderRadius: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          margin: "5px",
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "#EEE692",
                            mr: 1,
                            width: 24,
                            height: 24,
                          }}
                        >
                          <IconButton sx={{ p: 0 }}>
                            <Done sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Avatar>
                        <Avatar
                          sx={{
                            bgcolor: "#C6AF5F",
                            mr: 1,
                            width: 24,
                            height: 24,
                          }}
                        >
                          <IconButton sx={{ p: 0 }}>
                            <PersonIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Avatar>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography variant="body1">
                            Order Dispatched
                          </Typography>
                          <Typography variant="body2">14 November</Typography>
                        </Box>

                        <Typography variant="body2" sx={{ ml: "auto" }}>
                          2:55 PM
                        </Typography>
                      </Box>
                      {/* Vertical line for completed orders */}
                      {orderType === "completed" && (
                        <>
                          <Box
                            sx={{
                              position: "absolute",
                              left: "23px", // Adjust slightly to center the dots
                              top: "50px", // Adjust for initial dot position
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "yellow",
                              zIndex: 2,
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              left: "23px",
                              top: "65px", // Adjust spacing between dots
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "yellow",
                              zIndex: 2,
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              left: "23px",
                              top: "80px", // Adjust spacing
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "yellow",
                              zIndex: 2,
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              left: "23px",
                              top: "95px", // Adjust spacing
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "yellow",
                              zIndex: 2,
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              left: "23px",
                              top: "110px", // Adjust spacing for the last dot
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "yellow",
                              zIndex: 2,
                            }}
                          />
                        </>
                      )}
                    </Box>
                  )
                )}

                {/* Order Received - Only for completed orders */}
                {orderType === "completed" && (
                  <Box
                    sx={{
                      position: "relative",
                      mb: 1,
                      padding: 1,
                      border: "1px solid rgb(65, 64, 64)",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#EEE692",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <Done sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: "#C6AF5F",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <PersonIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body1">
                          Order Recived at Buyer
                        </Typography>
                        <Typography variant="body2">16 November</Typography>
                      </Box>

                      <Typography variant="body2" sx={{ ml: "auto" }}>
                        2:55 PM
                      </Typography>
                    </Box>
                    <>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px", // Adjust slightly to center the dots
                          top: "50px", // Adjust for initial dot position
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "65px", // Adjust spacing between dots
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "80px", // Adjust spacing
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "95px", // Adjust spacing
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "23px",
                          top: "110px", // Adjust spacing for the last dot
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "yellow",
                          zIndex: 2,
                        }}
                      />
                    </>
                  </Box>
                )}

                {/* Order Completed - Only for completed orders */}
                {orderType === "completed" && (
                  <Box
                    sx={{
                      position: "relative",
                      mb: 1,
                      padding: 1,
                      border: "1px solid rgb(65, 64, 64)",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#EEE692",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <Done sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: "#C6AF5F",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <PersonIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body1">Order Completed</Typography>
                        <Typography variant="body2">16 November</Typography>
                      </Box>

                      <Typography variant="body2" sx={{ ml: "auto" }}>
                        2:55 PM
                      </Typography>
                    </Box>
                  </Box>
                )}

                {/* Check Review button - Only visible when dispatched or for completed orders */}
                {orderStatus === "dispatched" && orderType !== "completed" && (
                  <Button
                    onClick={openReviewModal}
                    sx={{
                      mb: 1,
                      p: 1.5,
                      width: "100%",
                      backgroundColor: "#C6AF5F",
                      borderRadius: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#d6bf6f",
                      },
                    }}
                  >
                    Check Review
                  </Button>
                )}
              </Box>

              <Dialog
                open={reviewModalOpen}
                onClose={closeReviewModal}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                  sx: {
                    backgroundColor: "#2d2d2d",
                    color: "white",
                    borderRadius: 2,
                    boxShadow: 24,
                  },
                }}
              >
                <DialogContent sx={{ p: 3 }}>
                  {/* Close button */}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton
                      onClick={closeReviewModal}
                      sx={{ color: "white", p: 1 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {/* Review Rating */}
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Average Rating
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      4.0
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                    >
                      <StarIcon sx={{ color: "#FFB321" }} />
                      <StarIcon sx={{ color: "#FFB321" }} />
                      <StarIcon sx={{ color: "#FFB321" }} />
                      <StarIcon sx={{ color: "#FFB321" }} />
                      <StarBorderIcon sx={{ color: "##FFB321" }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      Given Star
                    </Typography>
                  </Box>

                  {/* User Review */}
                  <Box
                    sx={{
                      border: "1px solid #444",
                      borderRadius: 2,
                      p: 2,

                      color: "white",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Avatar sx={{ bgcolor: "black", mr: 2 }}>M</Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 500 }}
                        >
                          Mich Jorden
                        </Typography>
                        <Typography variant="caption" sx={{ color: "gray" }}>
                          19 sep, 2024
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", mb: 1 }}>
                      <StarIcon sx={{ color: "#FFB321", fontSize: 20 }} />
                      <StarIcon sx={{ color: "#FFB321", fontSize: 20 }} />
                      <StarIcon sx={{ color: "#FFB321", fontSize: 20 }} />
                      <StarBorderIcon sx={{ color: "#FFB321", fontSize: 20 }} />
                      <StarBorderIcon sx={{ color: "#FFB321", fontSize: 20 }} />
                    </Box>

                    <Typography variant="body2" sx={{ color: "white" }}>
                      I recently invested in a new keyboard, and I must say, it
                      has truly transformed my computing experience.
                    </Typography>
                  </Box>
                </DialogContent>
              </Dialog>

              {/* Action Buttons - Different based on order type */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                {/* For pending orders that are not yet accepted */}
                {orderType === "pending" && orderStatus === "placed" && (
                  <>
                    <Button
                      variant="contained"
                      sx={{
                        flex: 1,
                        bgcolor: "#444",
                        color: "white",
                        py: 2,
                        "&:hover": { bgcolor: "yellow" },
                      }}
                    >
                      Cancel Order
                    </Button>

                    <Button
                      variant="contained"
                      onClick={handleAcceptOrder}
                      sx={{
                        flex: 1,
                        bgcolor: "#C6AF5F",
                        color: "black",
                        fontWeight: "bolder",
                        py: 2,
                        "&:hover": { bgcolor: "#d6bf6f" },
                      }}
                    >
                      Accept Order
                    </Button>
                  </>
                )}

                {/* For cancelled orders */}
                {orderType === "cancelled" && (
                  <Box
                    sx={{
                      position: "relative",
                      mb: 1,
                      padding: 1,
                      border: "1px solid rgb(65, 64, 64)",
                      borderRadius: 2,
                      width: "1000px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#EEE692",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <Done sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>
                      <Avatar
                        sx={{
                          bgcolor: "#C6AF5F",
                          mr: 1,
                          width: 24,
                          height: 24,
                        }}
                      >
                        <IconButton sx={{ p: 0 }}>
                          <PersonIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Avatar>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body1">Cancelled Order</Typography>
                        <Typography variant="body2">14 November</Typography>
                      </Box>

                      <Typography variant="body2" sx={{ ml: "auto" }}>
                        2:56 PM
                      </Typography>
                    </Box>
                  </Box>
                )}

                {/* For completed orders */}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};
