import React from 'react';
import { Box, Avatar, Typography, Button, TextField, InputAdornment, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Inbox = () => {
  return (


    <Box
    sx={{
      
      minHeight: '100vh',
   
      display: 'flex',
      justifyContent: 'center',
      px: 2,
    }}
  >
    <Box
      sx={{
        width: "100%",
       
       
      }}
    >
      {/* Search Bar */}
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', backgroundColor: 'black', borderRadius: 1 , border:"1px solid  rgb(65, 64, 64)"}}>
        <TextField
          sx={{
            backgroundColor: 'black',
            padding:"10px",
            '& .MuiInput-input::placeholder': {
              color: 'white',
            },
          }}
          fullWidth
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}

        />
      </Box>

      {/* Chat Cards */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 3,
            mb: 2,
            backgroundColor: '#212121',
            borderRadius: 2,
             border:"1px solid  rgb(65, 64, 64)"
          }}
        >
          <Avatar alt="Michal Jorden" src="avatar.png" sx={{ width: 80, height: 80, mr: 3 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white">
              Michal Jorden
            </Typography>
            <Typography variant="subtitle1" color="white">
              Buyer
            </Typography>
          </Box>
          <Button variant="contained" sx={{ padding: '10px 20px', backgroundColor: '#f0e080', color: '#333', '&:hover': { backgroundColor: '#e0d070' } }}>
            Go to Chat
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 3,
            mb: 2,
            backgroundColor: '#212121',
            borderRadius: 2,
             border:"1px solid  rgb(65, 64, 64)"
          }}
        >
          <Avatar alt="Whilson Doe" src="doe.png" sx={{ width: 80, height: 80, mr: 3 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white">
              Whilson Doe
            </Typography>
            <Typography variant="subtitle1" color="white">
              Buyer
            </Typography>
          </Box>
          <Button variant="contained" sx={{ padding: '10px 20px', backgroundColor: '#f0e080', color: '#333', '&:hover': { backgroundColor: '#e0d070' } }}>
            Go to Chat
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 3,
            mb: 2,
            backgroundColor: '#212121',
            borderRadius: 2,
             border:"1px solid  rgb(65, 64, 64)"
          }}
        >
          <Avatar alt="John Doe" src="john.png" sx={{ width: 80, height: 80, mr: 3 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white">
              John Doe
            </Typography>
            <Typography variant="subtitle1" color="white">
              Buyer
            </Typography>
          </Box>
          <Button variant="contained" sx={{ padding: '10px 20px', backgroundColor: '#f0e080', color: '#333', '&:hover': { backgroundColor: '#e0d070' } }}>
            Go to Chat
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 3,
            mb: 2,
            backgroundColor: '#212121',
            borderRadius: 2,
             border:"1px solid  rgb(65, 64, 64)"
          }}
        >
          <Avatar alt="David Robert" src="dav.png" sx={{ width: 80, height: 80, mr: 3 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white">
              David Robert
            </Typography>
            <Typography variant="subtitle1" color="white">
              Buyer
            </Typography>
          </Box>
          <Button variant="contained" sx={{ padding: '10px 20px', backgroundColor: '#f0e080', color: '#333', '&:hover': { backgroundColor: '#e0d070' } }}>
            Go to Chat
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 3,
            mb: 2,
            backgroundColor: '#212121',
            borderRadius: 2,
             border:"1px solid  rgb(65, 64, 64)"
          }}
        >
          <Avatar alt="Daniel Joseph" src="dan.png" sx={{ width: 80, height: 80, mr: 3 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white">
              Daniel Joseph
            </Typography>
            <Typography variant="subtitle1" color="white">
              Buyer
            </Typography>
          </Box>
          <Button variant="contained" sx={{ padding: '10px 20px', backgroundColor: '#f0e080', color: '#333', '&:hover': { backgroundColor: '#e0d070' } }}>
            Go to Chat
          </Button>
        </Box>

        
      </Box>
    </Box>

</Box>



  
  );
};