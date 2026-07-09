import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext, MobileContext } from "../context/context";
import famora from "../assets/icon.svg"

import { HomeIcon, HomeIconFill } from "../assets/home.jsx";
import { ReelIcon, ReelIconFill } from "../assets/reel.jsx";
import { Message, MessageFill } from "../assets/message.jsx";
import { Search, SearchFill } from "../assets/search.jsx";
import { Plus } from "../assets/create.jsx";
import { Heart } from "../assets/notification.jsx";


export default function Home() {
  const { loggedin } = useContext(LoginContext);
  const navigate = useNavigate();

  const [active, setActive] = useState("home");


  // useEffect(() => {
  //   if (!loggedin) {
  //     navigate("/menu");
  //   }
  // }, [loggedin, navigate]);

  return (
    <div className="bg-bg min-h-screen">

      <aside>
        <a href="/">
          <img className="w-10" src={famora} alt="Instagram" />
        </a>

        <nav>
          <ul>
            <li onClick={() => setActive("home")}>
              <a href="#"
                className="flex items-center gap-2"
              >
                {active == "home" ? <HomeIconFill /> : <HomeIcon />}
                <span>Home</span>
              </a>
            </li>

            <li onClick={() => setActive("reel")}>
              <a href="#"

                className="flex items-center gap-2"
              >
                {active == "reel" ? <ReelIconFill /> : <ReelIcon />}
                <span>Reels</span>
              </a>
            </li>
            <li onClick={() => setActive("message")}>
              <a href="#" className="flex items-center gap-2">
                {active == "message" ? <MessageFill /> : <Message />}
                <span>Messages</span>
              </a>
            </li>
            <li onClick={()=>{setActive("search")}}>
              <a href="#" className="flex items-center gap-2">
               {active == "search" ? <SearchFill  />:<Search/>}
                <span>Search</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <span>Explore</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <span>Notification</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <span>Create</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <a href="#">Profile</a> <br />
          <a href="#">More</a>
        </div>
      </aside>

      <main>

      </main>

    </div>
  );
}