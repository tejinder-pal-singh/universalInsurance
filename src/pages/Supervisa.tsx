import single from "../assets/single.jpeg";
import supervisa from "../assets/supervisa.jpg";
import travelInsurance from "../assets/travelinsurance.webp";
import healthInsurance from "../assets/familyProtecting.png";
import lifeInsurance from "../assets/healthinsurance.jpg";

import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import { Button } from "../components/Button";
import SupportIcon from "@mui/icons-material/Support";

import ServiceInvestment from "../components/ServiceInvestment";
import { HeroSection } from "../components/HeroSection";
import { Link } from "react-router-dom";
const tableData = [
  { q: "Are You Worried about COVID-19?", a: "Yes" },
  { q: "Do you have Health Card or Coverage through OHIP?", a: "No" },
  { q: "Are You on Work Permit Status?", a: "Yes" },
  { q: "Are You on Visitor Visa?", a: "Yes" },
  { q: "Are You a Recently Landed Immigrant?", a: "Yes" },
];
const tableDataPrices = [
  {
    service: "Inpatient Daily Charges*",
    insured: "OHIP",
    uninsured: "UN",
    non: "OOC",
  },
  {
    service: " Acute Care Daily Rate – Standard Ward",
    insured: " –",
    uninsured: "  $3,700",
    non: "  $3,700",
  },
  {
    service: "  Acute Care Daily Rate – Newborn",
    insured: " –",
    uninsured: " $1,500",
    non: " $1,500",
  },
  {
    service: "  Rehabilitation Daily Rate/Chronic – Standard Ward",
    insured: " –",
    uninsured: "$3,700",
    non: "$3,700",
  },
  {
    service: "Intensive Care Unit / Neonatal Intensive Care Unit",
    insured: "–",
    uninsured: "$6,000",
    non: "$6,000",
  },
];
const tableDataAcodomation = [
  {
    service: "Acute or Rehabilitation – Semi-Private",
    insured: "$280",
    uninsured: "$3,980",
    non: "$3,980",
  },
  {
    service: "Acute or Rehabilitation – Private",
    insured: "$310",
    uninsured: "$4,010",
    non: "$4,010",
  },
  {
    service: "Chronic – Semi-Private",
    insured: "–",
    uninsured: "$1,500",
    non: "$1,500",
  },
  {
    service: "Rehabilitation Daily Rate/Chronic – Standard Ward",
    insured: "$45",
    uninsured: "$3,980",
    non: "$3,980",
  },
  {
    service: "Chronic – Private",
    insured: "$65",
    uninsured: "$4,010",
    non: "$4,010",
  },
];
const tableDataOut = [
  {
    service: "Emergency Room Visit",
    insured: "$0",
    uninsured: "$1,000",
    non: "$1,000",
  },

  {
    service: "Outpatient Clinic Visit",
    insured: "$0",
    uninsured: "$600",
    non: "$600",
  },
  {
    service: "Minor Procedure",
    insured: "$0",
    uninsured: "$400",
    non: "$400",
  },
  {
    service: " Chemotherapy Visit (excludes drug charges)",
    insured: "$0",
    uninsured: "$600",
    non: " $600",
  },
  {
    service: " Chiropody Visit",
    insured: "$20",
    uninsured: "$600",
    non: "$600",
  },
  {
    service: " Dialysis Clinic and Hemodialysis daily rate",
    insured: "$0",
    uninsured: "$1,400",
    non: "$1,400",
  },
  {
    service:
      " Ambulance (Ministry of Health) – Essential ($195 covered by OHIP)",
    insured: "$45",
    uninsured: "$240",
    non: "$240",
  },
];
const tableDataSize = [
  {
    service: " Diagnostic Test Fees",

    uninsured: "UN",
    non: "OOC",
  },
  {
    service: " X-ray",

    uninsured: "$100",
    non: "$100",
  },
  {
    service: "Each additional X-ray",

    uninsured: "$50",
    non: "$50",
  },
  {
    service: "MRI (Magnetic Resonance Imaging)",

    uninsured: "$800",
    non: "$800",
  },

  {
    service: "MRI (Magnetic Resonance Imaging) with gadolinium",

    uninsured: "$875",
    non: "$875",
  },
  {
    service: "Ultrasound",

    uninsured: "$175",
    non: "$175",
  },
  {
    service: "Each additional Ultrasound",

    uninsured: "$100",
    non: "$100",
  },
  {
    service: " CAT Scan",

    uninsured: "$550",
    non: "$550",
  },
  {
    service: " CAT Scan with contrast",

    uninsured: "$600",
    non: "$600",
  },
];
export const Supervisa = () => {
  return (
    <>
      <HeroSection
        from="Super Visa Insurance"
        paragraph={
          <>
            <h1 className=" text-secondary text-3xl break-normal">
              We offer{" "}
              <span className="oval bg-primary rounded-full  px-2 pb-2 text-white">
                affordable
              </span>{" "}
              Super Visa Insurance
            </h1>
            <p className="text-secondary text-base pb-5">
              We know that family is important, and it can be difficult to be
              apart from your loved ones. If your parents or grandparents live
              in another country, you may be interested in bringing them closer
              to you by having them visit Canada. We at Universal Insurance can
              help you with this
            </p>
          </>
        }
        imgSrc={supervisa}
        cta="Get a qoute"
      />
      <div className="overflow-hidden selection:text-lg text-justify px-10 lg:px-32 pb-10  w-full h-full bg-cool">
        <div
          id="supervisa"
          className="heading  pt-10 font-bold text-3xl lg:text-6xl"
        >
          What is Super Visa Insurance?
        </div>

        <div className="section  pt-10  lg:py-12 min-h-min flex lg:flex-row flex-col gap-10 justify-between ">
          <img
            src={single}
            className=" object-cover flex-grow h-full w-full lg:w-1/3 lg:h-1/3 rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />

          <div className="paragraph flex flex-col gap-10 lg:w-4/5 w-full">
            <div className="title  font-semibold lg:text-2xl  ">
              <div className="text-2xl ">
                A Super Visa helps reunite Parents and Grandparents with family.
              </div>
            </div>

            <div className="paragraph flex flex-col lg:flex-row justify-between gap-5 ">
              <div className="flex flex-col gap-3">
                <p>
                  Super Visa allows Parents or Grand Parents to stay in Canada
                  for up to two years at a time and is offered to parents of
                  Permanent and Canadian residents. SuperVisa can be issued for
                  up to two years to ten years. Applicants must show they have
                  medical travel insurance set up for one year after arriving in
                  Canada. You can purchase this medical Insurance on behalf of
                  the family member who is visiting.
                </p>
                <p>
                  You will need emergency medical coverage of a minimum of
                  $100,000, valid for at least one year from the day they enter
                  Canada, proof of paid medical insurance premium, and They may
                  also need a signed letter of either a child or grandchild
                  promising financial support during the stay in the country.
                </p>
                <p>
                  Are you looking for Super Visa Insurance in Canada? Super Visa
                  insurance is an essential part of the application for a
                  Canadian Super Visa. It’s also known as a Parent and
                  Grandparent Visa. If you’re not exactly sure what it is or how
                  it works, fear not. You can get all the information you need
                  here.
                </p>
                <p>
                  We understand how important family is, and when your parents
                  or grandparents live in another country, bringing them closer
                  to you becomes so much more important. In the process of
                  helping your family members come to Canada, you may have come
                  across the term Super Visa or Super Visa Insurance plan. If no
                  one has explained to you exactly what this is, then here’s
                  some more information to help you get started.
                </p>
                <p>
                  Super Visa Insurance Brampton is a policy issued by the
                  Government when there’s the hope of reuniting residents of
                  Canada with their parents or grandparents. It allows for
                  multiple entry visas, which can cover both your parents and
                  your grandparents on the same insurance policy plan. If you
                  are pursuing Parental Sponsorship, then a Super Visa Insurance
                  policy is one of the most viable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="types   py-10 lg:py-12 min-h-min flex flex-col gap-10 justify-between">
          <div className="heading font-semibold text-2xl">
            Super Visa Insurance
          </div>
          <div className="">
            We understand that going through the process to obtain this
            Insurance can be stressful, so we’re here to help! We will leverage
            our experience and expertise to guide you through every step in this
            process, so you’re sure to meet all requirements and guidelines set
            out by the Government.
          </div>
          <div className="text-large font-semibold">
            Is Super Visa Insurance available in a Monthly Payment plan?
          </div>
          <div className="flex flex-col gap-3">
            <p>
              Are you planning to have your Parents or Grandparents visit you
              and your family in Canada and need to obtain Super Visa Insurance?
              You may be wondering how to afford it. The good news is that many
              insurance providers offer flexible payment options, including
              monthly payments, to make reuniting families in Canada easier.
            </p>
            <p>
              As per Immigration, Refugees, and Citizenship Canada (IRCC), under
              the monthly Super Visa plan, the first two months’ premium needs
              to be paid upfront. This means that you can spread the cost of
              Super Visa Insurance over a longer period, making it more
              affordable. Additionally, if you are already in Canada and
              applying to extend your visa, you can arrange for monthly payments
              with your insurance provider.
            </p>
            <p>
              When it comes to selecting a Super Visa Insurance plan, it’s
              essential to compare different policies and choose the one that
              best fits your requirements. At Universal Insurance, we understand
              that this can be a daunting task, which is why our experienced
              insurance agents are here to help. We will guide you through the
              process and answer any questions you may have to ensure you get
              the best policy for your needs & within budget.
            </p>
            <p>
              Don’t let the cost of Super Visa Insurance prevent you from
              visiting your loved ones in Canada. With flexible monthly payment
              options, you can spread the cost over time and enjoy peace of mind
              knowing that you are properly covered in case of any medical
              emergencies.
            </p>
            <p>
              Contact us today to learn more about our Super Visa Insurance
              Monthly plans and how we can help you obtain the coverage you need
              at an affordable price.
            </p>
            <Link to="/contact?type=Super Visa Insurance">
              <Button className="bg-secondary text-white w-fit">
                Contact us{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-large font-semibold">Hospital expenses</div>

        <div className="flex justify-center">
          <div>
            <div className="my-10  shadow overflow-hidden rounded">
              <table className=" bg-white">
                {/*  <thead className="bg-secondary text-white">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                            Name
                          </th>
                          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                            Last name
                          </th>
                        </tr>
                      </thead> */}
                <tbody className=" divide-y-2">
                  {tableData.map((d, i) => (
                    <tr key={d.q} className={`${i % 2 == 0 && "bg-stone"}`}>
                      <td className={`w-5/6 text-left py-3 px-4 `}>{d.q}</td>
                      <td className="w-1/6 text-left py-3 px-4">{d.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-xl">
              Get Your Self Insured While you are still Healthy!
            </div>
          </div>
        </div>

        <div className="mt-10 text-2xl font-semibold">
          If you don’t Have Super Visa Medical Insurance
        </div>
        <div className=" mt-5 text-xl">Get Ready to pay The Below Prices.</div>
        <div className="mt-10  shadow overflow-x-scroll md:overflow-hidden rounded">
          <table className=" bg-white ">
            <thead className="bg-secondary text-lg text-white">
              <tr>
                <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold "></th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  INSURED RESIDENTS
                </th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  UNINSURED RESIDENTS
                </th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  NON-RESIDENTS OF CANADA (VISITORS)
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y-2">
              {tableDataPrices.map((d, i) => (
                <tr
                  key={d.insured + i}
                  className={`${i % 2 == 0 && "bg-stone"}`}
                >
                  <td className={`w-2/5 text-left py-3 px-4 `}>{d.service}</td>
                  <td className="w-1/5 text-left py-3 px-4">{d.insured}</td>
                  <td className={`w-1/5 text-left py-3 px-4 `}>
                    {d.uninsured}
                  </td>
                  <td className="w-1/5 text-left py-3 px-4">{d.non}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" mt-5 text-lg text-right">
          * DEPOSIT: Pre-payment of patient charges is required when services to
          be provided by the Hospital to a patient are not insured. The deposit
          requested will be for three (3) days of inpatient stay.
        </div>
        <div className=" mt-16 text-xl">
          Preferred Accommodation (Daily Rates)
        </div>
        <div className="mt-10  shadow overflow-x-scroll md:overflow-hidden rounded">
          <table className=" bg-white ">
            <thead className="bg-secondary text-lg text-white">
              <tr>
                <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold "></th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  INSURED RESIDENTS
                </th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  UNINSURED RESIDENTS
                </th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  NON-RESIDENTS OF CANADA (VISITORS)
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y-2">
              {tableDataAcodomation.map((d, i) => (
                <tr
                  key={d.insured + i}
                  className={`${i % 2 == 0 && "bg-stone"}`}
                >
                  <td className={`w-2/5 text-left py-3 px-4 `}>{d.service}</td>
                  <td className="w-1/5 text-left py-3 px-4">{d.insured}</td>
                  <td className={`w-1/5 text-left py-3 px-4 `}>
                    {d.uninsured}
                  </td>
                  <td className="w-1/5 text-left py-3 px-4">{d.non}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" mt-16 text-xl">Outpatient Visit Charges</div>
        <div className="mt-10  shadow overflow-x-scroll md:overflow-hidden rounded">
          <table className=" bg-white ">
            <thead className="bg-secondary text-lg text-white">
              <tr>
                <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold "></th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  INSURED RESIDENTS
                </th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  UNINSURED RESIDENTS
                </th>
                <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold ">
                  NON-RESIDENTS OF CANADA (VISITORS)
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y-2">
              {tableDataOut.map((d, i) => (
                <tr
                  key={d.insured + i}
                  className={`${i % 2 == 0 && "bg-stone"}`}
                >
                  <td className={`w-2/5 text-left py-3 px-4 `}>{d.service}</td>
                  <td className="w-1/5 text-left py-3 px-4">{d.insured}</td>
                  <td className={`w-1/5 text-left py-3 px-4 `}>
                    {d.uninsured}
                  </td>
                  <td className="w-1/5 text-left py-3 px-4">{d.non}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" mt-16 text-lg">
          <p>
            All ER and Outpatient Visit charges include basic assessment only.
          </p>
          <p>
            Excuded from the basic cost are high-cost diagnostic procedures,
            consultant fees, physician fees (other than the ER Doctor) and all
            items separately billed below.
          </p>
        </div>
        <div className=" mt-16 text-xl">
          Excludes Uninsured Daily Inpatient Room Rate
        </div>
        <div className=" mt-5 text-lg">
          Excludes Physician Fee And Cost Of Implants.
        </div>
        <div className="flex justify-center">
          <div className="mt-5  shadow overflow-x-scroll md:overflow-hidden rounded">
            <table className=" bg-white ">
              <thead className="bg-secondary text-lg text-white">
                <tr>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold ">
                    SIZE OF FAMILY UNIT
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold ">
                    UNINSURED RESIDENTS
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold ">
                    NON-RESIDENTS OF CANADA (VISITORS)
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y-2">
                {tableDataSize.map((d, i) => (
                  <tr key={d.non + i} className={`${i % 2 == 0 && "bg-stone"}`}>
                    <td className={`w-1/3 text-left py-3 px-4 `}>
                      {d.service}
                    </td>

                    <td className={`w-1/3 text-left py-3 px-4 `}>
                      {d.uninsured}
                    </td>
                    <td className="w-1/3 text-left py-3 px-4">{d.non}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
