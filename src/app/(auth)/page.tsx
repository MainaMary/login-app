import React from "react";
import Home from "../_components/auth-layout";
import RegisterForm from "../_components/register";
const MainHomePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Home label="Sign up" children={<RegisterForm />} />
    </div>
  );
};

export default MainHomePage;
