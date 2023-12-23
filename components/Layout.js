import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = ({ children }) => (
  <>
    <SideBar/>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;