import single from "../assets/single.jpeg";
interface InsuranceType {
  name: string;
  /*  logo:string, */
  description: string;
}
export const SectionOne = () => {
  const insuranceTypes: InsuranceType[] = [
    {
      name: "car",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ad harum incidunt accusamus, nobis, maiores praesentium est minus eum fugiat, aliquam eligendi delectus repellendus odio. Saepe nam sint tempore",
    },
  ];
  return (
    <>
      <div className=" section px-10 py-10 lg:px-32 lg:py-40 min-h-min flex lg:flex-row flex-col gap-20 justify-between bg-red-100">
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
          <div className="number">01</div>
          <div className="title text-3xl lg:text-8xl ">
            Find Individtal and family jealth insurance
          </div>
          <div className="paragraph flex justify-between gap-5 text-sm">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
              deserunt perspiciatis rerum magnam,
            </div>
            <div className="">
              quas iusto fugiat autem ratione omnis amet, minima excepturi
              illum, quo vel quisquam voluptates quia nisi.
            </div>
          </div>
          <div className="call p-4 rounded-r-lg w-fit rounded-bl-lg bg-green-500 text-white">
            get a qoute
          </div>
        </div>
      </div>
      <div className="types lg:px-32 text-4xl px-10 py-10 lg:py-28 min-h-min flex flex-col gap-32 justify-between bg-green-500">
        <div className="heading text-white lg:text-8xl">Insurance types</div>
        <div className="cardcontainer overflow-x-scroll flex gap-10  ">
          {insuranceTypes.map((e) => (
            <div className="card h-[30rem] w-96 rounded-b-xl p-10 rounded-tr-xl flex flex-col  gap-5 bg-white">
              <div className="title text-3xl">{e.name}</div>
              <div className="title text-sm">{e.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
