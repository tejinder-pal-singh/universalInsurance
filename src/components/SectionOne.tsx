import single from "../assets/single.jpeg";
interface InsuranceType {
  name: string;
  /*  logo:string, */
  description: string;
}
export const SectionOne = () => {
  const insuranceTypes: InsuranceType[] = [
    {
      name: "Car",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ad harum incidunt accusamus, nobis, maiores praesentium est minus eum fugiat, aliquam eligendi delectus repellendus odio. Saepe nam sint tempore",
    },
    {
      name: "Life",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ad harum incidunt accusamus, nobis, maiores praesentium est minus eum fugiat, aliquam eligendi delectus repellendus odio. Saepe nam sint tempore",
    },
    {
      name: "Travel",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ad harum incidunt accusamus, nobis, maiores praesentium est minus eum fugiat, aliquam eligendi delectus repellendus odio. Saepe nam sint tempore",
    },
    {
      name: "car",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ad harum incidunt accusamus, nobis, maiores praesentium est minus eum fugiat, aliquam eligendi delectus repellendus odio. Saepe nam sint tempore",
    },
  ];
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
          <div className="paragraph flex justify-between gap-5 text-lg">
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
              <span className="inline-block text-secondary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold  capitalize ">
                {e.name} Insurance
              </h1>

              <p className="text-sm">{e.description}</p>

              <a
                href="#"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform  rounded-full rtl:-scale-x-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
