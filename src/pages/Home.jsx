import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  MobileContext } from "../context/context";
import famora from "../assets/icon.svg"

import Sidebar from "../components/sidebar"

export default function Home() {
  const navigate = useNavigate();

  const [active, setActive] = useState("home");


  const [loggedin, setLoggedin] = useState(localStorage.getItem("loggedin"));
  useEffect(() => {
    if (!loggedin) {
      navigate("/menu");
    }
  }, [loggedin, navigate]);

  return (
    <div className="bg-bg min-h-screen">

      <Sidebar />

      <main>

      </main>

    </div>
  );
}