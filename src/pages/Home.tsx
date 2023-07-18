import { SectionTwo } from "../components/InvestmentSection";
import { SectionOne } from "../components/InsuranceSection";
import { HeroSection } from "../components/HeroSection";
import { Banner } from "../components/Banner";
import familyCrop from "../assets/familyCrop.jpg";
const Home = () => {
  return (
    <>
      <HeroSection
        paragraph={
          <>
            <h1 className=" text-3xl break-normal">
              Is your family{" "}
              <span className="oval bg-secondary rounded-full  px-2 pb-2 text-white">
                secured
              </span>{" "}
              from whatever life has to offer?
            </h1>
            <p className="text-base pb-5">
              Well, surely we cannot predict the future but we can be ready for
              it. Here at 'Universal Insurance', we ensure you to stand with you
              during the time of urgency. For a better future of you and your
              family
            </p>
          </>
        }
        cta={"Schedule a call with our agent >"}
        imgSrc={familyCrop}
      />

      <Banner />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
