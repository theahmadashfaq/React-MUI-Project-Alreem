import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { yellow } from "@mui/material/colors";

export const EditShop = () => {
  const [value, setValue] = useState();
  const [selectedCity, setSelectedCity] = useState("Dubai");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: "#212121",
        borderRadius: 2,
        padding: { xs: 2, sm: 3 },
        boxShadow: 3,
        color: "white",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            position: "relative",
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
          }}
        >
          <img
            src="ooo.jpeg"
            alt="Shop"
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: 8,
              objectFit: 'cover'
            }}
          />
          
          {/* Cross Button - Positioned relative to image */}
          <IconButton 
            aria-label="close"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              padding: 0,
              backgroundColor: "grey",
              
              width: { xs: 28, sm: 32 },
              height: { xs: 28, sm: 32 },
            }}
          >
            <CloseIcon
              sx={{
                color: "white",
                fontSize: { xs: 16, sm: 20 },
              }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* Form Fields */}
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 2, md: 5 },
          color: "white" 
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography>Shop Name</Typography>
          <TextField
            sx={{
              backgroundColor: "#2C2C2C",
              padding: 1,
              paddingBottom: 0,
              border: "1px solid rgb(65, 64, 64)",
              borderRadius: 2,
              "& .MuiInput-input::placeholder": {
                color: "white",
              },
            }}
            fullWidth
            placeholder="Grade Lab"
            variant="standard"
            margin="normal"
            size="small"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography>Shop Tagline (Optional)</Typography>
          <TextField
            sx={{
              backgroundColor: "#2C2C2C",
              padding: 1,
              paddingBottom: 0,
              border: "1px solid rgb(65, 64, 64)",
              borderRadius: 2,
              "& .MuiInput-input::placeholder": {
                color: "white",
              },
            }}
            fullWidth
            variant="standard"
            margin="normal"
            color="primary"
            size="small"
            placeholder="headphones or audio equipment; possibly offering unique..."
          />
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 2, md: 5 },
          color: "white" 
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography>Shop Category</Typography>
          <TextField
            sx={{
              backgroundColor: "#2C2C2C",
              padding: 1,
              paddingBottom: 0,
              border: "1px solid rgb(65, 64, 64)",
              borderRadius: 2,
              "& .MuiInput-input::placeholder": {
                color: "white",
              },
            }}
            fullWidth
            placeholder="Select"
            variant="standard"
            margin="normal"
            size="small"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography>Website URL (Optional)</Typography>
          <TextField
            sx={{
              backgroundColor: "#2C2C2C",
              padding: 1,
              paddingBottom: 0,
              border: "1px solid rgb(65, 64, 64)",
              borderRadius: 2,
              "& .MuiInput-input::placeholder": {
                color: "white",
              },
            }}
            fullWidth
            variant="standard"
            margin="normal"
            color="primary"
            size="small"
            placeholder="gradolabs@gmail.com"
          />
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 2, md: 5 },
          color: "white" 
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{marginTop: "18px"}}>Phone Number</Typography>
          <Box>
            <PhoneInput
              style={{
                backgroundColor: "#2C2C2C",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid rgb(65, 64, 64)",
                padding: "8px",
                color: "white"
              }}
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              size="small"
            />
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth margin="normal" size="small">
            <Typography>City</Typography>
            <Select
              sx={{ 
                backgroundColor: "#2C2C2C", 
                color: "white",
                border: "1px solid rgb(65, 64, 64)",
                borderRadius: 2,
              }}
              id="city"
              value={selectedCity}
              onChange={handleCityChange}
              variant="outlined"
              color="primary"
            >
              <MenuItem value="ajman">Ajman</MenuItem>
              <MenuItem value="Dubai">Dubai</MenuItem>
              <MenuItem value="abuDhabi">Abu Dhabi</MenuItem>
              <MenuItem value="fujairah">Fujairah</MenuItem>
              <MenuItem value="rasAlKhaimah">Ras Al Khaimah</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <Typography>Write Description</Typography>
        <TextField
          sx={{
            backgroundColor: "#2C2C2C",
            padding: 1,
            paddingBottom: 0,
            border: "1px solid rgb(65, 64, 64)",
            borderRadius: 2,
            marginBottom: "20px",
            "& .MuiInput-input::placeholder": {
              color: "white",
            },
          }}
          fullWidth
          variant="standard"
          margin="normal"
          color="primary"
          multiline
          rows={4}
          size="small"
          placeholder="write the description about your shop..."
        />
      </Box>

      {/* Checkbox */}
      <FormControlLabel
        label={
          <Typography variant="caption" sx={{ color: "grey" }}>
            By Continuing you agree to our{" "}
            <Typography component="span" sx={{ color: "#f0e080" }}>
              TERMS & CONDITION
            </Typography>
            {" "}regarding the
            <Typography
              component="span"
            >
              {" "}Seller account.
            </Typography>
          </Typography>
        }
        control={
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: yellow[200],
              },
            }}
          />
        }
      />

      {/* Save Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#f0e080",
          color: "#333",
          py: 1,
          mt: 2,
          "&:hover": { bgcolor: "#e0d070" },
        }}
        fullWidth
      >
        Save
      </Button>
    </Box>
  );
};