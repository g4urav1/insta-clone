import Menu from "./pages/MenuPage";
import Parent from "./pages/parent";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import SignupAuth from "./pages/SignupAuth";
import SetupAcc from "./pages/SetupAcc";
import ResetPass from "./pages/resetPassword";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext, MobileContext, MailContext } from "./context/context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      { path: "", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "auth", element: <SignupAuth /> },
      { path: "account_setup", element: <SetupAcc /> },
      { path: "password/reset", element: <ResetPass /> }
    ]
  }
]);

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <MailContext.Provider value={{ mail, setMail }}>
    <LoginContext.Provider value={{ loggedin, setLoggedin }}>
      <MobileContext.Provider value={{ isMobile, setIsMobile }}>
        <RouterProvider router={router} />
      </MobileContext.Provider>
    </LoginContext.Provider >
    </MailContext.Provider >
  );
}