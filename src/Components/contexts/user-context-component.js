import { createContext, useState } from "react";
export const userContext = createContext({
    currentuser:null,setCurrentuser:()=>null
});
export const UserProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState(null);
 const  value = { currentuser, setCurrentuser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};