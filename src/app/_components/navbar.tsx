import React from "react";
import { useAuth } from "@/context/authContext";
const Navbar = () => {
  return (
    <nav className="text-white flex  px-6 items-center bg-primary space-between">
      <div>Logo</div>
      <div>Welcome</div>
    </nav>
  );
};

export default Navbar;
