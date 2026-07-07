import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext, MobileContext } from "../context/context";
import famora from "../assets/icon.svg"
import { House, PlaySquare } from "lucide-react";


export default function Home() {
  const { loggedin } = useContext(LoginContext);
  const navigate = useNavigate();



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
            <li>
              <a href="#" className="flex">
             <House/>  <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex">
               <PlaySquare/> <span>Reels</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex">
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex">
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