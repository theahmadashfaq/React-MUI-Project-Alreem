// import React from "react";
// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import { Navbar } from "../Header/Navbar";
// import { Sidebar } from "../Main/Sidebar";

// export const Layout = () => {
//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#29292A" }}>
//       {/* Sidebar */}
//       <Box
//         sx={{
//           width: 240,
//           bgcolor: "#1e1e1e",
//           color: "white",
//         }}
//       >
//         <Sidebar />
//       </Box>

//       {/* Main Content Area */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* Navbar */}
//         <Box>
//           <Navbar />
//         </Box>

//         {/* Page Content - This will be replaced by the matching route */}
//         <Box
//           sx={{
//             flex: 1,
//             padding: 4,
//             overflowY: "auto",
//           }}
//         >
//           <Outlet />
//         </Box>
//       </Box>
//     </Box>
//   );
// };