import { Variants, motion } from "framer-motion";
import family from "../assets/family.webp";
import Navbar from "./Navbar";
const revealParent: Variants = {
  initial: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,

      when: "beforeChildren",
    },
  },
};
const heroParent: Variants = {
  initial: { opacity: 1 },
  reveal: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
const textParent: Variants = {
  initial: { opacity: 1 },
  reveal: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
const emailReveal: Variants = {
  initial: { opacity: 0, y: 10 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
const textReveal: Variants = {
  initial: { opacity: 0, x: -100 },
  reveal: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
export const HeroSection = () => {
  return (
    <div className="flex relative flex-col lg:h-[750px] bg-primary">
      <div className="blob absolute h-full w-full backdrop-blur-3xl z-10"></div>

      <motion.div
        variants={revealParent}
        initial={"initial"}
        animate={"reveal"}
        className=" overflow-clip lg:h-full  relative flex flex-col justify-center lg:justify-between lg:items-baseline  "
      >
        <Navbar invisible />
        <BlobBackground />

        <HeroContent />
      </motion.div>
    </div>
  );
};

function BlobBackground() {
  return (
    <>
      <div className="blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-full aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate "></div>
    </>
  );
}
function HeroContent() {
  return (
    <motion.div
      variants={heroParent}
      className=" z-20 px-10 pb-5 lg:h-3/4 lg:px-32 hero w-full  lg:py-5 flex-col-reverse justify-evenly flex lg:flex-row lg:justify-between "
    >
      <motion.div
        variants={textParent}
        className=" lg:w-1/2 h-full gap-8 lg:gap-14 flex flex-col"
      >
        <motion.div className="text-xl font-semibold md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl items-center lg:items-start text-white flex flex-col gap-5 lg:gap-14">
          <motion.div variants={textReveal} className="text1">
            The best way
          </motion.div>
          <motion.div variants={textReveal} className="text1  flex ">
            to get
            <motion.span variants={textReveal} className="relative">
              <span
                className="block absolute  left-3 right-0 top-0 lg:-bottom-4 -bottom-1  rounded-full border-4 "
                aria-hidden="true"
              ></span>
              <span className="relative px-6">confidence</span>
            </motion.span>
          </motion.div>
          <motion.div variants={textReveal} className="text1">
            in the future
          </motion.div>
        </motion.div>
        <motion.div
          variants={emailReveal}
          className="button email w-full text-sm md:text-lg  lg:text-xl  flex items-center h-min bg-white rounded-r-lg "
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="lg:w-9/12 w-8/12 h-full p-4 appearance-none focus:appearance-none active:appearance-none  "
          />
          <button className="flex-grow h-full p-4 rounded-r-lg rounded-bl-lg bg-secondary text-white">
            Get insurance plan
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={textReveal}
        className="lg:w-1/2 h-full  flex lg:justify-end justify-center "
      >
        <div className=" h-full  rounded-xl ">
          <img
            src={family}
            className="object-cover rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
