import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = ({ children }) => (
  <>
    <SideBar/>
    <Navbar />
    {children}
    <Analytics />
    <SpeedInsights/>
    <Footer />
    
  </>
);

export default Layout;