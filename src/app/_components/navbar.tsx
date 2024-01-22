import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
const Navbar = () => {
  return (
    <nav className="text-white flex h-8  px-6 items-center bg-primary justify-between">
      <div className="font-bold text-base">SaaS</div>
      {/* <div onClick={handleLogout}>Sign out</div> */}
    </nav>
  );
};

export default Navbar;
