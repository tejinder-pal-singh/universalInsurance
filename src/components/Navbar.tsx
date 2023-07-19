import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Button } from "./Button";
import { companyDetails } from "../pages/Contact";
import MenuItems from "./MenuItems";
import { HashLink } from "react-router-hash-link";
import { lifeInsuranceTypes, travelInsuranceTypes } from "../data";

interface NavItem {
  title: string;
  url: string;
  submenu?: NavItem[];
}
// navbar links data
const navbarLinks: NavItem[] = [
  { title: "Home", url: "/" },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Insurance Services",
        url: "/services#insurances",
        submenu: [
          { title: "Supervisa insurance", url: "/supervisa" },
          {
            title: "Life Insurance",
            url: "/life-insurance",
            submenu: lifeInsuranceTypes.map((e) => ({
              title: e.name,
              url: `/life-insurance#${e.id}`,
            })),
          },
          {
            title: "Travel Insurance",
            url: "/services#travel",
            submenu: travelInsuranceTypes.map((i) => ({
              title: i.name,
              url: `/services#${i.id}`,
            })),
          },
        ],
      },
      {
        title: "Investments",
        url: "/services#investments",
        submenu: [
          { title: "Buy-Sell Agreements", url: "/services#buy-sell" },
          {
            title: "Registered Retirement Savings Plan",
            url: "/services#retirement",
          },
          { title: "RRSP and TFSA", url: "/services#rrsp" },
          { title: "New Immigrant & RRSP", url: "/services#new-immigrant" },
        ],
      },
    ],
  },
  { title: "Supervisa Insurance", url: "/supervisa" },
  {
    title: "Life Insurance",
    url: "/life-insurance",
    submenu: lifeInsuranceTypes.map((e) => ({
      title: e.name,
      url: `/life-insurance#${e.id}`,
    })),
  },
  { title: "About us", url: "/about" },
  {
    title: "Contact us",
    url: "/contact",
    submenu: [{ title: "Social media", url: "/contact#social" }],
  },
];

//animations
const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
//animations
const navContainer = {
  visible: {
    //x: 0,
    opacity: 1,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
  hidden: {
    //x: -250,
    opacity: 0,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const loc = useLocation();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && !isToggled) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else if (!isToggled) {
      setIsScrolled(false);
    }
  };

  return (
    <>
      {show && (
        <div
          style={{ height: "110px" }}
          className={`navbar desktop fixed top-0 z-50 text-lg py-4  hidden ${
            isScrolled
              ? loc.pathname === "/"
                ? "backdrop-contrast-50 backdrop-blur-md  "
                : " backdrop-blur-md "
              : "backdrop-blur-none"
          } items-center bg-transparent ${
            isToggled && "overflow-hidden"
          } px-32 lg:flex w-full justify-between`}
        >
          <div className="logo">
            <Link to={"/"}>
              {" "}
              <img
                src={logo}
                alt="Universal Insurance"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div
            className={`links 
   font-semibold  isolate flex items-baseline  justify-between`}
          >
            {navbarLinks.map((a) => (
              <div key={a.title}>
                <NavbarLink link={a} />
              </div>
            ))}
          </div>
          <div className="buttons  flex gap-8">
            <div
              onClick={() => {
                window.open(`tel:${companyDetails.telephone}`);
              }}
            >
              <Button className="bg-white flex items-center gap-2">
                <PhoneOutlinedIcon />
                <span>{companyDetails.telephone}</span>
              </Button>
            </div>
            <div>
              <Button className="bg-secondary text-white"> Get a quote</Button>
            </div>
          </div>
        </div>
      )}
      {show && (
        <div
          className={`mobile overflow-y-scroll overscroll-none top-0 fixed navbar ${
            isScrolled ? "backdrop-blur-lg " : "backdrop-blur-none"
          }  pt-4 pb-16 px-10 
          }  lg:hidden ${
            isToggled ? "bottom-0 bg-white" : ""
          }  w-full z-30 text-lg `}
        >
          <div className="px-[inherit] relative">
            <div className={`logo fixed z-60  left-0 px-[inherit] `}>
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Universal Insurance"
                  width={200}
                  height={100}
                />
              </Link>
            </div>

            <button
              className={`btn fixed z-60  right-0 px-[inherit]`}
              onClick={() => {
                setToggle((prev) => {
                  if (!prev) {
                    setIsScrolled(true);
                    setShow(true);
                    document.body.style.overflow = "hidden";
                  }
                  document.body.style.overflow = "auto";

                  return !prev;
                });
              }}
            >
              {isToggled ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <AnimatePresence>
            {isToggled && (
              <motion.div
                className="navbar"
                initial="hidden"
                animate={isToggled ? "visible" : "hidden"}
                exit="hidden"
                variants={navContainer}
              >
                <NavbarItems isToggled={isToggled} setToggle={setToggle} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Navbar;

//for mobile
function NavbarItems({
  isToggled,
  setToggle,
}: {
  isToggled: boolean;
  setToggle: (b: boolean) => void;
}) {
  const onCloseHandler = () => {
    setToggle(!isToggled);
  };
  return (
    <>
      <motion.div
        className="pt-32 flex justify-center h-full items-center overflow-hidden  z-50 "
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        <div className="flex flex-col gap-9 text-3xl font-extralight ">
          {navbarLinks.map((item) => (
            <motion.div
              className="nav-item  active:text-secondary"
              variants={navItem}
              key={item.title}
              onClick={onCloseHandler}
            >
              <Link to={item.url}>{item.title}</Link>
              {item.submenu && (
                <div className="pl-3 flex text-2xl flex-col">
                  {item.submenu.map((l) => (
                    <>
                      <HashLink key={l.title} to={l.url}>
                        {l.title}
                      </HashLink>
                      {l.submenu && (
                        <div className="pl-3 flex text-xl flex-col">
                          {l.submenu.map((k) => (
                            <HashLink key={k.title} to={k.url}>
                              {k.title}
                            </HashLink>
                          ))}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

//for large screens
function NavbarLink({ link }: { link: any }) {
  return (
    <motion.div className="relative group">
      <ul
        className="flex
  align-center
  flex-wrap
  list-none"
      >
        <MenuItems items={link} key={0} depthLevel={0} />
      </ul>
    </motion.div>
  );
}
