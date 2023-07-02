import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Button } from './Button';
import { companyDetails } from '../pages/Contact';

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
				className='pt-32 flex justify-center h-full items-center overflow-hidden  z-50 '
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={navList}>
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
	const loc = useLocation();
	console.log(`file: Navbar.tsx:108 - Navbar - loc:`, loc);
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
		if (isToggled) {
			setIsScrolled(true);
			document.body.style.overflow = 'hidden';
		} else document.body.style.overflow = 'auto';
	}, [isToggled]);

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
		} else if (!isToggled) {
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
					className={`navbar fixed top-0 z-30 text-lg py-4 hidden ${
						isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
					} items-center bg-transparent ${
						isToggled && 'overflow-hidden'
					} px-32 lg:flex w-full justify-between`}>
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
						style={
							loc.pathname === '/'
								? {
										textShadow:
											'-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
										fontSize: '20px',
										color: '#f5f5f5',
										fontFamily: 'monospace',
								  }
								: {
										fontSize: '20px',
								  }
						}
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
								className={({ isActive }) =>
									isActive ? 'text-primary underline' : ''
								}>
								About
							</NavLink>
						</motion.div>
						<motion.div variants={appearAnimate}>
							<NavLink
								to={'/contact'}
								className={({ isActive }) =>
									isActive ? 'text-primary underline' : ''
								}>
								Contact
							</NavLink>
						</motion.div>
					</div>
					<div className='buttons  flex gap-8'>
						<motion.div
							variants={appearAnimate}
							onClick={() => {
								window.open(`tel:${companyDetails.telephone}`);
							}}>
							<Button className='bg-white flex items-center gap-2'>
								<PhoneOutlinedIcon />
								<span>{companyDetails.telephone}</span>
							</Button>
						</motion.div>
						<motion.div variants={appearAnimate}>
							<Button className='bg-secondary text-white'> Get a quote</Button>
						</motion.div>
					</div>
				</motion.div>
			)}
			{show && (
				<div
					className={`top-0 fixed navbar ${
						isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-none'
					}  pt-4 pb-16 px-10 
          }  lg:hidden ${isToggled ? 'bottom-0' : ''}  w-full z-30 text-lg `}>
					<div className={`logo absolute z-60  left-0 px-[inherit] `}>
						<Link to={'/'}>
							<img
								src={logo}
								alt='Universal Insurance'
								width={200}
								height={100}
							/>
						</Link>
					</div>

					<button
						className={`btn absolute z-60  right-0 px-[inherit]`}
						onClick={() => setToggle(!isToggled)}>
						{isToggled ? <CloseIcon /> : <MenuIcon />}
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
