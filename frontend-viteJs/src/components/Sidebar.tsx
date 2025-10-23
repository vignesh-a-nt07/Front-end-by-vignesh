import React from "react";
import { getUserRole } from "../utils/auth";
import HirehubLogo from '../assets/navat-logo.svg';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";


const getMenuItems = () => {
  const items = [
    { label: "Dashboard", href: "/" },
    { label: "Job Posts", href: "/jobposts" },
    { label: "Candidate List", href: "/candidates" },
    { label: "Configurations", href: "/settings" },
  ];
  if (getUserRole() === "admin") {
    items.push({ label: "User Management", href: "/users" });
  }
  return items;
};

const handleLogout = () => {
  sessionStorage.removeItem("session_token");
  window.location.href = "/";
};


const Sidebar: React.FC = () => {
  const menuItems = getMenuItems();
  return (
    <Box
      sx={{
        width: 260,
        minHeight: "100vh",
        bgcolor: "#1976d2", // Custom blue color for navbar
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        p: 2,
        position: "relative",
        zIndex: 10,
      }}
      className="border-end"
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <img src={HirehubLogo} alt="HireHub Logo" style={{ width: 48, height: 48, marginBottom: 8 }} />
        <div className="fw-bold" style={{ fontSize: "1.2rem", color: "#fff" }}>HireHub ATS</div>
      </Box>
      <Divider />
      <nav aria-label="sidebar menu">
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ borderRadius: 2 }}>
                <NavLink
                  to={item.href}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#fff" : "#e3e3e3",
                    fontWeight: isActive ? "bold" : "normal",
                    width: "100%",
                    display: "block",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: isActive ? "#1565c0" : "transparent"
                  })}
                >
                  {item.label}
                </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2, borderRadius: 2, fontWeight: "bold" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </nav>
      <Divider sx={{ mt: 3 }} />
      <Box sx={{ textAlign: "center", pt: 2, color: "#e3e3e3", fontSize: "0.95rem" }}>
        &copy; 2025 HireHub ATS. All rights reserved.
      </Box>
    </Box>
  );
};

export default Sidebar;
