import { useEffect, useContext, useState } from "react";
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

import { MobileContext } from "../context/context.js";

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  const { isMobile, setIsMobile } = useContext(MobileContext);

  const navigate = useNavigate();

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("light")) {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };
  const sidebarItems = [
    {
      label: "Home",
      to: "/",
      icon: <HomeIcon />,
      activeIcon: <HomeIconFill />,
    },
    {
      label: "Reels",
      to: "/reels",
      icon: <ReelIcon />,
      activeIcon: <ReelIconFill />,
    },
    {
      label: "Messages",
      to: "/messages",
      icon: <Message />,
      activeIcon: <MessageFill />,
    },
    {
      label: "Search",
      to: "/search",
      icon: <Search />,
      activeIcon: <SearchFill />,
    },
    {
      label: "Explore",
      to: "/explore",
      icon: <Explore />,
      activeIcon: <ExploreFill />,
    },
    {
      label: "Notifications",
      to: "/notifications",
      icon: <Heart />,
      activeIcon: <Heart fill="currentColor" />,
    },
    {
      label: "Create",
      to: "/create",
      icon: <Plus />,
      activeIcon: <Plus />,
    },
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: <Dashboard />,
      activeIcon: <DashboardFill />,
    },
  ];

  const moreItems = [
    {
      label: "Settings",
      icon: <Settings size={18} />,
    },
    {
      label: "Your Activity",
      icon: <Activity size={18} />,
    },
    {
      label: "Saved",
      icon: <Bookmark size={18} />,
    },
    {
      label: "Switch Appearance",
      icon: <Moon size={18} />,
      onClick: toggleTheme,
    },
    {
      label: "Schedule Content",
      icon: <Calendar size={18} />,
    },
    {
      label: "Report a problem",
      icon: <MessageSquareWarning size={18} />,
    },
  ];

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedin");
      navigate("/menu");
    }
  };


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [setIsMobile]);


  const Item = ({
    to,
    label,
    icon,
    activeIcon = icon,
    onClick,
  }) => (<li>
    <NavLink
      to={to}
      onClick={() => {
        setShowMore(false);
        onClick?.();
      }}
      className={({ isActive }) =>
        `
        w-full
        flex
        items-center
        gap-3
        rounded-xl
        p-3
        transition-all
        duration-200
        whitespace-nowrap
        text-left
        ${isActive
          ? "bg-surface text-text"
          : "text-muted hover:text-hovertext hover:bg-hoverbg"
        }
      `
      }
    >
      {({ isActive }) => (
        <>
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            {isActive ? activeIcon : icon}
          </div>

          <span
            className={`
              overflow-hidden
              ${showMore
                ? "w-32 opacity-100"
                : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"
              }
              transition-all
              duration-300
            `}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  </li>
  );

  const MobileItem = ({
    to,
    icon,
    activeIcon = icon,
    onClick,
  }) => (
    <li>
      <NavLink
        to={to}
        onClick={() => {
          setShowMore(false);
          onClick?.();
        }}
        className={({ isActive }) =>
          `
        rounded-lg
        transition-all
        duration-200
        ${isActive
            ? "bg-surface text-text"
            : "text-muted hover:text-hovertext hover:bg-hoverbg"
          }
      `
        }
      >
        {({ isActive }) => (
          <div className="p-3 rounded-lg">
            {isActive ? activeIcon : icon}
          </div>
        )}
      </NavLink>
    </li>
  );

  return (
    <>
      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="fixed inset-0 z-10"
        />
      )}

      {!isMobile ? (
        <aside
          className={`
          group
          fixed
          top-0
          left-0
          z-40
          h-screen
          overflow-hidden
          transition-[width]
          duration-300
          ease-in-out
          border-r
          border-muted
          bg-bg
          text-text
          px-2
          py-4
          flex
          flex-col
          flex-shrink-0
          ${showMore ? "w-64" : "w-16 hover:w-64"}
        `}
        >
          <Link
            to="/"
            className="flex items-center h-14 px-1 mb-2 flex-shrink-0"
          >
            <img
              src={famora}
              alt="Logo"
              className="logo w-10 h-10 min-w-10 min-h-10 object-contain"
            />
          </Link>

          <nav className="flex-1">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <Item
                  key={item.to}
                  {...item}
                />
              ))}
            </ul>
          </nav>        <div className="mt-auto space-y-1">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `
              w-full
              flex
              items-center
              gap-3
              rounded-xl
              p-3
              transition-all
              duration-200
              ${isActive
                  ? "bg-surface text-text"
                  : "text-muted hover:text-hovertext hover:bg-hoverbg"
                }
            `
              }
            >
              {({ isActive }) => (
                <>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <User
                      size={24}
                      fill={isActive ? "currentColor" : "none"}
                    />
                  </div>

                  <span
                    className={`
                    overflow-hidden
                    ${showMore
                        ? "w-32 opacity-100"
                        : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"
                      }
                    transition-all
                    duration-300
                  `}
                  >
                    Profile
                  </span>
                </>
              )}
            </NavLink>

            <div
              className="
              relative
              flex
              items-center
              gap-3
              rounded-xl
              p-3
              text-muted
              hover:text-hovertext
              hover:bg-hoverbg
            "
            >
              <button
                type="button"
                aria-expanded={showMore}
                aria-label="Open menu"
                className="flex items-center gap-3 w-full text-left"
                onClick={() => setShowMore((prev) => !prev)}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Menu size={24} />
                </div>

                <span
                  className={`
                  overflow-hidden
                  ${showMore
                      ? "w-32 opacity-100"
                      : "w-0 opacity-0 group-hover:w-32 group-hover:opacity-100"
                    }
                  transition-all
                  duration-300
                `}
                >
                  More
                </span>
              </button>

              {showMore && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="
                  absolute
                  bottom-full
                  left-0
                  w-72
                  rounded-2xl
                  bg-surface
                  shadow-xl
                  max-h-[80vh]
                  overflow-y-auto
                  z-50
                  p-2
                "
                >
                  <div className="flex flex-col gap-1">
                    {moreItems.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={item.onClick}
                        className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        p-3
                        text-left
                        text-muted
                        hover:text-hovertext
                        hover:bg-hoverbg
                      "
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          {item.icon}
                        </div>

                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="my-2 border-y border-muted/20">
                    <button
                      type="button"
                      className="
    flex
    items-center
    gap-3
    rounded-xl
    px-3
    py-6
    w-full
    text-left
    text-muted
    hover:text-hovertext
    hover:bg-hoverbg
  "
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <RiThreadsFill size={24} />
                      </div>

                      <span>Threads</span>
                    </button>
                  </div>

                  <div className="mt-2">
                    <button
                      type="button"
                      className="
      w-full
      rounded-xl
      p-3
      text-left
      text-muted
      hover:text-hovertext
      hover:bg-hoverbg
    "
                    >
                      Switch accounts
                    </button>

                    <button
                      type="button"
                      onClick={logout}
                      className="
      w-full
      rounded-xl
      p-3
      text-left
      text-muted
      hover:text-hovertext
      hover:bg-hoverbg
    "
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>
      ) : (
        <aside
          className="
    fixed
    bottom-0
    left-0
    w-full
    bg-surface
    z-50
    border-t
    border-muted/20
  "
        >
          <nav>
            <ul
              className="
        flex
        items-center
        justify-between
        px-2
        py-2
      "
            >
              <MobileItem
                to="/"
                icon={<HomeIcon />}
                activeIcon={<HomeIconFill />}
              />

              <MobileItem
                to="/search"
                icon={<Search />}
                activeIcon={<SearchFill />}
              />

              <MobileItem
                to="/reels"
                icon={<ReelIcon />}
                activeIcon={<ReelIconFill />}
              />

              <MobileItem
                to="/messages"
                icon={<Message />}
                activeIcon={<MessageFill />}
              />

              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `
              rounded-lg
              transition-all
              duration-200
              ${isActive
                      ? "bg-surface text-text"
                      : "text-muted hover:text-hovertext hover:bg-hoverbg"
                    }
            `
                  }
                >
                  {({ isActive }) => (
                    <div className="p-3 rounded-lg">
                      <User
                        size={24}
                        fill={isActive ? "currentColor" : "none"}
                      />
                    </div>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      )}  </>
  );
}