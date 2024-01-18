"use client";
import {
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useState } from "react";
interface Props {
  children: ReactNode;
}
interface AuthContextProps {
  formValues: {
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
  };
  setFormValues: Dispatch<
    SetStateAction<{
      name: string;
      password: string;
      email: string;
      confirmPassword: string;
    }>
  >;
}
const defaultValue: AuthContextProps = {
  formValues: {
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
  },
  setFormValues: () => {},
};
const AuthContext = createContext<AuthContextProps>(defaultValue);
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: Props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  return (
    <AuthContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </AuthContext.Provider>
  );
};
