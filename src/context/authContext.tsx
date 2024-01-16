import { useContext, createContext, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }: Props) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
