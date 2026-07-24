import Menu from "./pages/MenuPage";
import Parent from "./pages/parent";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import SignupAuth from "./pages/SignupAuth";
import SetupAcc from "./pages/SetupAcc";
import ResetPass from "./pages/resetPassword";
import Profile from "./pages/profile";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MobileContext, MailContext, UserContext } from "./context/context";
import EditProfile from "./pages/EditProfile";

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
      { path: "password/reset", element: <ResetPass /> },
      { path: "profile", element: <Profile /> },
      { path: "edit/profile", element: <EditProfile /> },
    ],
  },
]);

export default function App() {
  
  const [isMobile, setIsMobile] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [mail, setMail] = useState("");
  const [user, setUser] = useState({});

  const validateLogin = async () => {
      try {
        const SessionId = localStorage.getItem("SessionId");
        const response = await fetch("http://localhost:1111/validateLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            SessionId,
          }),
        });
  
        const data = await response.json();
  
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      validateLogin();
    }, []);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MailContext.Provider value={{ mail, setMail }}>
        <MobileContext.Provider value={{ isMobile, setIsMobile }}>
          <RouterProvider router={router} />
        </MobileContext.Provider>
      </MailContext.Provider>
    </UserContext.Provider>
  );
}
