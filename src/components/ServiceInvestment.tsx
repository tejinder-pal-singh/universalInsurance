import { Link } from "react-router-dom";
import { Button } from "./Button";
import single from "../assets/family.webp";
import { investmentTypes } from "../data";

const ServiceInvestment = () => {
  return (
    <div className="overflow-hidden text-lg px-10 py-10 lg:px-32 w-full h-full bg-breeze">
      <div id="investments" className="heading font-bold text-2xl lg:text-2xl">
        Investment opportunities
      </div>
      <div className=" section  pt-10  pb-5 lg:pt-20 min-h-min flex lg:flex-row flex-col gap-10  ">
        <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full  ">
          <div className="title lg:text-large font-semibold ">
            Investors today face a unique combination of challenges—but they
            don’t have to face them alone.
          </div>
          <div className="paragraph flex justify-between gap-5 text-lg">
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
        <div className="photo h-full  lg:w-2/4 w-full">
          <div className="  ">
            <img
              src={single}
              className="object-cover rounded-b-[6.5rem] rounded-tl-[6.5rem]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" pb-10">
        <Link to={"/contact"}>
          <Button className="bg-secondary text-white"> Contact us</Button>
        </Link>
      </div>
      <div className="title lg:text-large font-semibold pb-5">
        Investment opportunities offered
      </div>
      <div className="paragraph grid grid-cols-1 lg:grid-cols-2 justify-between gap-5 text-lg">
        {investmentTypes.map((i) => (
          <div
            id={i.id}
            className="bg-white rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="pb-4">
              <div className="font-bold text-xl pb-4">{i.name}</div>
              <div>{i.description}</div>
              {i.meta}
            </div>
            <div className=" ">
              <Link to={"/contact"}>
                <Button className="bg-secondary text-white"> Get Quote</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceInvestment;
