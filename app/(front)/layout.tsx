import React, { ReactNode } from "react";
import Navbar from "../components/Frontend/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
