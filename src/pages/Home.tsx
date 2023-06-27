import { SectionTwo } from "../components/SectionTwo";
import { SectionOne } from "../components/SectionOne";
import { HeroSection } from "../components/HeroSection";
import { Banner } from "../components/Banner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Banner />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
