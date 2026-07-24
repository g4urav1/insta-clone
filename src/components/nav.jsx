import Famora from "../assets/famoraNoCol.svg";
import { Plus } from "../assets/create.jsx";
import { Heart } from "../assets/notification.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState("");
  const Item = ({ id, to, icon, activeIcon = icon, onClick }) => (
    <li>
      <NavLink
        to={to}
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
          ${
            active === id
              ? "bg-surface text-text"
              : "text-muted hover:text-hovertext hover:bg-hoverbg"
          }
        `}
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          {active === id ? activeIcon : icon}
        </div>
      </NavLink>
    </li>
  );

  return (
    <nav className="bg-background border-b border-muted/20">
      <div className="flex items-center justify-between">
        <img className="text-text" src={Famora} alt="Famora" />
        <div className="flex list-none">
          <Item
            to="/create"
            id="create"
            icon={<Plus />}
            activeIcon={<Plus />}
          />
          <Item
            to="/notifications"
            id="notifications"
            icon={<Heart />}
            activeIcon={<Heart fill="currentColor" />}
          />
        </div>
      </div>
    </nav>
  );
}
