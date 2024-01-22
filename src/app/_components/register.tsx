"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import React from "react";
import Label from "./label";
import Input from "./input";
import Button from "./button";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/authContext";
import Link from "next/link";

export default function RegisterForm() {
  const { formValues, setFormValues, setUsers, users } = useAuth();
  const [visible, setVisible] = useState(false);
  const { name, password, confirmPassword, email } = formValues;
  const [error, setError] = useState("");
  const router = useRouter();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
    setError("");
  };
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //form validation
    if (!name || !password || !email || !confirmPassword) {
      setError("Please provide all details");
      return;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const userExist = users.find((user) => user.email === formValues.email);
    if (userExist) {
      setError("User already exist");
      return;
    }
    const newUser = {
      name: formValues.name,
      email: formValues.email,
    };
    setUsers((prevUsers: any) => [...prevUsers, newUser]);
    toast.success("Account cretaed successfully");
    router.push("/login");
    setFormValues({ name: "", password: "", email: "", confirmPassword: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {error && <p className="text-red-400 text-base">{error}</p>}
        <div>
          <Label>Name</Label>
          <Input
            placeholder="John Doe"
            name="name"
            onChange={handleInputChange}
            type="text"
            value={name || ""}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            placeholder="johndoe@gmail.com"
            name="email"
            onChange={handleInputChange}
            type="text"
            value={email || ""}
          />
        </div>
        <div>
          <Label>Password</Label>
          <div className="relative">
            <Input
              name="password"
              onChange={handleInputChange}
              type={visible ? "text" : "password"}
              value={password || ""}
            />
            <div onClick={handleVisible} className="absolute right-2 top-3">
              {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          {/* <p className="text-red-500">{formErrors.password}</p> */}
        </div>
        <div>
          <Label>Confirm Password</Label>
          <div className="relative">
            <Input
              name="confirmPassword"
              onChange={handleInputChange}
              type={visible ? "text" : "password"}
              value={confirmPassword || ""}
            />
            <div onClick={handleVisible} className="absolute right-2 top-3">
              {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          {/* <p className="text-red-500">{formErrors.password}</p> */}
        </div>
        <div>
          <Button type="submit">Create account</Button>
        </div>
        <div>
          <span className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            Have an account?{" "}
            <Link href="/login" className="text-primary">
              Sign in
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
