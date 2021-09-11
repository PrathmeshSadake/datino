import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, data }) => {
  return (
    <div>
      <Header data={data} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
