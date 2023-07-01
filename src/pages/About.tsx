import company from "../assets/company.jpg";
import team from "../assets/team.jpeg";

import { ReactComponent as TeamIcon } from "../assets/team.svg";
import { ReactComponent as SolutionIcon } from "../assets/brain.svg";
import { ReactComponent as IdeaIcon } from "../assets/idea.svg";
import { ReactComponent as WorldIcon } from "../assets/world.svg";
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
      delay: 0.5,
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
const bottomReveal: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
const revealPhoto: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
      delay: 1,
    },
  },
};
const about = [
  {
    title: "Dedicated team",
    desc: "We are apply our passion, integrity, and expertise every day to solving the needs of our clients and finding new ways for them to realize their goals.",
    icon: <TeamIcon />,
  },
  {
    title: "Driven by solution",
    desc: "We are driven by creating the right solutions for our clients using investing art, science, and expertise across the firm, around the world, and across nearly every asset class, strategy, and vehicle.",
    icon: <SolutionIcon />,
  },
  {
    title: "Power of ideas",
    desc: "We believe in the power of ideas over a top-down investing approach or philosophy. We seek out and embrace diverse thinking and ideas to create the best outcomes for our clients and their differing needs.",
    icon: <IdeaIcon />,
  },
  {
    title: "Solving challenges",
    desc: "We commit to our responsibilities, the role we play in the world, and the challenges we help solve - from the products we create to how we apply ESG principles as investors and how we live them as an organization.",
    icon: <WorldIcon />,
  },
  /*  {
    title: "",
    desc: "",
    icon: <[name]Icon />,
  }, */
];
const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80",
  },
  {
    name: "Mary Sue",
    designation: "Co-founder",
    imageUrl:
      "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
];
export const About = () => {
  return (
    <>
      <div className="relative text-justify bg-breeze overflow-hidden">
        <div className="blob absolute h-full w-full backdrop-blur-3xl z-10 "></div>
        <div className="blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-3/4 aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate "></div>

        <div className="navbar-spacer invisible pt-20">navbar plachoder</div>

        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          className="z-20 px-10  pb-10 lg:h-[750px] lg:px-32  hero w-full items-center lg:py-5 flex-col-reverse gap-20 flex lg:flex-row lg:justify-between "
        >
          <motion.div
            variants={revealParent}
            className="z-20 text-justify heading lg:w-2/3 w-full  text-3xl  lg:text-6xl"
          >
            We are an insurance and investment firm dedicated to creating
            greater possibilities for our clients.
          </motion.div>

          <motion.img
            variants={revealParent}
            src={company}
            className="z-10 object-cover flex-grow  h-full w-full lg:w-1/3 lg:h-3/4 rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />
        </motion.div>
      </div>
      <div>
        <div className="z-20 lg:px-32 px-10  pt-10  lg:min-h-[750px] hero w-full bg-white flex-col gap-10 flex ">
          <motion.div
            variants={revealParent}
            initial="initial"
            whileInView="animate"
            className="heading w-2/3 text-3xl lg:text-6xl font-bold"
          >
            About Universal Insurance
          </motion.div>
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4"
          >
            {about.map((e) => (
              <motion.div
                variants={revealParent}
                key={e.title}
                className="flex flex-col items-center text-2xl space-y-3 text-center bg-white rounded-xl dark:bg-gray-800"
              >
                <span className="inline-block p-3 text-secondary bg-primary rounded-full ">
                  {e.icon}
                </span>

                <h1 className="text-xl font-semibold  capitalize">{e.title}</h1>

                <p className="text-gray-500 text-xl dark:text-gray-300">
                  {e.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={revealPhoto}
            initial="initial"
            whileInView="animate"
            className="z-20   py-5   w-full h-[24rem] "
          >
            <img
              src={team}
              className="object-cover  w-full h-full rounded-r-[6.5rem] rounded-bl-[6.5rem]"
              alt=""
            />
          </motion.div>
          <motion.div
            variants={revealChildLeft}
            initial="initial"
            whileInView="animate"
            className="text-xl"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cum assumenda expedita voluptate, reprehenderit voluptatum, odit
            perspiciatis fugiat eius beatae ducimus ipsam necessitatibus
            doloribus ratione distinctio dolores deserunt nemo maxime.
          </motion.div>
        </div>

        <div className="z-20 lg:px-32 px-10  py-10  hero w-full  flex-col gap-10 flex ">
          <motion.div
            variants={revealParent}
            initial="initial"
            whileInView="animate"
            className="heading w-2/3 font-bold text-2xl lg:text-2xl"
          >
            Our team
          </motion.div>
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {teamMembers.map((e) => (
              <motion.div
                variants={bottomReveal}
                key={e.name}
                className="w-full max-w-xs text-center"
              >
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={e.imageUrl}
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-xl font-medium ">{e.name}</h3>
                  <span className="mt-1 text-base font-medium ">
                    {e.designation}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};
