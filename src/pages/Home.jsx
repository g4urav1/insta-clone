import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../context/context";
import famora from "../assets/icon.svg"
import Posts from "../components/post";
import Sidebar from "../components/sidebar"
import Nav from "../components/nav"
import Stories from "../components/stories";
import Accounts from "../components/accounts";

export default function Home() {
  const navigate = useNavigate();

  const [active, setActive] = useState("home");
  const { isMobile, setIsMobile } = useContext(MobileContext);

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

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const stories = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=9",
    "https://i.pravatar.cc/150?img=10",
    "https://i.pravatar.cc/150?img=11"
  ]


  return (
    <div className="bg-bg min-h-screen">
      {isMobile && <Nav />}
      <Sidebar />
      <main className="flex justify-center gap-4 bg-bg p-2">
        <section className="w-3/5 space-y-4" >
          <div className="flex items-center gap-3 snap-x overflow-auto no-scrollbar" >
            {stories.map((pfp, i) => (
            <Stories key={i} pfp={pfp} />
          ))}
          </div>
          <div className="flex flex-col gap-4">
            <Posts pfp="https://i.pravatar.cc/150?img=1" post="https://picsum.photos/350/400?1" Username="hfejsd" likeCount="12" caption="lorem ipsum dollor" />
            <Posts pfp="https://i.pravatar.cc/150?img=2" post="https://picsum.photos/350/400?2" Username="jvlgui" likeCount="12" caption="lorem ipsum dollor" /></div>
        </section>
        <section className="w-1/5">
          <div>
            <p>Suggested for you</p>
            <div>
              <Accounts pfp="https://i.pravatar.cc/150?img=1" Username="yuiop"/>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}