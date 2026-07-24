import { createContext } from "react";

export const MobileContext = createContext({
    isMobile: false,
    setIsMobile: () => { }
});

export const MailContext = createContext({
    mail: "",
    setMail: () => { }
});
export const UserContext = createContext({
    user: {},
    setUser: () => { }
});