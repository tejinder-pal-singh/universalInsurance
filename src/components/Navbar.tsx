import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const appearParent: Variants = {
  initial: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const appearAnimate: Variants = {
  initial: { opacity: 0, y: -50 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
};
const NavbarItems = ({
  isToggled,
  setToggle,
}: {
  isToggled: boolean;
  setToggle: (b: boolean) => void;
}) => {
  const items = [
    { name: "Home", link: "/" },
    { name: "Services", link: "services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const onCloseHandler = () => {
    setToggle(!isToggled);
  };
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

  return (
    <>
      <motion.ul
        className="navList fixed grid place-items-center top-0 left-0 h-screen w-full backdrop-grayscale bottom-0 z-50 backdrop-blur"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        <div className="flex absolute top-0 left-0 pt-7 px-10 w-full justify-between ">
          <div className="logo">logo</div>
          <div className="btn" onClick={onCloseHandler}>
            X
          </div>
        </div>
        <div className="flex flex-col gap-9 text-3xl font-extralight ">
          {items.map((item) => (
            <motion.li
              className="nav-item active:text-primary"
              variants={navItem}
              key={item.name}
            >
              <Link to={item.link}>{item.name}</Link>
            </motion.li>
          ))}
        </div>
      </motion.ul>
    </>
  );
};
const Navbar = ({ invisible }: { invisible?: boolean }) => {
  const [isToggled, setToggle] = useState(false);

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

  return (
    <>
      <motion.div
        variants={appearParent}
        initial={"initial"}
        animate={"reveal"}
        className={`navbar ${
          invisible ? "invisible static" : "fixed"
        }   top-0  z-30 text-lg h-30 py-10 hidden  items-center  px-32 lg:flex w-full justify-between`}
      >
        <motion.div variants={appearAnimate} className="logo">
          <Link to={"/"}> logo</Link>
        </motion.div>
        <div className="links font-semibold gap-24 flex items-baseline justify-between">
          <motion.div variants={appearAnimate} className="Learn">
            <NavLink
              to={"/services"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Services
            </NavLink>
          </motion.div>
          <motion.div variants={appearAnimate} className="pricing">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About
            </NavLink>
          </motion.div>
          <motion.div variants={appearAnimate} className="help">
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact
            </NavLink>
          </motion.div>
        </div>
        <div className="buttons font-semibold flex gap-8">
          <motion.button
            variants={appearAnimate}
            className="number p-4 rounded-r-lg rounded-bl-lg bg-white"
          >
            453345342
          </motion.button>
          <motion.button
            variants={appearAnimate}
            className="call p-4 rounded-r-lg rounded-bl-lg bg-secondary text-white"
          >
            Get a quote
          </motion.button>
        </div>
      </motion.div>
      <div
        className={` top-0 navbar ${
          invisible ? " invisible static " : "fixed"
        } justify-between pt-4 pb-20 px-10 top-0 w-full lg:hidden  z-30 text-lg `}
      >
        <div className="logo absolute z-60  left-0 p-[inherit] ">logo</div>

        <button
          className="btn absolute z-60  right-0 p-[inherit]"
          onClick={() => setToggle(!isToggled)}
        >
          =
        </button>
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
    </>
  );
};

export default Navbar;
