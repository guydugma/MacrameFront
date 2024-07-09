import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";
import { useInViewport } from "../../hooks/useInViewPort";
function Header() {


  return (
    <Container className="site-header text-black font-extralight  text-center " maxWidth={false} sx={{
      borderBottom: "1px solid aquamarine",
      px: { lg: 0 },
      display: "flex",
      position: "fixed",
      zIndex: 100,
    }}>
      <Navbar />
    </Container>
  );
}

export default Header;
