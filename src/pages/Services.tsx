import Navbar from "../components/Navbar";
import single from "../assets/single.jpeg";

import travelInsurance from "../assets/travelinsurance.webp";
import lifeInsurance from "../assets/lifeinsurance.jpg";
import healthInsurance from "../assets/healthinsurance.jpg";
import carInsurance from "../assets/carinsurance.webp";

import { ReactComponent as CarIcon } from "../assets/car.svg";
import { ReactComponent as TravelIcon } from "../assets/travel.svg";
import { ReactComponent as HealthIcon } from "../assets/health.svg";
import { ReactComponent as LifeIcon } from "../assets/life.svg";
import { Link } from "react-router-dom";

export const insuranceTypes = [
  {
    icon: <CarIcon />,
    imageUrl: carInsurance,
    name: "Car Insurance",
    description:
      "By investing in a comprehensive car insurance policy, you can protect yourself from financial loss and ensure that you’re able to get back on the road as quickly as possible after an accident or other covered event.",
  },
  {
    icon: <LifeIcon />,
    name: "Life Insurance",
    imageUrl: lifeInsurance,
    description:
      "Whether you want help covering final expenses or building a legacy, you can protect your family or business with term or permanent insurance from us.",
  },
  {
    icon: <TravelIcon />,
    name: "Travel Insurance",
    imageUrl: travelInsurance,
    description:
      "Get help covering your unexpected emergency medical expenses and more wherever you travel with a travel insurance plan from us.",
  },
  {
    icon: <HealthIcon />,
    name: "Health Insurance",
    imageUrl: healthInsurance,
    description:
      "Help protect yourself from regular health and dental costs and the expenses associated with disability, critical illness and long term care.",
  },
];
export const Services = () => {
  return (
    <>
      <div className="insurance px-10  lg:px-32  w-full h-full bg-cool">
        <Navbar invisible />
        <div className="heading font-bold text-4xl lg:text-6xl">
          Insurance Sevices
        </div>
        <div className=" section  py-10  lg:py-40 min-h-min flex lg:flex-row flex-col gap-20 justify-between ">
          <img
            src={single}
            className=" object-cover flex-grow  h-full w-full  lg:h-full rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />

          <div className="paragraph  flex flex-col gap-10 lg:w-4/5 w-full  ">
            <div className="title text-3xl lg:text-6xl font-semibold ">
              Insurance can be complicated. But protecting yourself and your
              loved ones doesn’t have to be.
            </div>
            <div className="paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                cum deserunt perspiciatis rerum magnam,
              </div>
              <div className="">
                quas iusto fugiat autem ratione omnis amet, minima excepturi
                illum, quo vel quisquam voluptates quia nisi.
              </div>
            </div>
          </div>
        </div>
        <div className="types text-4xl  py-10 lg:py-28 min-h-min flex flex-col gap-32 justify-between ">
          <div className="heading font-semibold lg:text-6xl">
            Check out our products, each designed to help you protect what
            matters the most.
          </div>
          <div className="cardcontainer grid grid-cols-1 gap-8  ">
            {insuranceTypes.map((e, i) => (
              <div
                className={`p-8 space-y-3 min-h-[30rem] flex ${
                  i % 2 === 0
                    ? "flex-col-reverse lg:flex-row "
                    : "flex-col-reverse lg:flex-row-reverse"
                } justify-between bg-white rounded-xl`}
              >
                <div className=" flex justify-between flex-col ">
                  <div className="flex flex-col gap-5 py-3">
                    <span className="w-fit h-full p-3 text-secondary bg-primary rounded-full ">
                      {e.icon}
                    </span>

                    <h1 className="text-3xl font-semibold text-primary  capitalize ">
                      {e.name}
                    </h1>

                    <p className="text-sm">{e.description}</p>
                  </div>
                  <div className="call p-4 rounded-r-lg w-fit text-base rounded-bl-lg bg-secondary text-white">
                    get a qoute
                  </div>
                </div>

                <div className="z-20 lg:px-32  pb-5   w-full h-[24rem] ">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="investments px-10 pt-20 lg:px-32  w-full h-full bg-breeze">
        <div className="heading font-bold text-4xl  lg:text-6xl">
          Investment oppurtunities
        </div>
        <div className=" section  py-10  lg:py-40 min-h-min flex lg:flex-row flex-col gap-20 justify-between ">
          <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  ">
            <div className="title text-3xl lg:text-6xl font-semibold ">
              Investors today face a unique combination of challenges—but they
              don’t have to face them alone.
            </div>
            <div className="paragraph flex justify-between gap-5 text-lg">
              <div>
                Sound financial advice makes all the difference, that’s why we
                strive to provide more than just investment results for clients.
                We also believe in providing hands-on expertise to go beyond –
                helping advisors help their clients build and protect their
                wealth for generations.
              </div>
            </div>
            <div className="call p-4 rounded-r-lg w-fit rounded-bl-lg bg-secondary text-white">
              <Link to={"/contact"}> Contact us</Link>
            </div>
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
        </div>
      </div>
    </>
  );
};
