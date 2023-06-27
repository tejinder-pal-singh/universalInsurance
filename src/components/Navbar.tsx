import { Variants, motion } from "framer-motion";
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
const Navbar = ({ invisible }: { invisible?: boolean }) => {
  return (
    <motion.div
      variants={appearParent}
      initial={"initial"}
      animate={"reveal"}
      className={`navbar ${
        invisible ? "invisible static" : "absolute"
      }   top-0  z-30 text-lg h-30 py-10 items-center hidden  px-32 lg:flex w-full justify-between`}
    >
      <motion.div variants={appearAnimate} className="logo">
        <Link to={"/"}> logo</Link>
      </motion.div>
      <div className="links gap-24 flex items-baseline justify-between">
        <motion.div variants={appearAnimate} className="Learn">
          <NavLink
            to={"/services"}
            className={({ isActive, isPending }) =>
              isPending ? "text-black" : isActive ? "text-green-500" : ""
            }
          >
            Services
          </NavLink>
        </motion.div>
        <motion.div variants={appearAnimate} className="pricing">
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              isPending ? "text-black" : isActive ? "text-green-500" : ""
            }
          >
            About
          </NavLink>
        </motion.div>
        <motion.div variants={appearAnimate} className="help">
          <NavLink
            to={"/contact"}
            className={({ isActive, isPending }) =>
              isPending ? "text-black" : isActive ? "text-green-500" : ""
            }
          >
            Contact
          </NavLink>
        </motion.div>
      </div>
      <div className="buttons flex gap-8">
        <motion.button
          variants={appearAnimate}
          className="number p-4 rounded-r-lg rounded-bl-lg bg-white"
        >
          453345342
        </motion.button>
        <motion.button
          variants={appearAnimate}
          className="call p-4 rounded-r-lg rounded-bl-lg bg-indigo-950 text-white"
        >
          Get a quote
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
