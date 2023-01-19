import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <main>
      <Navbar />
      <main className="default">
        <SideBar />
        {children}
      </main>
    </main>
  );
}
export default DefaultLayout;
