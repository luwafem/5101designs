"use client";
import React, {useEffect} from "react";
import "./globals.css";
import Header from "../../components/Header"; //Header components
import Footer from "../../components/Footer";


export default function RootLayout({ children }) {

  // Function to disable right-click across the site
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
      alert("Right-click disabled for security reasons.");

    };
    
    document.addEventListener("contextmenu", disableRightClick);
    
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);


  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden', fontFamily: 'Avenir, AvenirBold', backgroundColor: "white", color:"black", }}>
          
      <Header />
     
          {children}
           
      <Footer />
      
      </body>
    </html>
  );
}






