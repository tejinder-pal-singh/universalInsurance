import { SectionTwo } from '../components/InvestmentSection';
import { SectionOne } from '../components/InsuranceSection';
import { HeroSection } from '../components/HeroSection';
import { Banner } from '../components/Banner';

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
