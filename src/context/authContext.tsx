import { useContext, createContext, ReactNode } from "react";
import { useState } from "react";
interface Props {
  children: ReactNode;
}
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }: Props) => {
  const [formValues, setFormValues] = useState({});
  return (
    <AuthContext.Provider value={{ formValues }}>
      {children}
    </AuthContext.Provider>
  );
};
