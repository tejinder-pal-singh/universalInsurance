import interaction from '../assets/interaction.webp';
import { insuranceTypes } from '../pages/Services';
import { ReactComponent as ArrowIcon } from '../assets/right-arrow.svg';
import { Link } from 'react-router-dom';

import './styles.css';

export const SectionOne = () => {
	return (
		<>
			<div className=' section px-10 py-10 lg:px-32 lg:py-20 min-h-min flex lg:flex-row flex-col gap-10 justify-between bg-neutral'>
				<div className='photo h-full  lg:w-2/4 w-full'>
					<div className='  '>
						<img
							src={interaction}
							className='object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]'
							alt=''
						/>
					</div>
				</div>
				<div className='paragraph text-lg text-justify flex flex-col gap-10 lg:w-4/5 w-full  '>
					<span className='title font-semibold text-2xl'>
						A one stop solution to secure the future of entire family
					</span>
					<span className='paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg'>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
							deserunt perspiciatis rerum magnam,
						</span>
						<span className=''>
							quas iusto fugiat autem ratione omnis amet, minima excepturi
							illum, quo vel quisquam voluptates quia nisi.
						</span>
					</span>
					<span className='call p-4 S w-fit rounded-lg bg-primary text-white'>
						Get a qoute
					</span>
				</div>
			</div>
			<div className='text-justify lg:px-32 text-3xl px-10 overflow-hidden py-20 lg:py-12min-h-min flex flex-col gap-10 justify-between gradient'>
				<div className='heading lg:text-4xl'>Insurance types</div>
				<div className=' grid grid-cols-1 gap-8  xl:gap-12 md:grid-cols-2 xl:grid-cols-3 '>
					{insuranceTypes.map((e) => (
						<div
							style={{ height: '388px' }}
							className='p-8  h-fit justify-between flex flex-col gap-5  bg-white rounded-xl'>
							<span style={{ width: 'fit-content' }}>{e.icon}</span>

							<span className='text-xl inline font-semibold capitalize'>
								{e.name}
							</span>

							<p className='text-lg'>{e.description}</p>

							<Link to={`/services#${e.name.split(' ')[0]}`}>
								<div className='flex hover:text-primary text-secondary  items-center'>
									<div className='inline-flex p-2  text-lg capitalize rounded-full '>
										Know more
									</div>
									<ArrowIcon className='p-2' />
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
