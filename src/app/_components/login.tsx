import React, { useState } from "react";
import Label from "./label";
import Input from "./input";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Button from "./button";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const { email, password } = formValues;
  const handleSubmit = () => {};
  const handleInputChange = () => {};
  const handleVisible = () => {};
  return (
    <form onSubmit={handleSubmit} className="w-full">
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
        <Button type="submit">Log in</Button>
      </div>
    </form>
  );
}
