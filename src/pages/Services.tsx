import single from "../assets/single.jpeg";

import travelInsurance from "../assets/travelinsurance.webp";
import lifeInsurance from "../assets/lifeinsurance.jpg";
import healthInsurance from "../assets/healthinsurance.jpg";
import carInsurance from "../assets/carinsurance.webp";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { ReactComponent as CarIcon } from "../assets/car.svg";
import { ReactComponent as TravelIcon } from "../assets/travel.svg";
import { ReactComponent as HealthIcon } from "../assets/health.svg";
import { ReactComponent as LifeIcon } from "../assets/life.svg";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import SupportIcon from "@mui/icons-material/Support";
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
export const insuranceTypes = [
  {
    id: "Health",
    icon: <HealthAndSafetyIcon />,
    name: "Health Insurance",
    imageUrl: healthInsurance,
    description:
      "Help protect yourself from regular health and dental costs and the expenses associated with disability, critical illness and long term care.",
  },

  {
    icon: <SupportIcon />,
    name: "Life Insurance",
    imageUrl: lifeInsurance,
    description:
      "Whether you want help covering final expenses or building a legacy, you can protect your family or business with term or permanent insurance from us.",
  },
  {
    icon: <AirplanemodeActiveIcon />,
    name: "Travel Insurance",
    imageUrl: travelInsurance,
    description:
      "Get help covering your unexpected emergency medical expenses and more wherever you travel with a travel insurance plan from us.",
  },
];
export const Services = () => {
  return (
    <>
      <div className="insurance text-lg text-justify px-10 lg:px-32  w-full h-full bg-cool">
        <div className="navbar-spacer invisible py-10 lg:py-20">
          navbar plachoder
        </div>
        <motion.div
          variants={revealParent}
          initial="initial"
          whileInView="animate"
          className="heading font-bold text-3xl lg:text-6xl"
        >
          Insurance Sevices
        </motion.div>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          className=" section  pt-10  lg:py-40 min-h-min flex lg:flex-row flex-col gap-10 justify-between "
        >
          <motion.img
            variants={revealChildRight}
            src={single}
            className=" object-cover flex-grow  h-full w-full  lg:w-1/2 lg:h-1/2 rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            className="paragraph   flex flex-col gap-10 lg:w-4/5 w-full  "
          >
            <div className="title  font-semibold lg:text-2xl  ">
              <motion.div
                variants={revealChildLeft}
                className="text-lg lg:text-xl"
              >
                Insurance can be complicated.
              </motion.div>
              <motion.div variants={revealChildLeft} className="text-2xl ">
                But protecting yourself and your loved ones doesn’t have to be.
              </motion.div>
            </div>
            <motion.div
              variants={revealChildLeft}
              className="paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg"
            >
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                cum deserunt perspiciatis rerum magnam,
              </div>
              <div className="">
                quas iusto fugiat autem ratione omnis amet, minima excepturi
                illum, quo vel quisquam voluptates quia nisi.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="types text-xl  py-10 lg:py-28 min-h-min flex flex-col gap-10 justify-between ">
          <motion.div
            variants={revealParent}
            initial="initial"
            whileInView="animate"
            className="heading font-semibold text-2xl"
          >
            Check out our products, each designed to help you protect what
            matters the most.
          </motion.div>
          <div className="cardcontainer grid grid-cols-1 gap-8  ">
            {insuranceTypes.map((e, i) => (
              <motion.div
                variants={revealChildRight}
                initial="initial"
                whileInView="animate"
                id={e.id}
                className={`p-8 space-y-3 min-h-[30rem] flex ${
                  i % 2 === 0
                    ? "flex-col-reverse lg:flex-row "
                    : "flex-col-reverse lg:flex-row-reverse"
                } justify-between bg-white rounded-xl`}
              >
                <div className=" flex  gap-5  flex-col ">
                  <div className="flex flex-col gap-5 lg:flex lg:items-center lg:flex-row lg:gap-2">
                    <div className="w-fit h-fit p-2 text-secondary bg-primary rounded-full ">
                      {e.icon}
                    </div>

                    <h1 className="text-3xl lg:6xl font-semibold text-primary  capitalize ">
                      {e.name}
                    </h1>
                  </div>

                  <p className="text-lg">{e.description}</p>

                  <motion.div
                    variants={buttonReveal}
                    initial="initial"
                    whileInView="animate"
                  >
                    <Button className="w-fit bg-secondary text-white">
                      get a quote
                    </Button>
                  </motion.div>
                </div>

                <div className="z-20 lg:px-32  pb-5 flex items-end  w-full h-[24rem] ">
                  <img
                    src={e.imageUrl}
                    className={`object-cover flex-grow w-full h-full ${
                      i % 2 === 0
                        ? "rounded-l-[6.5rem] rounded-br-[6.5rem]"
                        : "rounded-r-[6.5rem] rounded-bl-[6.5rem]"
                    } `}
                    alt=""
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="investments text-lg px-10 py-10 lg:px-32  w-full h-full bg-breeze">
        <motion.div
          variants={revealParent}
          initial="initial"
          whileInView="animate"
          className="heading font-bold text-3xl  lg:text-6xl"
        >
          Investment opportunities
        </motion.div>
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          className=" section  pt-10   lg:py-40 min-h-min flex lg:flex-row flex-col gap-10  "
        >
          <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  ">
            <motion.div
              variants={revealChildRight}
              className="title text-3xl lg:text-6xl font-semibold "
            >
              Investors today face a unique combination of challenges—but they
              don’t have to face them alone.
            </motion.div>
            <motion.div
              variants={revealChildRight}
              className="paragraph flex justify-between gap-5 text-lg"
            >
              <div>
                Sound financial advice makes all the difference, that’s why we
                strive to provide more than just investment results for clients.
                We also believe in providing hands-on expertise to go beyond –
                helping advisors help their clients build and protect their
                wealth for generations.
              </div>
            </motion.div>
            <motion.div variants={buttonReveal} className=" ">
              <Link to={"/contact"}>
                <Button className="bg-secondary text-white"> Contact us</Button>
              </Link>
            </motion.div>
          </div>
          <div className="photo h-full  lg:w-2/4 w-full">
            <div className="  ">
              <img
                src={single}
                className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
