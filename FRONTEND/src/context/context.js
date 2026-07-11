import { createContext } from "react";

export const MobileContext = createContext({
    isMobile: false,
    setIsMobile: () => { }
});
export const LoginContext = createContext({
    loggedin: false,
    setLoggedin: () => { }
});