import React from "react";
import Head from "../Head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head></Head>
      {/* navbar */}
      {children}
    </div>
  );
};

export default Layout;
