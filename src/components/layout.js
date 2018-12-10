import React from "react";

import "./basic.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
