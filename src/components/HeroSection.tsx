import { Variants, motion } from 'framer-motion';
import familyCrop from '../assets/familyCrop.jpg';
import './styles.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
	return (
		<>
			<HeroContent />
		</>
	);
};

function HeroContent() {
	return (
		<>
			{' '}
			<div className='mobile  lg:hidden'>
				<div className='h-20'></div>
				<div className=' overflow-hidden'>
					<img src={familyCrop} alt='family' className='contain' />
					<div className='px-10 lg:pl-32  backdrop-blur-sm py-4 my-auto '>
						<h1 className=' text-3xl break-words'>
							Is your family
							<span className='oval bg-secondary rounded-full  px-2 pb-2 text-white'>
								secured
							</span>
							from whatever life has to offer?
						</h1>
						<p className='text-base pb-5'>
							Well, surely we cannot predict the future but we can be ready for
							it. Here at 'Universal Insurance', we ensure you to stand with you
							during the time of urgency. For a better future of you and your
							family
						</p>
						<div>
							<Link to={'/contact'}>
								<Button className='text-white bg-secondary'>
									Schedule a call with our agent
								</Button>
							</Link>
						</div>
					</div>
				</div>{' '}
			</div>
			<div className=' large-screens-only hidden lg:block'>
				<div className='flex-container'>
					<div className='px-10 lg:pl-32 lg md:max-w-[560px] items-center backdrop-blur-sm py-4 my-auto hero-banner-headingText-container'>
						<h1 className=' home-hero-heading'>
							Is your family is <span className='oval'>secured</span> from
							whatever life has to offer?
						</h1>
						<p className='home-hero-desc py-4'>
							Well, surely we cannot predict the future but we can be ready for
							it. Here at 'Universal Insurance', we ensure you to stand with you
							during the time of urgency. For a better future of you and your
							family
						</p>
						<div>
							<Link to={'/contact'}>
								<Button className='text-white bg-secondary hover:underline'>
									Schedule a call with our agent >
								</Button>
							</Link>
						</div>
					</div>
					{/* <div className='hero-banner-img'></div>  */}
				</div>
			</div>
		</>
	);
}

/* function BlobBackground() {
  return (
    <>
      <div className="blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-full aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate "></div>
    </>
  );
} */
