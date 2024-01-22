"use client";
import {
  useContext,
  useState,
  useEffect,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
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
  users: { name: string; password: string; email: string }[];
  setUsers: any;
}
const defaultValue: AuthContextProps = {
  formValues: {
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
  },
  users: [],
  setUsers: () => {},
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
  const initialState = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") || "")
    : [];
  const [users, setUsers] =
    useState<{ name: ""; password: ""; email: "" }[]>(initialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <AuthContext.Provider
      value={{ users, setUsers, formValues, setFormValues }}
    >
      {children}
    </AuthContext.Provider>
  );
};
