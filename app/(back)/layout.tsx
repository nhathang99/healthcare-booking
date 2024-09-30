import React, { ReactNode } from "react";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default layout;
