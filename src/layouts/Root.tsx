import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, styled } from '@mui/material';
import "../index.css"
import { useState, useEffect } from "react";
import { useInViewport } from "../hooks/useInViewPort";
import React from "react";


const Root = () => {

  const logoBanner = document.querySelector('.site-banner') as HTMLElement;
  const siteHeader = document.querySelector('.site-header') as HTMLElement;

  const [scrollYPosition, setScrollYPosition] = React.useState(0);
  const [hideBanner, setHideBanner] = React.useState(false);

  const handleScroll = async () => {
    const newScrollYPosition = window.scrollY;
    setScrollYPosition(newScrollYPosition);


  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (logoBanner && (window.scrollY > logoBanner.offsetHeight)) {
      setHideBanner(true)

    }
    else if (siteHeader && (window.scrollY < siteHeader.offsetHeight)) {
      setHideBanner(false)

    }
  }, [window.scrollY])


  return (
    <div className="flex flex-col min-h-screen min-w-screen flex-grow-1 text-blue-500 bg-green align-items-center"  >
      {hideBanner && <Header />}
      {!hideBanner && <Container className="site-banner" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="src\assets\Logos\logo-white-transparent-wide.png" alt="logo" />
      </Container>}

      <Container maxWidth={false} sx={{ mt: 4, mb: 4, px: { lg: 20 }, flexGrow: 1, width: '100vw', display: 'flex' }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
