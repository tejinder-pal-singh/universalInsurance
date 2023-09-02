import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Email, Form } from '../components/Form';
import { useQuery } from '../hooks/query';

//Edit company details
export const companyDetails = {
	telephone: '+14165798024',
	email: 'hello@company.com',
	address: '100 Smith Street Collingwood VIC 3066 AU',
	messenger: 'https://www.google.com',
};

export const Contact = () => {
	const query = useQuery();
	const type = query.get('type') as Email['type'];
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
								className='mt-2 hover:text-primary cursor-pointer text-lg text-blue-500 dark:text-blue-400  text-red hover:underline  '>
								{companyDetails.telephone}
							</p>
						</div>
					</div>

					<Form type={type} />
				</div>
			</div>
		</section>
	);
};
