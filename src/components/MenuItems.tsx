import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const MenuItems = ({ items, depthLevel }: { items: any; depthLevel: any }) => {
  const loc = useLocation();
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={`relative  ${
        depthLevel > 0
          ? "text-secondary hover:bg-secondary hover:text-white"
          : ["/"].includes(loc.pathname)
          ? "text-white hover:text-yellow"
          : "text-grey hover:text-secondary"
      }`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            className="text-left px-3 py-4"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <NavHashLink
                className={({ isActive }) =>
                  `flex items-center ${
                    isActive && depthLevel === 0
                      ? " text-secondary underline "
                      : " "
                  }`
                }
                to={items.url}
              >
                {items.title}
                {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                    0 && window.innerWidth > 960 ? (
                  <span className="ml-1">&raquo;</span>
                ) : (
                  <ArrowDropDownIcon />
                )}
              </NavHashLink>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <NavHashLink
          className={({ isActive }) =>
            `text-left  px-3 py-4 block ${
              isActive && depthLevel === 0 ? "text-secondary underline " : " "
            } `
          }
          to={items.url}
        >
          {items.title}
        </NavHashLink>
      )}
    </li>
  );
};

export default MenuItems;
