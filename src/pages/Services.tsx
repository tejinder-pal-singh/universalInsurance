import single from '../assets/single.jpeg';

import travelInsurance from '../assets/travelinsurance.webp';
import healthInsurance from '../assets/familyProtecting.png';
import lifeInsurance from '../assets/healthinsurance.jpg';
import carInsurance from '../assets/carinsurance.webp';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { ReactComponent as CarIcon } from '../assets/car.svg';
import { ReactComponent as TravelIcon } from '../assets/travel.svg';
import { ReactComponent as HealthIcon } from '../assets/health.svg';
import { ReactComponent as LifeIcon } from '../assets/life.svg';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import SupportIcon from '@mui/icons-material/Support';
import { Variants, motion } from 'framer-motion';
import ServiceInvestment from '../components/ServiceInvestment';
const revealParent: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.5,

			when: 'beforeChildren',
		},
	},
};
const staggerParent: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.5,

			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};
const revealChildLeft: Variants = {
	initial: { x: -100, opacity: 0 },
	animate: {
		x: 0,

		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.5,
		},
	},
};
const buttonReveal: Variants = {
	initial: { opacity: 0, y: 10 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { ease: 'easeInOut', duration: 0.5 },
	},
};
const revealChildRight: Variants = {
	initial: { x: 100, opacity: 0 },
	animate: {
		x: 0,

		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.1,
		},
	},
};
export const insuranceTypes = [
	{
		icon: <HealthAndSafetyIcon />,
		name: 'Health Insurance',
		id: 'health',
		imageUrl: healthInsurance,
		description: `Health insurance plays a crucial role in safeguarding your well-being and providing financial protection against unforeseen medical expenses. While provincial health insurance plans and typical employer-sponsored health plans offer coverage for basic medical services, there are certain expenses that may not be covered.`,
		meta: (
			<ul className='text-lg'>
				Additionally, there are various other challenges that can arise when
				dealing with health issues, such as accessing specialized care, managing
				daily needs, and coping with the stress and anxiety that accompanies
				illness.At <span className='text-primary'>Universal Insurance</span>, we
				offer comprehensive health insurance plans that go beyond the basics,
				providing you with added financial support and peace of mind. Our health
				insurance plans offer the following benefits:
				<li>
					<b> Expanded Coverage: </b>Our plans cover a wide range of medical
					expenses, including hospital stays, surgeries, diagnostic tests,
					prescription medications, and specialist consultations.We understand
					that not all medical needs are predictable, which is why our coverage
					extends to unforeseen circumstances.
				</li>
				<li>
					<b> Additional Services: </b>We go the extra mile by offering
					additional services that may not be covered by provincial or
					employer-sponsored plans. This includes coverage for private nursing,
					home healthcare, and specialized therapies that aid in your recovery
					process.
				</li>
				<li>
					<b> Enhanced Flexibility: </b>Our health insurance plans offer
					flexibility in terms of choosing your healthcare providers and
					facilities. You have the freedom to select the doctors and hospitals
					that best suit your needs, ensuring you receive personalized care.
				</li>
				<li>
					<b> Financial Support: </b>In the event of a critical illness
					diagnosis, our health insurance plans provide a lump-sum benefit to
					help alleviate the financial burden. This benefit can be used to cover
					expenses such as mortgage payments, credit card debts, or other
					financial obligations, allowing you to focus on your recovery without
					worrying about financial stress.
				</li>
				<li>
					<b> Global Coverage: </b>Our health insurance plans extend coverage
					beyond the borders of your home country. Whether you require medical
					treatment abroad or emergency medical assistance while traveling, our
					plans provide coverage for medical expenses, evacuation, and
					repatriation, ensuring your well-being no matter where you are.
				</li>
				<li>
					<b> Wellness Programs: </b>We believe in proactive healthcare, which
					is why our health insurance plans often include wellness programs and
					preventive care services. These programs focus on promoting healthy
					lifestyles, early detection of illnesses, and providing resources for
					maintaining overall well-being.By choosing{' '}
					<span className='text-primary  font-semibold'>
						Universal Insurance&nbsp;
					</span>{' '}
					for your health insurance needs, you can enjoy comprehensive coverage,
					financial protection, and peace of mind. Our goal is to ensure that
					you receive the best possible care when you need it most, allowing you
					to focus on your health and recovery. Help protect yourself from
					regular health and dental costs and the expenses associated with
					disability, critical illness and long term care.&nbsp;
					<span className='text-primary  font-semibold'>
						Universal Insurance&nbsp;
					</span>
					has access to 20+ insurance providers in health domain.\n \t We thrive
					to give you the best value for money, and do not forget our 24* 7
					support to ensure you get proper guidance whenever and whereever you
					need.`,
				</li>
			</ul>
		),
	},

	{
		icon: <SupportIcon />,
		name: 'Life Insurance',
		id: 'life',
		imageUrl: lifeInsurance,
		meta: (
			<ul>
				At <span className='text-primary'>Universal Insurance</span>, we offer
				comprehensive life insurance plans that offer the following benefits:
				<li>
					<b>Financial Security for Your Loved Ones:</b> Life insurance provides
					a financial safety net for your family in the event of your untimely
					passing. The death benefit paid out by the policy can help cover
					funeral expenses, outstanding debts, mortgage payments, and other
					financial obligations, ensuring that your loved ones are not burdened
					with financial hardships during an already difficult time.
				</li>
				<li>
					<b>Income Replacement:</b> If you are the primary breadwinner in your
					family, life insurance can help replace the income lost upon your
					death. This ensures that your family can continue to meet their
					day-to-day expenses, maintain their standard of living, and achieve
					their long-term financial goals.
				</li>
				<li>
					<b>Education and Future Planning:</b> Life insurance can also be used
					to fund your children's education or other future expenses. By
					designating the death benefit for specific purposes, you can ensure
					that your loved ones have the financial means to pursue their dreams
					and aspirations.
				</li>
				<li>
					<b>Debt and Estate Planning:</b> Life insurance can play a vital role
					in estate planning by providing funds to pay off debts, such as a
					mortgage or outstanding loans, and to cover estate taxes. This helps
					preserve your assets and ensures a smoother transfer of wealth to your
					beneficiaries.
				</li>
				<li>
					<b>Business Continuity:</b> If you are a business owner, life
					insurance can be instrumental in ensuring the continuity of your
					business. It can help cover business debts, facilitate the smooth
					transition of ownership, and provide financial stability to your
					business partners or successors.
				</li>
				<li>
					<b>Cash Value Accumulation:</b> Some life insurance policies offer a
					cash value component, allowing you to accumulate savings over time.
					These policies provide a combination of protection and investment
					opportunities, giving you the potential to grow your wealth while
					ensuring financial security for your loved ones.
				</li>
				At{' '}
				<span className='text-primary  font-semibold'>
					Universal Insurance{' '}
				</span>
				, we understand that every individual's needs are unique. Our team of
				experienced professionals will work closely with you to assess your
				specific circumstances and help you choose the right life insurance
				policy. We offer a range of options, including term life insurance,
				whole life insurance, and universal life insurance, tailored to meet
				your specific goals and budget. With{' '}
				<span className='text-primary  font-semibold'>
					Universal Insurance{' '}
				</span>
				, you can rest assured knowing that your loved ones will be financially
				protected and cared for in the event of your passing. Life insurance
				provides you with the peace of mind that comes from knowing that you
				have taken steps to secure your family's future.
			</ul>
		),
		description: `Life insurance is an essential financial tool that provides protection and peace of mind for you and your loved ones. While there are various types of life insurance policies available, it's important to choose one that suits your specific needs and priorities.`,
	},
	{
		icon: <AirplanemodeActiveIcon />,
		name: 'Travel Insurance',
		id: 'travel',
		imageUrl: travelInsurance,
		meta: (
			<ul>
				<li>
					<strong>Trip Cancellation and Interruption:</strong> Our travel
					insurance plans provide coverage for trip cancellation or interruption
					due to unforeseen circumstances such as illness, injury, or a family
					emergency.
				</li>
				<li>
					<strong>Emergency Medical Expenses:</strong> Our travel insurance
					includes coverage for emergency medical expenses, ensuring you have
					financial protection for hospitalization, doctor visits, prescription
					medications, and medical evacuation if needed.
				</li>
				<li>
					<strong>Baggage and Personal Belongings:</strong> Our travel insurance
					plans provide coverage for loss, theft, or damage to your baggage and
					personal items, including electronics, jewelry, and travel documents.
				</li>
				<li>
					<strong>Travel Delay and Missed Connections:</strong> Our insurance
					covers additional expenses incurred due to travel delays, such as
					accommodation, meals, and transportation. We also provide coverage for
					missed connections.
				</li>
				<li>
					<strong>Emergency Assistance Services:</strong> Our travel insurance
					plans include 24/7 emergency assistance services, providing you with
					support and guidance in various situations.
				</li>
				<li>
					<strong>Optional Coverage Add-Ons:</strong> We offer additional
					optional coverage add-ons, such as rental car insurance, adventure
					sports coverage, and pre-existing medical condition coverage, among
					others.
				</li>
			</ul>
		),
		description:
			'Get help covering your unexpected emergency medical expenses and more wherever you travel with a travel insurance plan from us. Our travel insurance plans include 24/7 emergency assistance services, providing you with support and guidance in various situations.',
	},
];
export const Services = () => {
	return (
		<>
			<div className='overflow-hidden selection:text-lg text-justify px-10 lg:px-32  w-full h-full bg-cool'>
				<div className='navbar-spacer invisible py-10 lg:py-20'>
					navbar plachoder
				</div>
				<div id='insurances' className='heading font-bold text-3xl lg:text-6xl'>
					Insurance Services
				</div>

				<div className='section  pt-10  lg:py-12 min-h-min flex lg:flex-row flex-col gap-10 justify-between '>
					<img
						src={single}
						className=' object-cover flex-grow h-full w-full lg:w-1/3 lg:h-1/3 rounded-r-[6.5rem] rounded-bl-[6.5rem]'
						alt=''
					/>

					<div className='paragraph flex flex-col gap-10 lg:w-4/5 w-full'>
						<div className='title  font-semibold lg:text-2xl  '>
							<div className='text-2xl '>
								We make sure that, you are aware of each and every aspect in
								detail,
							</div>
						</div>

						<div className='paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg'>
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
				<div className='text-lg lg:text-xl text-secondary font-semibold'>
					"We understand that insurance might be complicated for most of time,
					protecting yourself and your loved ones doesn’t have to be. That's why
					<span className='text-primary  font-semibold'>
						{' '}
						Universal Insurance
					</span>{' '}
					exists on the first place. We are here to assist you on each and every
					steep of the journey."
					<div style={{ textAlign: 'right' }} className='text-red'>
						- Narinder Multani (Universal Insurance)
					</div>
				</div>

				<div className='types text-xl  py-10 lg:py-12 min-h-min flex flex-col gap-10 justify-between'>
					<div className='heading font-semibold text-2xl'>
						Check out our products, each designed to help you protect what
						matters the most.
					</div>
					<div className='cardcontainer grid grid-cols-1 gap-8'>
						{insuranceTypes.map((e, i) => (
							<div
								key={e.name}
								id={e.id}
								className={`p-8 space-y-6 min-h-[30rem] flex ${
									i % 2 === 0
										? 'flex-col-reverse lg:flex-row'
										: 'flex-col-reverse lg:flex-row-reverse'
								} justify-between bg-white rounded-xl`}>
								<div className='flex gap-5 flex-col justify-center'>
									<div className='flex flex-col gap-2 items-center lg:flex-row lg:gap-2'>
										<div className='w-fit h-fit text-primary rounded-full'>
											{e.icon}
										</div>

										<h3 className='text-2xl lg:2xl font-semibold text-primary capitalize'>
											{e.name}
										</h3>
									</div>

									<p className='text-lg'>{e.description}</p>
									{e.meta}
									<div>
										<Button className='w-fit bg-secondary text-white'>
											get a quote
										</Button>
									</div>
								</div>

								<div
									className={`z-20 py-5 flex items-end w-full h-[24rem] ${
										i % 2 == 0 ? 'lg:pl-32' : 'lg:pr-32'
									}`}>
									<img
										src={e.imageUrl}
										className={`object-cover flex-grow w-full h-full ${
											i % 2 === 0
												? 'rounded-l-[6.5rem] rounded-br-[6.5rem]'
												: 'rounded-r-[6.5rem] rounded-bl-[6.5rem]'
										} `}
										alt=''
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
