import single from "../assets/single.jpeg";
import { insuranceTypes } from "../pages/Services";

export const SectionOne = () => {
  return (
    <>
      <div className=" section px-10 py-10 lg:px-32 lg:py-40 min-h-min flex lg:flex-row flex-col gap-20 justify-between bg-neutral">
        <div className="photo h-full  lg:w-2/4 w-full">
          <div className="  ">
            <img
              src={single}
              className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
              alt=""
            />
          </div>
        </div>
        <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  ">
          <div className="number font-bold text-lg">__01</div>
          <div className="title text-3xl lg:text-7xl font-semibold ">
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
          <div className="call p-4 rounded-r-lg w-fit rounded-bl-lg bg-primary text-white">
            get a qoute
          </div>
        </div>
      </div>
      <div className="types lg:px-32 text-4xl px-10 overflow-x-scroll py-10 lg:py-28 min-h-min flex flex-col gap-32 justify-between bg-primary">
        <div className="heading text-white lg:text-8xl">Insurance types</div>
        <div className="cardcontainer grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 ">
          {insuranceTypes.map((e) => (
            <div className="p-8 space-y-3 h-[30rem] flex justify-between flex-col bg-white rounded-xl">
              <span className="inline-block text-secondary ">{e.icon}</span>

              <h1 className="text-xl font-semibold  capitalize ">{e.name}</h1>

              <p className="text-sm">{e.description}</p>

              <a
                href="#"
                className="inline-flex p-2 text-secondary capitalize rounded-full "
              ></a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
