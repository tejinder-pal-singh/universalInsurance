import interaction from "../assets/interaction.webp";
import { insuranceTypes } from "../pages/Services";
import { ReactComponent as ArrowIcon } from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { Button } from "./Button";
import { Variants, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import Slider, { Settings } from "react-slick";
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  autoplay: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
      <div className=" section overflow-hidden px-10 py-10 lg:px-32 lg:py-20 min-h-min flex lg:flex-row flex-col gap-10 justify-between bg-neutral">
        <div className="photo h-full  lg:w-2/4 w-full">
          <img
            src={interaction}
            className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
            alt=""
          />
        </div>
        <div className="paragraph text-lg text-justify flex flex-col gap-10 lg:w-4/5 w-full  ">
          <span className="title font-semibold text-2xl">
            A one stop solution to secure the future of entire family
          </span>
          <span className="paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
              deserunt perspiciatis rerum magnam,
            </span>
            <span className="">
              quas iusto fugiat autem ratione omnis amet, minima excepturi
              illum, quo vel quisquam voluptates quia nisi.
            </span>
          </span>
          <div>
            <Link to={"/contact"}>
              <Button className=" bg-primary text-white w-fit">
                Get a qoute
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-justify lg:px-32 text-3xl px-10 overflow-hidden py-20 lg:py-12min-h-min flex flex-col gap-10 justify-between gradient">
        <div className="heading lg:text-2xl font-semibold">Insurance types</div>

        <Slider {...settings}>
          {insuranceTypes.map((e) => (
            <HashLink key={e.name} to={`/services#${e.id}`}>
              <motion.div
                variants={revealCard}
                whileHover={{ scale: 1.1 }}
                className="p-8 min-h-[450px] m-4 my-14 h-fit justify-between flex flex-col group gap-5 bg-white rounded-xl"
              >
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
              </motion.div>
            </HashLink>
          ))}
        </Slider>
      </div>
    </>
  );
};
