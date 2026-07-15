import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
  Settings,
  User,
} from "lucide-react";
import { RiThreadsFill } from "react-icons/ri";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedin");
      navigate("/menu");
    }
  };

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  const Item = ({
    id,
    to,
    label,
    icon,
    activeIcon = icon,
    onClick,
  }) => (
    <li>
      <NavLink
        to={to}
        type="button"
        onClick={() => {
          setActive(id);
          onClick?.();
        }}
        className={`
          w-full
          flex items-center gap-3
          rounded-xl
          p-3
          transition-all duration-200
          whitespace-nowrap
          text-left
          ${active === id
            ? "bg-surface text-text"
            : "text-muted hover:text-hovertext hover:bg-hoverbg"
          }
        `}
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          {active === id ? activeIcon : icon}
        </div>

        <span
          className={`overflow-hidden ${showMore
              ? "w-32 opacity-100"
              : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"
            } transition-all duration-300`}
        >
          {label}
        </span>
      </NavLink>
    </li>
  );

  return (
    <>
      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="absolute w-screen h-screen z-10"
        />
      )}

      <aside
        className={`
          group h-screen overflow-hidden
          transition-[width] duration-300 ease-in-out
          border-r border-muted bg-bg text-text
          px-2 py-4 flex flex-col flex-shrink-0
          ${showMore ? "w-64" : "w-16 hover:w-64"}
        `}
      >
        <Link
          to="/"
          className="flex items-center h-14 px-1 mb-2 flex-shrink-0"
          onClick={() => setActive("")}
        >
          <img
            src={famora}
            alt="Logo"
            className="logo w-10 h-10 min-w-10 min-h-10 flex-none object-contain"
          />
        </Link>

        <nav className="flex-1">
          <ul className="space-y-1">
            <Item
              to="/"
              id="home"
              label="Home"
              icon={<HomeIcon />}
              activeIcon={<HomeIconFill />}
            />

            <Item
              to="/reels"
              id="reel"
              label="Reels"
              icon={<ReelIcon />}
              activeIcon={<ReelIconFill />}
            />

            <Item
              to="/messages"
              id="message"
              label="Messages"
              icon={<Message />}
              activeIcon={<MessageFill />}
            />

            <Item
              to="/search"
              id="search"
              label="Search"
              icon={<Search />}
              activeIcon={<SearchFill />}
            />

            <Item
              to="/explore"
              id="explore"
              label="Explore"
              icon={<Explore />}
              activeIcon={<ExploreFill />}
            />

            <Item
              to="/notifications"
              id="notifications"
              label="Notifications"
              icon={<Heart />}
              activeIcon={<Heart fill="currentColor" />}
            />

            <Item
              to="/create"
              id="create"
              label="Create"
              icon={<Plus />}
              activeIcon={<Plus />}
            />

            <Item
              to="/dashboard"
              id="dashboard"
              label="Dashboard"
              icon={<Dashboard />}
              activeIcon={<DashboardFill />}
            />
          </ul>
        </nav>

        <div className="mt-auto space-y-1">
          <NavLink
          to={"/profile"}
            type="button"
            className="
              w-full
              flex items-center gap-3
              rounded-xl
              p-3
              text-muted
              hover:text-hovertext
              hover:bg-hoverbg
              transition-all
              duration-200
              text-left
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
          </NavLink>

          <div
            className="
              flex items-center gap-3
              rounded-xl
              p-3
              text-muted
              hover:text-hovertext
              hover:bg-hoverbg
              transition-all
              duration-200
              relative
            "
          >
            <button
              type="button"
              className="flex items-center gap-2 w-full text-left"
              onClick={() => setShowMore((prev) => !prev)}
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <Menu size={24} />
              </div>

              <span
                className={`overflow-hidden ${showMore
                    ? "w-32 opacity-100"
                    : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"
                  } transition-all duration-300`}
              >
                More
              </span>
            </button>

            {showMore && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute rounded bottom-full left-0 w-full h-[calc(100vh-4rem)] bg-surface z-50"
              >
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg text-left"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Settings size={18} />
                    </div>
                    <span>Setting</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg text-left"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Activity size={18} />
                    </div>
                    <span>Your Activity</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg text-left"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Bookmark size={18} />
                    </div>
                    <span>Saved</span>
                  </button>

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center gap-3 rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg text-left"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Moon size={18} />
                    </div>
                    <span>Switch Appearence</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg text-left"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </div>
                    <span>Schedule Content</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg text-left"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <MessageSquareWarning size={18} />
                    </div>
                    <span>Report a problem</span>
                  </button>
                </div>

                <div className="border-t-2 border-b-2 border-muted/20">
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-xl px-3 py-6 text-muted hover:text-hovertext hover:bg-hoverbg text-left w-full"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <RiThreadsFill size={24} />
                    </div>
                    <span>Threads</span>
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="flex items-center rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg w-full text-left"
                  >
                    <span>Switch accounts</span>
                  </button>

                  <button
                    type="button"
                    onClick={logout}
                    className="flex items-center rounded-xl p-3 text-muted hover:text-hovertext hover:bg-hoverbg w-full text-left"
                  >
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}