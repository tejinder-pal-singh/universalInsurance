import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Variants, motion } from 'framer-motion';
import { Button } from '../components/Button';

//Edit company details
export const companyDetails = {
	telephone: '+1800229933',
	email: 'hello@company.com',
	address: '100 Smith Street Collingwood VIC 3066 AU',
	messenger: 'https://www.google.com',
};

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

const revealChild: Variants = {
	initial: { opacity: 0, y: 100 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.5,
		},
	},
};

export const Contact = () => {
	return (
		<section className='bg-neutral relative  overflow-hidden'>
			<div className='blob absolute h-full w-full backdrop-blur-3xl z-10'></div>

			<div className='blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-2/4 aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate '></div>

			<div className='navbar-spacer invisible pt-20 lg:py-20'>
				navbar plachoder
			</div>
			<div className='relative px-10 lg:px-32 z-20  w-full'>
				<div>
					<p className='text-3xl lg:text-6xl z-20 font-bold dark:text-secondary'>
						Contact us
					</p>

					<h1 className='mt-2 text-xl z-20 '>Chat to our friendly team</h1>

					<p className='mt-3 text-lg z-20 '>
						We’d love to hear from you. Please fill out this form or shoot us an
						email.
					</p>
				</div>

				<div className='grid text-lg z-20 w-full justify-between pb-10 grid-cols-1 gap-12 mt-10 lg:grid-cols-2'>
					<div className='grid  grid-cols-1 gap-12 md:grid-cols-2'>
						<div>
							<span className='inline-block p-3 text-primary rounded-full bg-white'>
								<EmailOutlinedIcon />
							</span>
							&nbsp;
							<span className='mt-4 text-xl font-medium text-primary '>
								Email
							</span>
							<p className='mt-2 text-lg '>
								Our friendly team is here to help.
							</p>
							<p
								className='mt-2 text-lg cursor-pointer text-red hover:text-primary hover:underline'
								onClick={() => {
									window.open(`mailto:${companyDetails.email}`);
								}}>
								{companyDetails.email}
							</p>
						</div>

						<div>
							<span className='inline-block p-3 text-primary rounded-full bg-white'>
								<ChatBubbleOutlineOutlinedIcon />
							</span>
							&nbsp;
							<span className='mt-4 text-xl font-medium text-primary '>
								Messenger chat
							</span>
							<p className='mt-2 text-lg '>
								Our friendly team is here to help.
							</p>
							<a
								className='mt-2 text-lg text-red hover:underline  hover:text-primary'
								target='_blank'
								href={companyDetails.messenger}>
								Start new chat
							</a>
						</div>

						<div>
							<span className='inline-block p-3 text-primary rounded-full bg-white '>
								<LocationOnOutlinedIcon />
							</span>
							&nbsp;
							<span className='mt-4 text-xl font-medium text-primary'>
								Office
							</span>
							<p className='mt-2 text-lg text-gray-500 dark:text-gray-400'>
								Come say hello at our office HQ.
							</p>
							<p className='mt-2 text-lg text-blue-500 dark:text-blue-400  text-red hover:underline  hover:text-primary'>
								{companyDetails.address}
							</p>
						</div>

						<div>
							<span className='inline-block p-3 text-primary rounded-full bg-white '>
								<PhoneOutlinedIcon />
							</span>
							&nbsp;
							<span className='mt-4 text-xl font-medium text-primary '>
								Phone
							</span>
							<p className='mt-2 text-lg text-gray-500 dark:text-gray-400'>
								Mon-Fri from 8am to 5pm.
							</p>
							<p
								onClick={() => {
									window.open(`tel:${companyDetails.telephone}`);
								}}
								className='mt-2 hover:text-primary cursor-pointer text-lg text-blue-500 dark:text-blue-400  text-red hover:underline  hover:text-primary'>
								{companyDetails.telephone}
							</p>
						</div>
					</div>

					<div className='p-4 py-6 rounded-lg bg-white dark:bg-gray-800 md:p-8'>
						<form>
							<div className='-mx-2 md:items-center md:flex'>
								<div className='flex-1 px-2'>
									<label className='block mb-2 text-lg text-gray-600 dark:text-gray-200'>
										First Name
									</label>
									<input
										type='text'
										placeholder='John '
										className='block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
									/>
								</div>

								<div className='flex-1 px-2 mt-4 md:mt-0'>
									<label className='block mb-2 text-lg text-gray-600 dark:text-gray-200'>
										Last Name
									</label>
									<input
										type='text'
										placeholder='Doe'
										className='block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
									/>
								</div>
							</div>

							<div className='mt-4'>
								<label className='block mb-2 text-lg text-gray-600 dark:text-gray-200'>
									Email address
								</label>
								<input
									type='email'
									placeholder='johndoe@example.com'
									className='block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
								/>
							</div>

							<div className='w-full mt-4'>
								<label className='block mb-2 text-lg text-gray-600 dark:text-gray-200'>
									Message
								</label>
								<textarea
									className='block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
									placeholder='Message'></textarea>
							</div>
							<Button className='w-full my-5 bg-primary text-white'>
								Send message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
