import { Link } from 'react-router-dom';
import { Button } from './Button';
import single from '../assets/family.webp';

const ServiceInvestment = () => {
	return (
		<div className='overflow-hidden text-lg px-10 py-10 lg:px-32 w-full h-full bg-breeze'>
			<div id='investments' className='heading font-bold text-2xl lg:text-2xl'>
				Investment opportunities
			</div>
			<div className=' section  pt-10   lg:py-20 min-h-min flex lg:flex-row flex-col gap-10  '>
				<div className='paragraph flex flex-col gap-10 lg:w-4/5 w-full  '>
					<div className='title lg:text-large font-semibold '>
						Investors today face a unique combination of challenges—but they
						don’t have to face them alone.
					</div>
					<div className='paragraph flex justify-between gap-5 text-lg'>
						<ul>
							<li>
								<strong>Diversification:</strong> Investing in a diverse range
								of assets helps spread risk and reduce the impact of any single
								investment's performance on your overall portfolio.
							</li>
							<li>
								<strong>Long-Term Growth:</strong> Investments provide the
								potential for long-term growth and wealth accumulation, allowing
								your money to work for you over time.
							</li>
							<li>
								<strong>Income Generation:</strong> Certain investments, such as
								dividend-paying stocks or bonds, can generate regular income
								through interest or dividend payments.
							</li>
							<li>
								<strong>Tax Advantages:</strong> Some investment vehicles, like
								individual retirement accounts (IRAs) or certain bonds, offer
								tax advantages that can help minimize your tax liability.
							</li>
							<li>
								<strong>Inflation Protection:</strong> By investing in assets
								that have historically outpaced inflation, such as real estate
								or stocks, you can protect your purchasing power over the long
								term.
							</li>
							<li>
								<strong>Portfolio Customization:</strong> Investing allows you
								to tailor your portfolio to match your risk tolerance,
								investment goals, and time horizon, providing a personalized
								approach to wealth management.
							</li>
						</ul>
					</div>
				</div>
				<div className='photo h-full  lg:w-2/4 w-full'>
					<div className='  '>
						<img
							src={single}
							className='object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]'
							alt=''
						/>
					</div>
				</div>
			</div>
			<div className='paragraph flex flex-col lg:flex-row justify-between gap-5 text-lg'>
				<ul>
					<b>RRSP:</b>
					<li>
						<strong>Tax Deductible Contributions:</strong> Contributions made to
						an RRSP are tax-deductible, meaning you can reduce your taxable
						income by the amount contributed, providing potential tax savings.
					</li>
					<li>
						<strong>Tax-Sheltered Growth:</strong> Investments held within an
						RRSP grow on a tax-sheltered basis. This means you won't be taxed on
						any investment earnings, such as interest, dividends, or capital
						gains, as long as they remain within the RRSP.
					</li>
					<li>
						<strong>Flexible Contribution Limits:</strong> You can contribute up
						to your RRSP contribution limit, which is based on your earned
						income and set by the government. Unused contribution room can be
						carried forward to future years.
					</li>
					<li>
						<strong>Long-Term Retirement Savings:</strong> RRSPs are designed to
						help Canadians save for retirement. They provide a disciplined
						savings vehicle that can help you accumulate wealth over time,
						ensuring a comfortable retirement.
					</li>
					<li>
						<strong>Investment Options:</strong> RRSPs offer a wide range of
						investment options, including stocks, bonds, mutual funds,
						exchange-traded funds (ETFs), and guaranteed investment certificates
						(GICs), allowing you to tailor your investments to your risk
						tolerance and investment goals.
					</li>
					<li>
						<strong>Home Buyers' Plan:</strong> The Home Buyers' Plan (HBP)
						allows first-time homebuyers to withdraw up to a certain amount from
						their RRSPs to use as a down payment on a home, providing a
						tax-advantaged way to fund homeownership.
					</li>
					<li>
						<strong>Lifelong Learning Plan:</strong> The Lifelong Learning Plan
						(LLP) allows individuals to withdraw funds from their RRSPs to
						finance eligible education or training programs for themselves or
						their spouse or common-law partner.
					</li>
				</ul>
				<ul>
					<b>RESP:</b>
					<li>
						<strong>Tax-Deferred Growth:</strong> Contributions made to an RESP
						grow on a tax-deferred basis, meaning you won't pay taxes on any
						investment earnings until the funds are withdrawn for educational
						purposes.
					</li>
					<li>
						<strong>Canada Education Savings Grant (CESG):</strong> The CESG is
						a government grant available to eligible RESP beneficiaries. The
						government matches a portion of the contributions made to the RESP,
						providing additional funds to help save for a child's education.
					</li>
					<li>
						<strong>Canada Learning Bond (CLB):</strong> The CLB is a government
						grant available to families with modest incomes. It provides an
						initial amount and subsequent annual contributions to help kickstart
						education savings for children.
					</li>
					<li>
						<strong>Flexible Contribution Limits:</strong> RESPs have
						contribution limits, but there is no annual limit. You can
						contribute up to a lifetime maximum per beneficiary, allowing you to
						save as much as you want within that limit.
					</li>
					<li>
						<strong>Investment Options:</strong> RESPs offer a variety of
						investment options, including mutual funds, guaranteed investment
						certificates (GICs), stocks, bonds, and exchange-traded funds
						(ETFs). This allows you to choose investments that align with your
						risk tolerance and investment goals.
					</li>
					<li>
						<strong>Post-Secondary Education Withdrawals:</strong> When the
						beneficiary enrolls in a qualifying post-secondary program,
						withdrawals can be made from the RESP to cover educational expenses,
						such as tuition, books, and living costs.
					</li>
					<li>
						<strong>Flexibility for Beneficiary Changes:</strong> If the
						intended beneficiary of the RESP does not pursue post-secondary
						education, you can transfer the funds to another eligible
						beneficiary within the same family without tax consequences.
					</li>
				</ul>
			</div>
			<div className=' '>
				<Link to={'/contact'}>
					<Button className='bg-secondary text-white'> Contact us</Button>
				</Link>
			</div>
		</div>
	);
};
export default ServiceInvestment;
