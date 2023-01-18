import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <SideBar />
    </>
  );
}
export default DefaultLayout;
