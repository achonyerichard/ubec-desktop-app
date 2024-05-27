import { useContext, useEffect, useReducer } from "react";
import { SidebarProvider } from "./sidebar.context";
import { AuthProvider } from "./auth.context";
import { useRouter } from "next/router";
const ContextWrapper = ({ children }) => {
 
  return (
    <>
      <AuthProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </AuthProvider>
    </>
  );
};
export default ContextWrapper;
