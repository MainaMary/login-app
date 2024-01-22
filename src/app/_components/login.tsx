"use client";
import React, { useState } from "react";
import Label from "./label";
import Input from "./input";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "./button";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const { users } = useAuth();
  const { email, password } = formValues;
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
    if (!email || !password) {
      setError("Please provide all details");
      return;
    }

    const userExist = users.find((user) => user.email === formValues.email);
    if (userExist?.email === email && userExist.password === password) {
      toast.success("User logged in succesfully");
      router.push("/dashboard");
    } else if (userExist?.email !== email) {
      setError("User does not exist");
      return;
    }
    if (userExist && userExist.password !== password) {
      setError("Wrong password");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {error && <p className="text-red-500 text-base">{error}</p>}
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
        <Button type="submit">Log in</Button>
      </div>
      <div>
        <span className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
          Don't have an account?{" "}
          <Link href="/" className="text-primary">
            Sign up
          </Link>
        </span>
      </div>
    </form>
  );
}
