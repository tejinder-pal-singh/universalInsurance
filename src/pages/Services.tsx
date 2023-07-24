import { Link } from "react-router-dom";
import single from "../assets/single.jpeg";
import { Button } from "../components/Button";

import ServiceInvestment from "../components/ServiceInvestment";
import { insuranceTypes, travelInsuranceTypes } from "../data";

export const Services = () => {
  return (
    <>
      <div className="overflow-hidden selection:text-lg text-justify px-10 lg:px-32  w-full h-full bg-cool">
        <div className="navbar-spacer invisible py-10 lg:py-20">
          navbar plachoder
        </div>
        <div id="insurances" className="heading font-bold text-3xl lg:text-6xl">
          Insurance Services
        </div>

        <div className="section  pt-10  lg:py-12 min-h-min flex lg:flex-row flex-col gap-10 justify-between ">
          <img
            src={single}
            className=" object-cover flex-grow h-full w-full lg:w-1/3 lg:h-1/3 rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />

          <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full">
            <div className="title  font-semibold lg:text-2xl  ">
              <div className="text-2xl ">
                We make sure that, you are aware of each and every aspect in
                detail,
              </div>
            </div>

            <div className="paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg">
              <div>
                Expenses like private nursing or making changes to your home or
                vehicle to enhance your mobility are not included in your
                provincial health insurance plan and might not be covered by
                typical employer-sponsored health plans. Additionally, facing a
                critical illness brings about various other challenges, such as
                seeking the best medical care, fulfilling day-to-day needs (like
                taking care of your children), and managing the stress and
                anxiety that comes with it. PII's critical illness insurance
                offers a lump-sum benefit to financially support you if you are
                diagnosed with a covered critical illness and survive. You can
                utilize this benefit payment to supplement your health insurance
                plan and any group disability coverage you may have in the
                following ways: Alleviate financial burden: Pay off or reduce
                your mortgage, credit card bills, or other debts. Keep your
                business running smoothly. Maintain your independence: Make
                modifications to your home or vehicle to enhance your mobility.
                Hire domestic help during your recovery. Fund a leave of absence
                for yourself or your spouse. Access advanced medical services:
                In Canada, pay for medications and treatments not covered by
                provincial health plans. If seeking treatment outside of Canada,
                cover the expenses of treatments that may not be available at
                home, as well as travel and accommodation costs for your family.
                Aid in your recovery as you see fit: Spend more quality time
                with your family or utilize the benefit in any other way that
                helps you focus on getting better.
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg lg:text-xl text-secondary font-semibold">
          "We understand that insurance might be complicated for most of time,
          protecting yourself and your loved ones doesn’t have to be. That's why
          <span className="text-primary  font-semibold">
            {" "}
            Universal Insurance
          </span>{" "}
          exists on the first place. We are here to assist you on each and every
          steep of the journey."
          <div style={{ textAlign: "right" }} className="text-red">
            - Narinder Multani (Universal Insurance)
          </div>
        </div>

        <div className="types text-xl  py-10 lg:py-12 min-h-min flex flex-col gap-10 justify-between">
          <div className="heading font-semibold text-2xl">
            Check out our products, each designed to help you protect what
            matters the most.
          </div>
          <div className="cardcontainer grid grid-cols-1 gap-8">
            {insuranceTypes.map((e, i) => (
              <div
                key={e.name}
                id={e.id}
                className={`p-8 space-y-6 min-h-[30rem] flex ${
                  i % 2 === 0
                    ? "flex-col-reverse lg:flex-row"
                    : "flex-col-reverse lg:flex-row-reverse"
                } justify-between bg-white rounded-xl`}
              >
                <div className="flex gap-5 text-lg flex-col justify-center">
                  <div className="flex flex-col gap-2 items-center lg:flex-row lg:gap-2">
                    <div className="w-fit h-fit text-primary rounded-full">
                      {e.icon}
                    </div>

                    <h3 className="text-2xl lg:2xl font-semibold text-primary capitalize">
                      {e.name}
                    </h3>
                  </div>

                  <p className="text-lg">{e.description}</p>
                  {e.meta}
                  {e.id === "travel" && (
                    <div>
                      <div className="text-xl">Travel insurances offered:</div>
                      {travelInsuranceTypes.map((i) => (
                        <div id={i.id} key={i.id}>
                          <div className="text-xl font-bold">{i.name}</div>
                          <div>{i.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4">
                    <Link to={`/contact?type=${e.name}`}>
                      <Button className="w-fit bg-secondary text-white">
                        get a quote
                      </Button>
                    </Link>
                    {e.learnMore && (
                      <Link to={`/${e.id}`}>
                        <Button className="w-fit bg-primary text-white">
                          Learn More
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                <div
                  className={`z-20 py-5 flex items-end w-full h-[24rem] ${
                    i % 2 == 0 ? "lg:pl-32" : "lg:pr-32"
                  }`}
                >
                  <img
                    src={e.imageUrl}
                    className={`object-cover flex-grow w-full h-full lg:min-w-full ${
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
      <ServiceInvestment />
    </>
  );
};
