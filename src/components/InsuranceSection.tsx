import interaction from "../assets/interaction.webp";
import { insuranceTypes } from "../pages/Services";
import { ReactComponent as ArrowIcon } from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";

import "./styles.css";
import { Button } from "./Button";
import { Variants, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
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
      duration: 0.5,
    },
  },
};
const revealCard: Variants = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,

    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};
export const SectionOne = () => {
  return (
    <>
      <motion.div
        variants={revealParent}
        initial="initial"
        whileInView="animate"
        className=" section overflow-hidden px-10 py-10 lg:px-32 lg:py-20 min-h-min flex lg:flex-row flex-col gap-10 justify-between bg-neutral"
      >
        <motion.div className="photo h-full  lg:w-2/4 w-full">
          <div className="  ">
            <img
              src={interaction}
              className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          variants={staggerParent}
          className="paragraph text-lg text-justify flex flex-col gap-10 lg:w-4/5 w-full  "
        >
          <motion.span
            variants={revealChildRight}
            className="title font-semibold text-2xl"
          >
            A one stop solution to secure the future of entire family
          </motion.span>
          <motion.span
            variants={revealChildRight}
            className="paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg"
          >
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
              deserunt perspiciatis rerum magnam,
            </span>
            <span className="">
              quas iusto fugiat autem ratione omnis amet, minima excepturi
              illum, quo vel quisquam voluptates quia nisi.
            </span>
          </motion.span>
          <motion.div variants={buttonReveal}>
            <Link to={"/contact"}>
              <Button className=" bg-primary text-white w-fit">
                Get a qoute
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="text-justify lg:px-32 text-3xl px-10 overflow-hidden py-20 lg:py-12min-h-min flex flex-col gap-10 justify-between gradient">
        <motion.div
          variants={revealParent}
          initial="initial"
          whileInView="animate"
          className="heading lg:text-2xl"
        >
          Insurance types
        </motion.div>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          className=" grid grid-cols-1 gap-8  xl:gap-12 md:grid-cols-2 xl:grid-cols-3 "
        >
          {insuranceTypes.map((e) => (
            <motion.div
              key={e.name}
              variants={revealCard}
              whileHover={{ scale: 1.1 }}
              style={{ height: "388px" }}
              className="p-8  h-fit justify-between flex flex-col group gap-5 bg-white rounded-xl"
            >
              <HashLink to={`/services#${e.name.split(" ")[0]}`}>
                <div className="flex items-baseline gap-2 text-secondary ">
                  <div>{e.icon}</div>

                  <div className="text-xl inline font-semibold capitalize">
                    {e.name}
                  </div>
                </div>

                <p className="text-lg">{e.description}</p>

                <div className="flex group-hover:text-primary text-secondary  items-center">
                  <div className="inline-flex p-2  text-lg capitalize rounded-full ">
                    Know more
                  </div>
                  <ArrowIcon className="p-2" />
                </div>
              </HashLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
