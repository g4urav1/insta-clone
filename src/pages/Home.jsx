import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../context/context";
import famora from "../assets/icon.svg"

import Sidebar from "../components/sidebar"

export default function Home() {
  const navigate = useNavigate();

  const [active, setActive] = useState("home");

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedin") === "true";

    if (!loggedIn) {
      navigate("/menu");
    }
  }, [navigate]);


  return (
    <div className="bg-bg min-h-screen">

      <main>

      </main>

    </div>
  );
}