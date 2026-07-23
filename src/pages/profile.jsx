import Sidebar from "../components/Sidebar";
import pfp from "../assets/Profile.jpg";
import { postcss } from "autoprefixer";
import { useContext } from "react";
import { MobileContext } from "../context/context";
import Nav from "../components/nav";
import { NavLink } from "react-router-dom";
export default function ProfilePage() {
  const posts = [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3",
    "https://picsum.photos/300?4",
    "https://picsum.photos/300?5",
    "https://picsum.photos/300?6",
    "https://picsum.photos/300?7",
    "https://picsum.photos/300?8",
    "https://picsum.photos/300?9",
    "https://picsum.photos/300?10",
    "https://picsum.photos/300?11",
    "https://picsum.photos/300?12",
    "https://picsum.photos/300?13",
    "https://picsum.photos/300?14",
    "https://picsum.photos/300?15",
  ];

  const { isMobile, setIsMobile } = useContext(MobileContext);
  return (
    <div className="bg-bg text-text min-h-screen">
      {isMobile && <Nav />}
      <Sidebar />

      <main className="md:pl-16 md:p-4 mx-auto md:w-4/5 p-2 flex flex-col items-center">
        <div className="flex gap-8 items-center md:w-3/5">
          <img
            src={pfp}
            alt="Profile Picture"
            className="w-28 h-28 rounded-full"
          />
          <div>
            <div>
              <h2 className="text-xl font-bold">g4urav1_</h2>
              <p className="text-muted">Gaurav</p>
            </div>
            <div className="flex gap-2 ">
              <p className="text-text">
                {posts.length} <span className="text-text">Posts</span>
              </p>
              <p className="text-text">
                18 <span className="text-text">Followers</span>
              </p>
              <p className="text-text">
                18 <span className="text-text">Following</span>
              </p>
            </div>
            <div className="text-sm">Bio</div>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-3/5 mx-auto mt-10 ">
          <a
            className="bg-gray-500/50 text-center w-1/2 py-2 rounded-lg"
            href="edit/profile"
          >
            <button className=" py-2 ">
              Edit Profile
            </button>
          </a>
          <button className="bg-gray-500/50 w-1/2 py-2 rounded-lg">
            Create Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3 mb-[52px]">
          {posts.map((post, i) => (
            <div key={i}>
              <img src={post} alt="" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
