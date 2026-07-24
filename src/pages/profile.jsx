import Sidebar from "../components/Sidebar";
import pfp from "../assets/Profile.jpg";
import { postcss } from "autoprefixer";
import { useContext, useState } from "react";
import { MobileContext, UserContext } from "../context/context";
import Nav from "../components/nav";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { X } from "lucide-react";
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
  const { user, setUser } = useContext(UserContext);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="bg-bg text-text min-h-screen">
      {isMobile && <Nav />}
      <Sidebar />

      <main className="md:pl-16 md:p-4 mx-auto md:w-4/5 p-2 flex flex-col items-center">
        <div className="flex gap-8 items-center md:w-3/5">
          <img
            src="https://i.pravatar.cc/150?img=2"
            alt="Profile Picture"
            className="w-28 h-28 rounded-full"
          />
          <div>
            <div>
              <h2 className="text-xl font-bold">{user.Username}</h2>
              <p className="text-muted">{user.Name}</p>
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
            <button className=" py-2 ">Edit Profile</button>
          </a>
          <button className="bg-gray-500/50 w-1/2 py-2 rounded-lg">
            Create Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3 mb-[52px]">
          {posts.map((post, i) => (
            <div onClick={() => setSelectedPost(post)} key={i}>
              <img src={post} alt="" />
            </div>
          ))}
        </div>
        {selectedPost && (
          <main
            onClick={() => setSelectedPost(null)}
            className="absolute inset-0 bg-bg/10 backdrop-blur-[2px] flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="md:w-4/5  flex flex-col justify-center bg-surface rounded-lg p-4 space-y-3"
            >
              <div className="flex justify-between">
                <div></div>
                <X onClick={() => setSelectedPost(null)} />
              </div>
              <div className="flex">
                <section></section>
                <section></section>
              </div>
            </div>
          </main>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
