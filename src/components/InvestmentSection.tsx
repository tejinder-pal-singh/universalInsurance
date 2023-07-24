import single from "../assets/single.jpeg";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const SectionTwo = () => {
  return (
    <div
      id="investment"
      className=" text-justify section px-10 py-10 lg:px-32 lg:py-20 min-h-min flex lg:flex-row flex-col gap-10 bg-neutral"
    >
      <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full">
        <div className="title text-2xl lg:text-2xl font-semibold">
          Find Investment Plans
        </div>
        <div className="paragraph flex flex-col lg:flex-row  gap-5 text-lg">
          <div>
            <b>RRSP</b> An RRSP is a tax-advantaged investment account available
            to Canadian residents to save for retirement. Contributions made to
            an RRSP are tax-deductible, meaning they can be deducted from
            taxable income, reducing the amount of income tax owed in the
            contribution year. The investments held within an RRSP grow on a
            tax-sheltered basis, allowing for tax-free compounding until
            withdrawals are made during retirement.
          </div>
          <div className="">
            <b>RESP</b> An RESP is a tax-advantaged investment account available
            in Canada to help individuals save for post-secondary education
            expenses. It is primarily used to save for a child's education.
            Contributions made to an RESP are not tax-deductible, but the
            investments held within the plan grow on a tax-sheltered basis. The
            government provides various grants, such as the Canada Education
            Savings Grant (CESG) and the Canada Learning Bond (CLB), to help
            boost savings within an RESP. Withdrawals from an RESP are taxed in
            the hands of the student, typically at a lower tax rate
          </div>
        </div>
        <div>
          <Link to={"/contact?type=Investments"}>
            <Button className=" w-fit  bg-primary text-white">
              Contact us
            </Button>
          </Link>
        </div>
      </div>
      <div className="photo h-full  lg:w-2/4 w-full">
        <img
          src={single}
          className="object-cover rounded-b-[6.5rem] rounded-tr-[6.5rem]"
        />
      </div>
    </div>
  );
};
