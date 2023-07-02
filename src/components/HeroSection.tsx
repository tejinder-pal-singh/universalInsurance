import { Variants, motion } from "framer-motion";
import familyCrop from "../assets/familyCrop.jpg";
import "./styles.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const revealParent: Variants = {
  initial: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,

      when: "beforeChildren",
    },
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
    <>
      <HeroContent />
    </>
  );
};

function HeroContent() {
  return (
    <>
      {" "}
      <div className="mobile  lg:hidden">
        <div className="h-20"></div>
        <motion.div
          variants={revealParent}
          className=" overflow-hidden"
          initial="initial"
          animate="reveal"
        >
          <img src={familyCrop} alt="family" className="contain" />
          <motion.div
            variants={textParent}
            className="px-10 lg:pl-32  backdrop-blur-sm py-4 my-auto "
          >
            <motion.h1 variants={textReveal} className=" text-3xl break-words">
              Is your family
              <motion.span
                variants={textReveal}
                className="oval bg-secondary rounded-full  px-2 pb-2 text-white"
              >
                secured
              </motion.span>
              from whatever life has to offer?
            </motion.h1>
            <motion.p variants={textReveal} className="text-base pb-5">
              Well, surely we cannot predict the future but we can be ready for
              it. Here at 'Universal Insurance', we ensure you to stand with you
              during the time of urgency. For a better future of you and your
              family
            </motion.p>
            <motion.div variants={emailReveal}>
              <Link to={"/contact"}>
                <Button className="text-white bg-secondary">
                  Schedule a call with our agent
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          {/* <div className='hero-banner-img'></div>  */}
        </motion.div>{" "}
      </div>
      <div className=" large-screens-only hidden lg:block">
        <motion.div
          variants={revealParent}
          initial="initial"
          animate="reveal"
          className="flex-container"
        >
          <motion.div
            variants={textParent}
            className="px-10 lg:pl-32 lg md:max-w-[560px] items-center backdrop-blur-sm py-4 my-auto hero-banner-headingText-container"
          >
            <motion.h1 variants={textReveal} className=" home-hero-heading ">
              Is your family is <span className="oval">secured</span> from
              whatever life has to offer?
            </motion.h1>
            <motion.p variants={textReveal} className="home-hero-desc py-4">
              Well, surely we cannot predict the future but we can be ready for
              it. Here at 'Universal Insurance', we ensure you to stand with you
              during the time of urgency. For a better future of you and your
              family
            </motion.p>
            <motion.div variants={emailReveal}>
              <Link to={"/contact"}>
                <Button className="text-white bg-secondary">
                  Schedule a call with our agent
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          {/* <div className='hero-banner-img'></div>  */}
        </motion.div>
      </div>
    </>
  );
}

/* function BlobBackground() {
  return (
    <>
      <div className="blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-full aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate "></div>
    </>
  );
} */
