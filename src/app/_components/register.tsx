"use client";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import React from "react";
import Label from "./label";
import Input from "./input";
import Button from "./button";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/authContext";
import Link from "next/link";

export default function RegisterForm() {
  const { formValues, setFormValues } = useAuth();
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
    router.push("/");
  };
  console.log({ formValues });
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full">
        {error && <p className="text-red-400 text-base">{error}</p>}
        <div className="my-4">
          <Label>Name</Label>
          <Input
            placeholder="John Doe"
            name="name"
            onChange={handleInputChange}
            type="text"
            value={name || ""}
          />
        </div>
        <div className="my-4">
          <Label>Email</Label>
          <Input
            placeholder="johndoe@gmail.com"
            name="email"
            onChange={handleInputChange}
            type="text"
            value={email || ""}
          />
        </div>
        <div className="my-4">
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
        <div className="my-4">
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
        <div className="my-4">
          <Button type="submit">Create account</Button>
        </div>
        <div className="my-4">
          <span>
            Have an account ? <Link href="/login">Sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
