import { HeroSection } from "../components/HeroSection";
import familyPic from "../assets/familybeach.jpg";
import familySecure from "../assets/familylife.jpg";
import { lifeInsuranceTypes } from "../data";
import { Button } from "../components/Button";
const LifeInsurance = () => {
  return (
    <>
      <HeroSection
        imgSrc={familyPic}
        paragraph={
          <>
            <h1 className=" text-secondary text-3xl break-normal">
              Best way to{" "}
              <span className="oval bg-primary rounded-full  px-2 pb-2 text-white">
                secure
              </span>{" "}
              the future of your family
            </h1>
            <p className="text-secondary text-base pb-5">
              We know that family is important, and it can be difficult to be
              apart from your loved ones. If your parents or grandparents live
              in another country, you may be interested in bringing them closer
              to you by having them visit Canada. We at Universal Insurance can
              help you with this
            </p>
          </>
        }
        cta="Schedule a call with our agent >"
      />
      <div className="relative px-10 lg:px-32 text-justify bg-breeze overflow-hidden">
        <div className="navbar-spacer invisible pt-20">navbar placeholder</div>

        <div className="z-20  pb-10 lg:h-[530px]  hero w-full items-center lg:py-5 flex-col-reverse gap-20 flex lg:flex-row lg:justify-between ">
          <div className="z-20 text-justify heading lg:w-2/3 w-full  text-base">
            <div className="heading w-2/3 text-3xl lg:text-6xl font-bold">
              Why Should you get a Life Insurance?
            </div>
            Financial security is one of the most imperative steps one can take
            to secure the future of their families. That is the reason why
            people opt for a Life Insurance Plan. These plans are credible,
            safe, and trustworthy when it comes to entrusting your funds for a
            secure future of your family. Basically an Insurance Plan is a
            contract between the insurance provider and a person wherein the
            former makes sure that a specific amount is paid to the nominated
            beneficiary if the latter dies during the agreement term.
          </div>

          <div className="photo h-full  lg:w-2/4 w-full">
            <img
              src={familySecure}
              className="object-cover rounded-b-[6.5rem] rounded-tr-[6.5rem]"
            />
          </div>
        </div>
        <div className="types text-xl  py-10 lg:py-12 min-h-min flex flex-col gap-10 justify-between">
          <div className="heading font-semibold text-2xl">
            Check out our products, each designed to help you protect what
            matters the most.
          </div>
          <div className="cardcontainer grid grid-cols-1 gap-8">
            {lifeInsuranceTypes.map((e, i) => (
              <div
                key={e.name}
                id={e.id}
                className={`p-8 space-y-6 min-h-[30rem] flex ${
                  i % 2 === 0
                    ? "flex-col-reverse lg:flex-row"
                    : "flex-col-reverse lg:flex-row-reverse"
                } justify-between bg-white rounded-xl`}
              >
                <div className="flex gap-5 text-base flex-col justify-center">
                  <div className="flex flex-col gap-2 items-center lg:flex-row lg:gap-2">
                    <h3 className="text-2xl lg:2xl font-semibold text-primary capitalize">
                      {e.name}
                    </h3>
                  </div>

                  <p className="text-lg">{e.description}</p>
                  {e.meta}
                  <div>
                    <Button className="w-fit bg-secondary text-white">
                      get a quote
                    </Button>
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
                      i % 2 == 0
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
    </>
  );
};

export default LifeInsurance;
