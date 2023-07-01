import single from "../assets/single.jpeg";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Variants, motion } from "framer-motion";
const revealParent: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,

      when: "beforeChildren",
    },
  },
};
const staggerParent: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,

      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const revealChildLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,

    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
const buttonReveal: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
const revealChildRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,

    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};
export const SectionTwo = () => {
  return (
    <motion.div
      variants={revealParent}
      initial="initial"
      whileInView="animate"
      className=" text-justify section px-10 py-10 lg:px-32 lg:py-20 min-h-min flex lg:flex-row flex-col gap-10   bg-neutral"
    >
      <motion.div
        variants={staggerParent}
        className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  "
      >
        <motion.div
          variants={revealChildLeft}
          className="title text-2xl lg:text-2xl font-semibold "
        >
          Find Investment Plans
        </motion.div>
        <motion.div
          variants={revealChildLeft}
          className="paragraph flex flex-col lg:flex-row  gap-5 text-lg"
        >
          <div>
            <b>RRSP</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus cum deserunt perspiciatis rerum magnam,
          </div>
          <div className="">
            <b>RESP</b> quas iusto fugiat autem ratione omnis amet, minima
            excepturi illum, quo vel quisquam voluptates quia nisi.
          </div>
        </motion.div>
        <motion.div variants={buttonReveal}>
          <Link to={"/contact"}>
            <Button className=" w-fit  bg-primary text-white">
              Contact us
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <img
        src={single}
        className="rounded-b-[6.5rem] rounded-tr-[6.5rem]"
        width={500}
        alt=""
      />
    </motion.div>
  );
};
