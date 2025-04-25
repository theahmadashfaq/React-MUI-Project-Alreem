import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  IconButton, 
  Avatar, 
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from '@mui/icons-material/Info';

export const ChatSupport = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  return (
    <Box sx={{ 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      bgcolor: "#29292A",
      border: "1px solid rgb(65, 64, 64)",
      width:"97%",
      marginLeft:"20px",
      marginTop:"10px"
    }}>
      {/* Header */}
      <Box sx={{ 
        p: 2, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        border: "1px solid rgb(65, 64, 64)",
        position: "relative" 
      }}>
        <IconButton 
          sx={{ 
            position: "absolute", 
            right: 12, 
            top: 12, 
            color: "#fff" 
          }}
          onClick={handleOpenDialog}
        >
          <MoreVertIcon />
        </IconButton>
        
        <Box sx={{ 
          borderRadius: "50%", 
          bgcolor: "#000", 
          p: 2, 
          mb: 2 
        }}>
          <img 
            src="alreempic.png" 
            alt="Alreem Logo"
            style={{ 
              width: 120, 
              height: 120,
              display: "block" 
            }} 
          />
        </Box>
        
        <Typography sx={{ 
          color: "#fff", 
          textAlign: "center", 
          px: 4,
          fontSize: "0.95rem",
          mb: 2 
        }}>
          Welcome to Alreem Chat Support. Seller and buyer are requested to resolve their dispute via chat support. In case of no solution contact admin in the chat.
        </Typography>
        
        <Chip
          icon={<Box><InfoIcon/></Box>}
          label="Seller has opened a dispute"
          sx={{
            bgcolor: "transparent",
            color: "#fff",
            borderRadius: 4,
            border:"1px solid grey",
            py: 0.5,
            fontWeight: 400
          }}
        />
      </Box>
      
      {/* Chat Messages */}
      <Box sx={{ 
        flexGrow: 1, 
        overflowY: "auto", 
        p: 2,
        display: "flex",
        flexDirection: "column"
      }}>

        {/* Buyer Message */}
        <Box sx={{ 
          display: "flex", 
          alignItems: "flex-start", 
          mb: 4,
        }}>
          <Avatar src="aq.jpeg" sx={{ mr: 1.5, width: 36, height: 36, mt:10 }} />
          <Box>
            <Box sx={{ 
              display: "flex", 
              flexDirection:"column",
              mb: 0.5
            }}>
              <Box sx={{ 
                maxWidth: 110
              }}>
                <img 
                  src="ring.png" 
                  alt="Ring"
                  style={{ 
                    maxWidth: "100%", 
                    display: "block", 
                    borderRadius: 4 
                  }} 
                />
              </Box>

              <Box sx={{ 
                display:"flex",
                alignItems: "center", 
                justifyContent: "flex-end", 
                mb: 0.5,
                mt:1
              }}>
                <Typography sx={{ 
                  color: "#909083", 
                  fontSize: "0.8rem",
                  mr:1
                }}>
                  09:01 am
                </Typography>
                <Typography sx={{ 
                  color: "#fff", 
                  fontWeight: 500,
                  mr: 1
                }}>
                  Micheal
                </Typography>
                <Typography sx={{ 
                  color: "#EEE677", 
                  mr: 1
                }}>
                  Buyer
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ 
              display: "flex", 
              alignItems: "center" 
            }}>
            </Box>
          </Box>
        </Box>
        
        {/* Seller Message */}
        <Box sx={{ 
          display: "flex", 
          alignItems: "flex-start", 
          justifyContent: "flex-end",
          mb: 2
        }}>
          <Box sx={{ textAlign: "right" }}>
            <Box sx={{
              bgcolor: "transparent",
              color: "#EEE677",
              p: 1,
              border:"1px solid grey",
              borderRadius: 2,
              maxWidth: 300,
              borderBottomRightRadius: 0
            }}>
              What is any reason this product is in dispute?
            </Box>

            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "flex-end", 
              mb: 0.5,
              mt:1
            }}>
              <Typography sx={{ 
                color: "#909083", 
                fontSize: "0.8rem",
                mr:1
              }}>
                09:02 am
              </Typography>
              <Typography sx={{ 
                color: "#fff", 
                fontWeight: 500,
                mr: 1
              }}>
                David
              </Typography>
              <Typography sx={{ 
                color: "#EEE677", 
                mr: 1
              }}>
                Seller
              </Typography>
            </Box>
          </Box>

          <Box sx={{marginTop:"25px"}}>
            <Avatar  
              src="avatar.png" sx={{border: "2px solid #EEE692",ml: 1.5, width: 36, height: 36 }} />
          </Box>
        </Box>
      </Box>
      
      {/* Message Input */}
      <Box sx={{ 
        p: 1.5, 
        borderTop: "1px solid #3d4348", 
        backgroundColor:"black"
      }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          bgcolor: "#1e1e1e", 
          borderRadius: 6,
          pr: 1
        }}>
          <TextField
            fullWidth
            placeholder="Type message..."
            variant="standard"
            InputProps={{
              disableUnderline: true
            }}
            sx={{
              px: 2,
              py: 1,
              "& .MuiInputBase-input": {
                color: "#fff"
              }
            }}
          />
          <IconButton sx={{ color: "#555" }}>
            <AttachFileIcon />
          </IconButton>
          <IconButton sx={{ 
            color: "#D4AF37", 
            bgcolor: "#2c2c2c",
            "&:hover": {
              bgcolor: "#3c3c3c"
            }
          }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>



      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            bgcolor: '#212121',
            color: '#fff',
            borderRadius: 7,
            border:"1px solid rgb(65, 64, 64)",
            width:"50%"
          }
        }}
      >
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography sx={{ color: '#EEE677', fontWeight: 500 }}>
            Invite Admin
          </Typography>
        </Box>
        <Box sx={{ 
        
          borderBottom: '1px solid  grey',
            p:2,
            
        }}>
          <Typography align="center" sx={{fontSize:"14px"}}>
            Are you sure you want the admin to invite in this chat?
          </Typography>
        </Box>
        <Box sx={{ 
          borderBottom: '1px solid grey',
          py: 2
        }}>
          <Button 
            fullWidth 
            
            sx={{ 
              color: '#fff',
              fontSize:"14px",
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)'
              }
            }}
          >
            Yes, invite
          </Button>
        </Box>
        <Box sx={{ py: 2 }}>
          <Button 
            fullWidth 
            onClick={handleCloseDialog}
            sx={{ 
              color: '#f44336',
              fontSize:"14px",
              '&:hover': {
                bgcolor: 'rgba(244, 67, 54, 0.08)'
              }
            }}
          >
            cancel
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};