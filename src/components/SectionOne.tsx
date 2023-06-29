import single from "../assets/single.jpeg";
import { insuranceTypes } from "../pages/Services";
import { ReactComponent as ArrowIcon } from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";
export const SectionOne = () => {
  return (
    <>
      <div className=" section px-10 py-10 lg:px-32 lg:py-40 min-h-min flex lg:flex-row flex-col gap-10 justify-between bg-neutral">
        <div className="photo h-full  lg:w-2/4 w-full">
          <div className="  ">
            <img
              src={single}
              className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
              alt=""
            />
          </div>
        </div>
        <div className="paragraph text-lg text-justify flex flex-col gap-10 lg:w-4/5 w-full  ">
          <div className="title text-3xl lg:text-6xl font-semibold ">
            Find Individual and family health insurance
          </div>
          <div className="paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
              deserunt perspiciatis rerum magnam,
            </div>
            <div className="">
              quas iusto fugiat autem ratione omnis amet, minima excepturi
              illum, quo vel quisquam voluptates quia nisi.
            </div>
          </div>
          <div className="call p-4 S w-fit rounded-lg bg-primary text-white">
            get a qoute
          </div>
        </div>
      </div>
      <div className="text-justify lg:px-32 text-3xl px-10 overflow-hidden py-10 lg:py-28 min-h-min flex flex-col gap-10 justify-between bg-primary">
        <div className="heading text-white lg:text-6xl">Insurance types</div>
        <div className=" grid grid-cols-1 gap-8  xl:gap-12 md:grid-cols-2 xl:grid-cols-3 ">
          {insuranceTypes.map((e) => (
            <div className="p-8  h-fit justify-between flex flex-col gap-5  bg-white rounded-xl">
              <span className="inline-block text-secondary ">{e.icon}</span>

              <h1 className="text-xl font-semibold  capitalize ">{e.name}</h1>

              <p className="text-lg">{e.description}</p>

              <Link to={"/services"}>
                <div className="flex hover:text-primary text-secondary  items-center">
                  <div className="inline-flex p-2  text-lg capitalize rounded-full ">
                    Know more
                  </div>
                  <ArrowIcon className="p-2" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
