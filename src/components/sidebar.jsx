import famora from "../assets/icon.svg";
import { HomeIcon, HomeIconFill } from "../assets/home.jsx";
import { ReelIcon, ReelIconFill } from "../assets/reel.jsx";
import { Message, MessageFill } from "../assets/message.jsx";
import { Search, SearchFill } from "../assets/search.jsx";
import { Explore, ExploreFill } from "../assets/explore.jsx";
import { Dashboard, DashboardFill } from "../assets/dashboard.jsx";
import { Plus } from "../assets/create.jsx";
import { Heart } from "../assets/notification.jsx";
import {
  Activity,
  Bookmark,
  Calendar,
  Menu,
  MessageSquareWarning,
  Moon,
  SaveIcon,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [showMore, setShowMore] = useState(false);

  const Item = ({ id, label, icon, activeIcon }) => (
    <li>
      <a
        href="#"
        onClick={() => setActive(id)}
        className={`
                    flex items-center gap-3
                    rounded-xl
                    p-3
                    transition-all
                    duration-200
                    whitespace-nowrap
                    ${
                      active === id
                        ? "bg-[#1B1E2D] text-white"
                        : "text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                    }
                `}
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          {active === id ? activeIcon : icon}
        </div>

        <span
          className={`overflow-hidden w-0 opacity-0 ${showMore ? "w-32 opacity-100" : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"} transition-all duration-300`}
        >
          {label}
        </span>
      </a>
    </li>
  );

  return (
    <>
      {showMore && (
        <div
          onClick={() => {
            setShowMore(false);
          }}
          className="absolute w-screen h-screen z-10"
        ></div>
      )}

      <aside
        className={`
    group h-screen overflow-hidden
    transition-[width] duration-300 ease-in-out
    border-r border-[#1E2235] bg-bg text-white
    px-2 py-4 flex flex-col flex-shrink-0
    ${showMore ? "w-64" : "w-16 hover:w-64"}
  `}
      >
        <a
          href="/"
          className="flex items-center h-14 px-1 mb-2 flex-shrink-0"
          onClick={() => {
            setActive("");
          }}
        >
          <img
            src={famora}
            alt="Logo"
            className="w-10 h-10 min-w-10 min-h-10 flex-none object-contain"
          />
        </a>

        <nav className="flex-1">
          <ul className="space-y-1">
            <Item
              id="home"
              label="Home"
              icon={<HomeIcon />}
              activeIcon={<HomeIconFill />}
            />

            <Item
              id="reel"
              label="Reels"
              icon={<ReelIcon />}
              activeIcon={<ReelIconFill />}
            />

            <Item
              id="message"
              label="Messages"
              icon={<Message />}
              activeIcon={<MessageFill />}
            />

            <Item
              id="search"
              label="Search"
              icon={<Search />}
              activeIcon={<SearchFill />}
            />

            <Item
              id="explore"
              label="Explore"
              icon={<Explore />}
              activeIcon={<ExploreFill />}
            />

            <li>
              <a
                href="#"
                className="
                                flex items-center gap-3
                                rounded-xl
                                p-3
                                text-gray-300
                                hover:text-white
                                hover:bg-[#1A1D2B]
                                transition-all
                                duration-200
                            "
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Heart />
                </div>

                <span
                  className="
                                    overflow-hidden
                                    w-0
                                    opacity-0
                                    group-hover:w-32
                                    group-hover:opacity-100
                                    transition-all
                                    duration-300
                                "
                >
                  Notifications
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="
                                flex items-center gap-3
                                rounded-xl
                                p-3
                                text-gray-300
                                hover:text-white
                                hover:bg-[#1A1D2B]
                                transition-all
                                duration-200
                            "
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Plus />
                </div>

                <span
                  className="
                                    overflow-hidden
                                    w-0
                                    opacity-0
                                    group-hover:w-32
                                    group-hover:opacity-100
                                    transition-all
                                    duration-300
                                "
                >
                  Create
                </span>
              </a>
            </li>

            <Item
              id="dashboard"
              label="Dashboard"
              icon={<Dashboard />}
              activeIcon={<DashboardFill />}
            />
          </ul>
        </nav>

        <div className="mt-auto space-y-1">
          <a
            href="#"
            className="
                        flex items-center gap-3
                        rounded-xl
                        p-3
                        text-gray-300
                        hover:text-white
                        hover:bg-[#1A1D2B]
                        transition-all
                        duration-200
                    "
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0">
              <User size={24} />
            </div>

            <span
              className="
                            overflow-hidden
                            w-0
                            opacity-0
                            group-hover:w-32
                            group-hover:opacity-100
                            transition-all
                            duration-300
                        "
            >
              Profile
            </span>
          </a>
          <div
            className="
                        flex items-center gap-3
                        rounded-xl
                        p-3
                        text-gray-300
                        hover:text-white
                        hover:bg-[#1A1D2B]
                        transition-all
                        duration-200
                        relative
                    "
          >
            <a className="flex items-center gap-2"
              href="#"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Menu size={24} />
              </div>

              <span
                className={`overflow-hidden
                            w-0
                            opacity-0
                            ${showMore ? "w-32 opacity-100" : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"}
                            transition-all
                            duration-300
                        `}
              >
                More
              </span>
            </a>
            {showMore && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute bottom-full bg-surface z-50"
              >
                <div>
                  <a
                    href="#"
                    className=" flex items-center gap-3 rounded-xl p-3 text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Settings size={18} />
                    </div>

                    <span>Setting</span>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center gap-3 rounded-xl p-3 text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Activity size={18} />
                    </div>

                    <span>Your Activity</span>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center gap-3 rounded-xl p-3 text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Bookmark size={18} />
                    </div>

                    <span>Saved</span>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center gap-3 rounded-xl p-3 text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Moon size={18} />
                    </div>

                    <span>Switch Appearence</span>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center gap-3 rounded-xl p-3 text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </div>

                    <span>Schedule Content</span>
                  </a>
                  <a
                    href="#"
                    className=" flex items-center gap-3 rounded-xl p-3 text-gray-300 hover:text-white hover:bg-[#1A1D2B]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <MessageSquareWarning size={18} />
                    </div>

                    <span>Report a problem</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
