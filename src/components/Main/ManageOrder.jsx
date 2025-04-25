import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Grid,
  Stack
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { OrderDetail } from './OrderDetail';

export const ManageOrder = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDetailsClick = (orderInfo) => {
    let orderType;
    if (activeTab === 0) orderType = 'pending';
    else if (activeTab === 1) orderType = 'completed';
    else orderType = 'cancelled';
    
    setSelectedOrder({
      ...orderInfo,
      orderType
    });
    setShowDetails(true);
  };

  const handleBackToOrders = () => {
    setShowDetails(false);
    setSelectedOrder(null);
  };

  if (showDetails) {
    return <OrderDetail 
      onBack={handleBackToOrders} 
      orderType={selectedOrder?.orderType} 
      orderData={selectedOrder} 
    />;
  }

  return (


     <Box
        sx={{
         
          // height: '100vh',
          color: 'white' ,
          display: 'flex',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            width:"100%",
            
           
           
          }}
        >
   
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        sx={{
          mb: 3,
          backgroundColor: '#2d2d2d',
          border: "1px solid rgb(65, 64, 64)",
          borderRadius: 2,
        }}
      >
        <Tab
          label="Pending"
          sx={{
            backgroundColor: activeTab === 0 ? 'white' : 'transparent',
            color: activeTab === 0 ? 'black !important' : 'white !important',
            minWidth: '33%',
            p: 2,
            fontSize: 18,
          }}
        />
        <Tab
          label="Completed"
          sx={{
            backgroundColor: activeTab === 1 ? 'white' : 'transparent',
            color: activeTab === 1 ? 'black !important' : 'white !important',
            minWidth: '33%',
            p: 2,
            fontSize: 18
          }}
        />
        <Tab
          label="Cancelled"
          sx={{
            backgroundColor: activeTab === 2 ? 'white' : 'transparent',
            color: activeTab === 2 ? 'black !important' : 'white !important',
            minWidth: '33%',
            p: 2,
            fontSize: 18
          }}
        />
      </Tabs>

      {activeTab === 0 && (
        <>
          <Card sx={{ mb: 2, border: "1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="shoe.png"
                      alt="Vitality vibe"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ marginTop: "10px", color: "white" }}>
                      Only 1 items
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Vitality vibe</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Delivery on: <span style={{ color: '#f0c14b' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                      marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                      name: "Vitality vibe",
                      orderId: "UAE-095498745",
                      delivery: "02:09 AM Thursday 21, July 2024",
                      items: 1
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ mb: 2,border:"1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="ring.png"
                      alt="Golden Ring"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box >
                  <Typography variant="body2" sx={{marginTop:"10px",  color: "white" }}>
                    Only 3 items
                  </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Golden Ring</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Delivery on: <span style={{ color: '#f0c14b' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                       marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                      name: "Golden Ring",
                      orderId: "UAE-095498745",
                      delivery: "02:09 AM Thursday 21, July 2024",
                      items: 3
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
         
         <Card sx={{ mb: 2,border:"1px solid rgb(65, 64, 64)",  backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="power.png"
                      alt="Power Bank"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box >
                  <Typography variant="body2" sx={{marginTop:"10px",  color: "white" }}>
                    Only 5 items
                  </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Power Bank</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Delivery on: <span style={{ color: '#f0c14b' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                       marginLeft:"100%",
                      px: 3
                    }}
                    onClick={() => handleDetailsClick({
                      name: "Power Bank",
                      orderId: "UAE-095498745",
                      delivery: "02:09 AM Thursday 21, July 2024",
                      items: 5
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Pending Order 3 */}
        
        </>
      )}

      {activeTab === 1 && (
        <>
         
      <Card sx={{ mb: 2,border:"1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="power.png"
                      alt="Power Bank"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box >
                  <Typography variant="body2" sx={{marginTop:"10px",  color: "white" }}>
                    Only 5 items
                  </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Power Bank</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Delivered on: <span style={{ color: '#4CAF50' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                       marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                      name: "Golden Ring",
                      orderId: "UAE-095498745",
                      delivered: "02:09 AM Thursday 21, July 2024",
                      items: 3
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>


          <Card sx={{ mb: 2, border: "1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="ring.png"
                      alt="Golden Ring"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ marginTop: "10px", color: "white" }}>
                      Only 3 items
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Golden Ring</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Delivered on: <span style={{ color: '#4CAF50' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                      marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                      name: "Golden Ring",
                      orderId: "UAE-095498745",
                      delivered: "02:09 AM Thursday 21, July 2024",
                      items: 3
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* Completed Order 3 */}
          <Card sx={{ mb: 2, border:"1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="shoe.png"
                      alt="Vitality vibe"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box >
                  <Typography variant="body2" sx={{marginTop:"10px",  color: "white" }}>
                    Only 1 items
                  </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Vitality vibe</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Delivered on: <span style={{ color: '#4CAF50' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
               
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                        marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                      name: "Golden Ring",
                      orderId: "UAE-095498745",
                      delivered: "02:09 AM Thursday 21, July 2024",
                      items: 3
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab === 2 && (
        <>
          <Card sx={{ mb: 2, border: "1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="shoe.png"
                      alt="Vitality vibe"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ marginTop: "10px", color: "white" }}>
                      Only 1 items
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Vitality vibe</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Cancelled on: <span style={{ color: '#FF5252' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                       marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                     
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
  

          {/* Cancelled Order 3 */}
          <Card sx={{ mb: 2,border:"1px solid rgb(65, 64, 64)",  backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="ring.png"
                      alt="Golden Ring"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box >
                  <Typography variant="body2" sx={{marginTop:"10px",  color: "white" }}>
                    Only 3 items
                  </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Golden Ring</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Cancelled on: <span style={{ color: '#FF5252' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                 
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                       marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                     
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>


          <Card sx={{ mb: 2, border:"1px solid rgb(65, 64, 64)", backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Box sx={{ width: 100, height: 100 }}>
                    <img
                      src="power.png"
                      alt="Power Bank"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                    />
                  </Box>
                  <Box >
                  <Typography variant="body2" sx={{marginTop:"10px",  color: "white" }}>
                    Only 5 items
                  </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>Power Bank</Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    order on: <span style={{ color: '#f0c14b' }}>UAE-095498745</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Cancelled on: <span style={{ color: '#FF5252' }}>02:09 AM Thursday 21, July 2024</span>
                  </Typography>
                
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#C6AF5F',
                      color: 'black',
                      fontWeight: "bold",
                      px: 3,
                        marginLeft:"100%"
                    }}
                    onClick={() => handleDetailsClick({
                     
                    })}
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
                    <Stack direction="row" sx={{ display: "flex", flex: 1, justifyContent: "center" }} spacing={2}>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: 'white',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            1
                        </Box>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            2
                        </Box>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            3
                        </Box>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            ...
                        </Box>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            11
                        </Box>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            12
                        </Box>
                        <Box
                            component="button"
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            13
                        </Box>
                    </Stack>

                    <Box sx={{ display: 'flex' }}>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            variant="outlined"
                            sx={{
                                color: '#fff',
                                borderColor: '#444',
                                borderRadius: 0,
                                mr: 1,
                                px: 2,
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#666',
                                    bgcolor: 'rgba(255,255,255,0.05)'
                                }
                            }}
                        >
                            Previous
                        </Button>

                        <Button
                            endIcon={<ArrowForwardIcon />}
                            variant="outlined"
                            sx={{
                                color: '#fff',
                                borderColor: '#444',
                                borderRadius: 0,
                                px: 2,
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#666',
                                    bgcolor: 'rgba(255,255,255,0.05)'
                                }
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
