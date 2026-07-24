import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext, UserContext } from "../context/context";
import Posts from "../components/post";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import Stories from "../components/stories";
import Accounts from "../components/accounts";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

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
  }, [setIsMobile]);

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
    "https://i.pravatar.cc/150?img=11",
  ];
  const now = new Date();
  const year = now.getFullYear();

  return (
    <div className="bg-bg min-h-screen">
      {isMobile && <Nav />}
      <Sidebar />
      <main className="flex justify-center gap-4 bg-bg p-2 pb-[55px]">
        <section className="md:w-3/5 space-y-4">
          <div className="flex items-center gap-3 snap-x overflow-auto no-scrollbar">
            {stories.map((pfp, i) => (
              <Stories key={i} pfp={pfp} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <Posts
              pfp="https://i.pravatar.cc/150?img=1"
              post="https://picsum.photos/350/400?1"
              Username="hfejsd"
              likeCount="12"
              caption="lorem ipsum dollor"
            />
            <Posts
              pfp="https://i.pravatar.cc/150?img=2"
              post="https://picsum.photos/350/400?2"
              Username="jvlgui"
              likeCount="12"
              caption="lorem ipsum dollor"
            />
          </div>
        </section>
        {!isMobile && (
          <section className="w-1/5">
            <div className="space-y-6">
              <p>Suggested for you</p>
              <div className="space-y-4">
                <Accounts
                  pfp="https://i.pravatar.cc/150?img=1"
                  Username="yuiop"
                />
                <Accounts
                  pfp="https://i.pravatar.cc/150?img=2"
                  Username="asdfg"
                />
                <Accounts
                  pfp="https://i.pravatar.cc/150?img=3"
                  Username="rfszd"
                />
                <Accounts
                  pfp="https://i.pravatar.cc/150?img=4"
                  Username="zdxow"
                />
                <Accounts
                  pfp="https://i.pravatar.cc/150?img=5"
                  Username="msify"
                />
                <Accounts
                  pfp="https://i.pravatar.cc/150?img=6"
                  Username="zgnow"
                />
              </div>
              <div>
                <div className="w-full space-y-4 text-xs text-text">
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
                    <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">API</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Location</a>
                    <a href="#">Popular</a>
                    <a href="#">Meta AI</a>
                    <a href="#">Threads</a>
                  </div>

                  <div className="text-sm">
                    <span>© {year} Famora from Meta</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
