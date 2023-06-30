import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../assets/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import logo from '../assets/logo.png';
import { ReactComponent as PhoneIcon } from '../assets/phone.svg';

const appearParent: Variants = {
	initial: { opacity: 0 },
	reveal: {
		opacity: 1,
		transition: { staggerChildren: 0.1, when: 'beforeChildren' },
	},
};

const appearAnimate: Variants = {
	initial: { opacity: 0, y: -50 },
	reveal: {
		opacity: 1,
		y: 0,
		transition: { ease: 'easeOut' },
	},
};
const NavbarItems = ({
	isToggled,
	setToggle,
}: {
	isToggled: boolean;
	setToggle: (b: boolean) => void;
}) => {
	const items = [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: 'services' },
		{ name: 'About', link: '/about' },
		{ name: 'Contact', link: '/contact' },
	];
	const onCloseHandler = () => {
		setToggle(!isToggled);
	};
	const navList = {
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.07,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const navItem = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		hidden: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
	};

	return (
		<>
			<motion.div
				className='navList fixed grid place-items-center  top-0 left-0 h-screen w-full  bottom-0 z-50 '
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={navList}>
				<div className='blob absolute h-full w-full backdrop-blur-3xl -z-10'></div>

				<div className='flex absolute top-0 left-0 pt-7 px-10 w-full justify-between '>
					<div className='logo'>logo</div>
					<div className='btn cursor-pointer ' onClick={onCloseHandler}>
						<CloseIcon />
					</div>
				</div>
				<div className='flex flex-col gap-9 text-3xl font-extralight '>
					{items.map((item) => (
						<motion.div
							className='nav-item  active:text-primary'
							variants={navItem}
							key={item.name}
							onClick={onCloseHandler}>
							<Link to={item.link}>{item.name}</Link>
						</motion.div>
					))}
				</div>
			</motion.div>
		</>
	);
};
const Navbar = () => {
	const [isToggled, setToggle] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				// if scroll down hide the navbar
				setShow(false);
			} else {
				// if scroll up show the navbar
				setShow(true);
			}

			// remember current page location to use in the next move
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, [lastScrollY]);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};
	const navContainer = {
		visible: {
			//x: 0,
			opacity: 1,
			transition: {
				x: { velocity: 100 },
				duration: 0.3,
			},
		},
		hidden: {
			//x: -250,
			opacity: 0,
			transition: {
				x: { velocity: 100 },
				duration: 0.3,
			},
		},
	};

	return (
		<>
			{show && (
				<motion.div
					variants={appearParent}
					initial={'initial'}
					style={{ height: '110px' }}
					animate={'reveal'}
					className={`navbar fixed   top-0  z-30 text-lg  py-4 hidden ${
						isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
					} items-center bg-transparent  px-32 lg:flex w-full justify-between`}>
					<motion.div variants={appearAnimate} className='logo'>
						<Link to={'/'}>
							{' '}
							<img
								src={logo}
								alt='Universal Insurance'
								width={200}
								height={100}
							/>
						</Link>
					</motion.div>
					<div
						style={{
							textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
							fontSize: '18px',
							color: '#f5f5f5',
						}}
						className='links 
   font-semibold gap-24 isolate flex items-baseline mix-blend-difference justify-between'>
						<motion.div
							className='mix-blend-difference isolate'
							variants={appearAnimate}>
							<NavLink
								to={'/services'}
								className={({ isActive }) =>
									isActive ? 'text-primary underline' : ' '
								}>
								Services
							</NavLink>
						</motion.div>
						<motion.div variants={appearAnimate}>
							<NavLink
								to={'/about'}
								className={({ isActive }) => (isActive ? 'text-primary' : '')}>
								About
							</NavLink>
						</motion.div>
						<motion.div variants={appearAnimate}>
							<NavLink
								to={'/contact'}
								className={({ isActive }) => (isActive ? 'text-primary' : '')}>
								Contact
							</NavLink>
						</motion.div>
					</div>
					<div className='buttons font-semibold flex gap-8'>
						<motion.button
							variants={appearAnimate}
							onClick={() => {
								window.open('tel:+1800229933');
							}}
							className='number p-3 flex items-center gap-2  rounded-lg bg-white'>
							<PhoneIcon />
							<span>+1 453345342</span>
						</motion.button>
						<motion.button
							variants={appearAnimate}
							className='call p-3 rounded-lg bg-secondary text-white'>
							Get a quote
						</motion.button>
					</div>
				</motion.div>
			)}
			{show && (
				<div
					className={` top-0 fixed navbar justify-between pt-4 pb-16 px-10 ${
						isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
					} top-0 w-full lg:hidden  z-30 text-lg `}>
					<div className='logo absolute z-60  left-0 p-[inherit] '>logo</div>

					<button
						className='btn absolute z-60  right-0 p-[inherit]'
						onClick={() => setToggle(!isToggled)}>
						<MenuIcon />
					</button>
					<AnimatePresence>
						{isToggled && (
							<motion.div
								className='navbar'
								initial='hidden'
								animate={isToggled ? 'visible' : 'hidden'}
								exit='hidden'
								variants={navContainer}>
								<NavbarItems isToggled={isToggled} setToggle={setToggle} />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)}
		</>
	);
};

export default Navbar;
