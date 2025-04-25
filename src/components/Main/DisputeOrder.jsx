import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { OrderDispute } from "./OrderDispute";

export const DisputeOrder = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  // Add new state to track if we should show the OrderDispute component
  const [showDispute, setShowDispute] = useState(false);
  // Add state to track which dispute was clicked (optional, for passing data)
  const [selectedDispute, setSelectedDispute] = useState(null);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update handleClick to set showDispute to true
  const handleClick = (disputeData) => {
    setSelectedDispute(disputeData);
    setShowDispute(true);
  };
  
  // Add a back button handler
  const handleBack = () => {
    setShowDispute(false);
  };

  // If showDispute is true, render the OrderDispute component
  if (showDispute) {
    return (
      <Box 
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          px: 2,
        }}
      >
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBack}
          sx={{ 
            color: "#e0c56e", 
            alignSelf: "flex-start", 
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(224, 197, 110, 0.1)'
            }
          }}
        >
          Back to Disputes
        </Button>
        <OrderDispute disputeData={selectedDispute} />
      </Box>
    );
  }

  // Original DisputeOrder view
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          {/* Tabs */}
          <Box sx={{ display: "flex", mb: 3 }}>
            <Box
              onClick={() => handleTabChange("active")}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 2,
                cursor: "pointer",
                bgcolor: activeTab === "active" ? "#fff" : "transparent",
                color: activeTab === "active" ? "#000" : "#fff",
                border: activeTab === "active" ? "1px solid #fff" : "1px solid #333",
                borderRadius: 3,
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Active
            </Box>
            <Box
              onClick={() => handleTabChange("closed")}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 2,
                cursor: "pointer",
                bgcolor: activeTab === "closed" ? "#fff" : "transparent",
                color: activeTab === "closed" ? "#000" : "#fff",
                border: activeTab === "closed" ? "1px solid #fff" : "1px solid #333",
                borderRadius: 3,
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Closed
            </Box>
          </Box>

          {/* First Dispute Card */}
          <Box 
            onClick={() => handleClick({
              shopName: "Burhan Judai",
              orderId: "ALREEM_1",
              status: activeTab === "active" ? "Active" : "Closed",
              reason: "Not Recognized",
              description: "This Product Usually I am Not Use I Need to Order the New Product."
            })}
            sx={{
              mb: 3,
              p: 3,
              borderRadius: 2,
              bgcolor: "#29292A",
              border: "1px solid rgb(65, 64, 64)",
              cursor: "pointer",
              
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#e0c56e",
                mb: 3,
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Order Disputes
            </Typography>

            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body1" color="#fff" sx={{ flex: 1 }}>
                Disputes Status:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: activeTab === "active" ? "#e0c56e" : "red",
                  textAlign: "right",
                }}
              >
                {activeTab === "active" ? "Active" : "Closed"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body1" color="#fff" sx={{ flex: 1 }}>
                Order ID:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#e0c56e", textAlign: "right" }}
              >
                ALREEM_1
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 3 }}>
              <Typography variant="body1" color="#fff" sx={{ flex: 1 }}>
                Reason of Disputes:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#e0c56e", textAlign: "right" }}
              >
                Not Recognized
              </Typography>
            </Box>

            <Box
              sx={{
                height: "1px",
                bgcolor: "#444",
                width: "100%",
                my: 3,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "#e0c56e",
                mb: 2,
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Describe the Reasons
            </Typography>

            <Typography variant="body1" sx={{ color: "#888" }}>
              This Product Usually I am Not Use I Need to Order the New Product.
            </Typography>
          </Box>

          {/* Second Dispute Card */}
          <Box 
            onClick={() => handleClick({
              shopName: "Burhan Judai",
              orderId: "ALREEM_1",
              status: activeTab === "active" ? "Active" : "Closed",
              reason: "Not Recognized",
              description: "This Product Usually I am Not Use I Need to Order the New Product."
            })}
            sx={{
              mb: 3,
              p: 3,
              borderRadius: 2,
              bgcolor: "#29292A",
              border: "1px solid rgb(65, 64, 64)",
              cursor: "pointer",
              
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#e0c56e",
                mb: 3,
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Order Disputes
            </Typography>

            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body1" color="#fff" sx={{ flex: 1 }}>
                Disputes Status:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: activeTab === "active" ? "#e0c56e" : "red",
                  textAlign: "right",
                }}
              >
                {activeTab === "active" ? "Active" : "Closed"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body1" color="#fff" sx={{ flex: 1 }}>
                Order ID:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#e0c56e", textAlign: "right" }}
              >
                ALREEM_1
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 3 }}>
              <Typography variant="body1" color="#fff" sx={{ flex: 1 }}>
                Reason of Disputes:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#e0c56e", textAlign: "right" }}
              >
                Not Recognized
              </Typography>
            </Box>

            <Box
              sx={{
                height: "1px",
                bgcolor: "#444",
                width: "100%",
                my: 3,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "#e0c56e",
                mb: 2,
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Describe the Reasons
            </Typography>

            <Typography variant="body1" sx={{ color: "#888" }}>
              This Product Usually I am Not Use I Need to Order the New Product.
            </Typography>
          </Box>
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
                  bgcolor: currentPage === 1 ? "#fff" : "transparent",
                  color: currentPage === 1 ? "#000" : "#fff",
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
                  bgcolor: currentPage === 2 ? "#fff" : "transparent",
                  color: currentPage === 2 ? "#000" : "#fff",
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
                  bgcolor: currentPage === 3 ? "#fff" : "transparent",
                  color: currentPage === 3 ? "#000" : "#fff",
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
                  bgcolor: currentPage === 11 ? "#fff" : "transparent",
                  color: currentPage === 11 ? "#000" : "#fff",
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
                  bgcolor: currentPage === 12 ? "#fff" : "transparent",
                  color: currentPage === 12 ? "#000" : "#fff",
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
                  bgcolor: currentPage === 13 ? "#fff" : "transparent",
                  color: currentPage === 13 ? "#000" : "#fff",
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
    </Box>
  );
};

export default DisputeOrder;