import React from "react";
import LoginForm from "@/app/_components/login";
import Home from "@/app/_components/auth-layout";
const Login = () => {
  return <Home label="Sign in" children={<LoginForm />} />;
};

export default Login;
