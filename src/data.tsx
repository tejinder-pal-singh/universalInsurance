import travelInsurance from "./assets/travelinsurance.webp";
import healthInsurance from "./assets/familyProtecting.png";
import lifeInsurance from "./assets/healthinsurance.jpg";
import supervisa from "./assets/supervisa.jpg";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SupportIcon from "@mui/icons-material/Support";
interface InsuranceTypes {
  icon: JSX.Element;
  name: string;
  id: string;
  imageUrl: string;
  description: string;
  meta: JSX.Element;
  learnMore?: boolean;
}
export const insuranceTypes: InsuranceTypes[] = [
  {
    icon: <CreditCardIcon />,
    name: "Super Visa Insurance",
    id: "supervisa",
    imageUrl: supervisa,
    learnMore: true,
    description:
      "Super Visa allows Parents or Grand Parents to stay in Canada for up to two years at a time and is offered to parents of Permanent and Canadian residents. SuperVisa can be issued for up to two years to ten years. Applicants must show they have medical travel insurance set up for one year after arriving in Canada. You can purchase this medical Insurance on behalf of the family member who is visiting.",
    meta: (
      <ul>
        <li>
          <strong>Provides coverage for medical expenses</strong>: Super Visa
          insurance provides coverage for medical expenses for the parent or
          grandparent of a Canadian citizen or permanent resident who is
          visiting Canada for up to 2 years. This includes the cost of doctor's
          visits, hospital stays, and prescription drugs.
        </li>
        <li>
          <strong>Must be purchased from a Canadian insurance company</strong>:
          Super Visa insurance must be purchased from a Canadian insurance
          company that is approved by Immigration, Refugees and Citizenship
          Canada (IRCC).
        </li>
        <li>
          <strong>Must have a minimum coverage of $100,000</strong>: Super Visa
          insurance must have a minimum coverage of $100,000. This ensures that
          your parent or grandparent will be covered for any major medical
          expenses that they may incur while they are in Canada.
        </li>
        <li>
          <strong>Can be purchased for multiple visits</strong>: Super Visa
          insurance can be purchased for multiple visits, so your parent or
          grandparent can stay in Canada for up to 2 years.
        </li>
      </ul>
    ),
  },
  {
    icon: <HealthAndSafetyIcon />,
    name: "Health Insurance",
    id: "health",
    imageUrl: healthInsurance,
    description: `Health insurance plays a crucial role in safeguarding your well-being and providing financial protection against unforeseen medical expenses. While provincial health insurance plans and typical employer-sponsored health plans offer coverage for basic medical services, there are certain expenses that may not be covered.`,
    meta: (
      <ul className="text-base">
        Additionally, there are various other challenges that can arise when
        dealing with health issues, such as accessing specialized care, managing
        daily needs, and coping with the stress and anxiety that accompanies
        illness.At <span className="text-primary">Universal Insurance</span>, we
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
          maintaining overall well-being.By choosing{" "}
          <span className="text-primary  font-semibold">
            Universal Insurance&nbsp;
          </span>{" "}
          for your health insurance needs, you can enjoy comprehensive coverage,
          financial protection, and peace of mind. Our goal is to ensure that
          you receive the best possible care when you need it most, allowing you
          to focus on your health and recovery. Help protect yourself from
          regular health and dental costs and the expenses associated with
          disability, critical illness and long term care.&nbsp;
          <span className="text-primary  font-semibold">
            Universal Insurance&nbsp;
          </span>
          has access to 20+ insurance providers in health domain.\n \t We thrive
          to give you the best value for money, and do not forget our 24* 7
          support to ensure you get proper guidance whenever and wherever you
          need.`,
        </li>
      </ul>
    ),
  },

  {
    icon: <SupportIcon />,
    name: "Life Insurance",
    id: "life-insurance",
    imageUrl: lifeInsurance,
    meta: (
      <ul className="text-base">
        At <span className="text-primary">Universal Insurance</span>, we offer
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
        At{" "}
        <span className="text-primary  font-semibold">
          Universal Insurance{" "}
        </span>
        , we understand that every individual's needs are unique. Our team of
        experienced professionals will work closely with you to assess your
        specific circumstances and help you choose the right life insurance
        policy. We offer a range of options, including term life insurance,
        whole life insurance, and universal life insurance, tailored to meet
        your specific goals and budget. With{" "}
        <span className="text-primary  font-semibold">
          Universal Insurance{" "}
        </span>
        , you can rest assured knowing that your loved ones will be financially
        protected and cared for in the event of your passing. Life insurance
        provides you with the peace of mind that comes from knowing that you
        have taken steps to secure your family's future.
      </ul>
    ),
    learnMore: true,
    description: `Life insurance is an essential financial tool that provides protection and peace of mind for you and your loved ones. While there are various types of life insurance policies available, it's important to choose one that suits your specific needs and priorities.`,
  },
  {
    icon: <AirplanemodeActiveIcon />,
    name: "Travel Insurance",
    id: "travel",
    imageUrl: travelInsurance,
    meta: (
      <ul className="text-base">
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
      "Get help covering your unexpected emergency medical expenses and more wherever you travel with a travel insurance plan from us. Our travel insurance plans include 24/7 emergency assistance services, providing you with support and guidance in various situations.",
  },
];

export const lifeInsuranceTypes = [
  {
    name: "Life Insurance",
    id: "life",

    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Financial security for your loved ones</strong>: If you die,
          your life insurance policy will pay a death benefit to your
          beneficiaries. This money can help them cover your final expenses and
          maintain their financial security.
        </li>
        <li>
          <strong>Tax benefits</strong>: In many cases, you can deduct your life
          insurance premiums from your taxable income. Additionally, the death
          benefit may be tax-free to your beneficiaries.
        </li>
        <li>
          <strong>Peace of mind</strong>: Knowing that your loved ones will be
          financially secure if you die can give you peace of mind. This can
          help you focus on living your life to the fullest.
        </li>
        <li>
          <strong>Investment potential</strong>: Some life insurance policies
          offer investment features, such as the ability to grow your money
          tax-deferred. This can be a way to save for retirement or other
          long-term goals.
        </li>
        <li>
          <strong>Flexibility</strong>: There are many different types of life
          insurance policies available, so you can choose one that fits your
          needs and budget. You can also choose to add riders to your policy to
          increase your coverage or add benefits, such as disability or critical
          illness coverage.
        </li>

        <li>
          <strong>Premium payment options</strong>: You can choose to pay your
          premiums monthly, quarterly, semi-annually, or annually.
        </li>
        <li>
          <strong>Policy term</strong>: The policy term is the length of time
          your policy will be in effect. You can choose a term that fits your
          needs, such as 10 years, 20 years, or even a lifetime.
        </li>
        <li>
          <strong>Sum assured</strong>: The sum assured is the amount of money
          that will be paid out to your beneficiaries if you die. You can choose
          a sum assured that is based on your current financial needs and goals.
        </li>
        <li>
          <strong>Nominee</strong>: The nominee is the person who will receive
          the death benefit if you die. You can choose any adult as your
          nominee, such as your spouse, child, or other family member.
        </li>
        <li>
          <strong>Claim settlement process</strong>: If you die, your
          beneficiaries will need to file a claim with the life insurance
          company. The claim settlement process is usually quick and easy.
        </li>
      </ul>
    ),
    description:
      "Life insurance is a contract between an individual (the policyholder) and an insurance company. In exchange for regular payments (premiums), the insurance company agrees to pay a sum of money (the death benefit) to the policyholder's beneficiaries if the policyholder dies during the term of the policy.",
  },
  {
    name: "Term Life Insurance",
    id: "term",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Affordability</strong>: Term insurance is typically less
          expensive than permanent life insurance because it does not build up
          cash value. This means that the insurance company only has to pay out
          the death benefit if you die during the policy term, so they can offer
          lower premiums.
        </li>
        <li>
          <strong>Flexibility</strong>: You can choose the length of the policy
          term, which can be anywhere from 1 to 30 years. This gives you the
          flexibility to choose a policy that fits your needs and budget. For
          example, if you have young children, you may want to choose a longer
          policy term to ensure that they are financially secure in the event of
          your death.
        </li>
        <li>
          <strong>Tax benefits</strong>: In many cases, you can deduct your life
          insurance premiums from your taxable income. This can save you money
          on your taxes.
        </li>
        <li>
          <strong>Peace of mind</strong>: Knowing that your loved ones will be
          financially secure if you die can give you peace of mind. This can
          help you focus on living your life to the fullest.
        </li>
        <li>
          <strong>Death benefit</strong>: The death benefit is the amount of
          money that will be paid to your beneficiaries if you die during the
          policy term. This money can help them cover your final expenses and
          maintain their financial security.
        </li>
      </ul>
    ),
    description:
      "Term insurance is a type of life insurance that provides coverage for a specific period of time, known as the policy term. If you die during the policy term, your beneficiaries will receive the death benefit. However, if you outlive the policy term, no benefits will be paid.",
  },
  {
    name: "Money-back Insurance",
    id: "money-back",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Regular income</strong>: Money-back insurance policies provide
          the policyholder with regular income during the policy term.
        </li>
        <li>
          <strong>Death benefit</strong>: The remaining sum assured is paid out
          to the policyholder's beneficiaries upon death.
        </li>
        <li>
          <strong>Tax benefits</strong>: In many cases, you can deduct your life
          insurance premiums from your taxable income. This can save you money
          on your taxes.
        </li>
        <li>
          <strong>Flexibility</strong>: You can choose the policy term and the
          amount of money you want to receive back.
        </li>
        <li>
          <strong>Liquidity</strong>: You can access your money before the
          policy term ends, but there may be surrender charges.
        </li>
        <li>
          <strong>Guaranteed returns</strong>: Money-back insurance policies
          typically offer guaranteed returns, which means that you can be sure
          of getting your money back, even if the insurance company's
          investments perform poorly.
        </li>
        <li>
          <strong>Low risk</strong>: Money-back insurance policies are
          considered to be a low-risk investment, as the policyholder is
          guaranteed to receive their money back, even if the insurance
          company's investments perform poorly.
        </li>
      </ul>
    ),
    description:
      "A money-back insurance policy is a type of life insurance that provides the policyholder with a portion of the sum assured in regular payments over the policy term. The remaining sum assured is paid out to the policyholder's beneficiaries upon death.",
  },
  {
    name: "Income Replacement Insurance",
    id: "income-replacement",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Income replacement</strong>: Income replacement insurance
          provides you with a monthly income if you are unable to work due to
          illness, injury, or disability. This can help you pay your bills and
          maintain your financial security.
        </li>
        <li>
          <strong>Flexibility</strong>: You can choose the amount of income you
          want to replace, as well as the length of time you want the coverage
          to last. This gives you the flexibility to choose a policy that fits
          your needs and budget.
        </li>
        <li>
          <strong>Tax benefits</strong>: In many cases, you can deduct your
          income replacement insurance premiums from your taxable income. This
          can save you money on your taxes.
        </li>
        <li>
          <strong>Peace of mind</strong>: Knowing that you will have a monthly
          income if you are unable to work can give you peace of mind. This can
          help you focus on your recovery and getting back to work.
        </li>
      </ul>
    ),
    description:
      "Income replacement insurance is a type of insurance that provides a regular income if you're unable to work due to illness or injury. It can help you cover your living expenses, such as mortgage payments, bills, and groceries, while you're unable to work.",
  },
  {
    name: "Mortgage Insurance",
    id: "mortgage",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Protects your lender</strong>: Mortgage insurance protects
          your lender in case you default on your mortgage. This means that if
          you are unable to make your mortgage payments, the insurance company
          will pay the lender the remaining balance on your loan.
        </li>
        <li>
          <strong>Allows you to buy a home with a lower down payment</strong>:
          Mortgage insurance can help you qualify for a mortgage with a lower
          down payment. This can make it possible for you to buy a home sooner
          or buy a more expensive home.
        </li>
        <li>
          <strong>Can be tax-deductible</strong>: In some cases, you may be able
          to deduct your mortgage insurance premiums from your taxable income.
          This can save you money on your taxes.
        </li>
        <li>
          <strong>Can be expensive</strong>: Mortgage insurance can be
          expensive, especially if you have a high-balance mortgage. This is
          something to keep in mind when you are considering buying a home.
        </li>
      </ul>
    ),
    description:
      "Mortgage insurance is an insurance policy that protects the lender in case the borrower defaults on their mortgage payments. It is typically required when a borrower makes a down payment of less than 20% of the purchase price of the home.",
  },
  {
    name: "Critical Illness Insurance",
    id: "critical",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Pays out a lump sum</strong>: Critical illness insurance pays
          out a lump sum if you are diagnosed with a covered illness. This money
          can be used to cover your medical expenses, pay off debt, or make
          other financial arrangements.
        </li>
        <li>
          <strong>Flexibility</strong>: You can choose the type of critical
          illness coverage you want, as well as the amount of the lump sum. This
          gives you the flexibility to choose a policy that fits your needs and
          budget.
        </li>
        <li>
          <strong>Tax benefits</strong>: In some cases, you may be able to
          deduct your critical illness insurance premiums from your taxable
          income. This can save you money on your taxes.
        </li>
        <li>
          <strong>Peace of mind</strong>: Knowing that you will have a lump sum
          if you are diagnosed with a critical illness can give you peace of
          mind. This can help you focus on your recovery and getting back to
          your life.
        </li>
      </ul>
    ),
    description:
      "Critical illness insurance (CI) is a type of insurance that provides a lump sum payment if you are diagnosed with a critical illness. Critical illnesses are typically life-threatening or debilitating illnesses, such as cancer, heart attack, stroke, or kidney failure",
  },
  {
    name: "Disability Insurance",
    id: "disability",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Replaces your income</strong>: Disability insurance replaces
          your income if you are unable to work due to illness, injury, or
          disability. This can help you pay your bills and maintain your
          financial security.
        </li>
        <li>
          <strong>Flexibility</strong>: You can choose the amount of income you
          want to replace, as well as the length of time you want the coverage
          to last. This gives you the flexibility to choose a policy that fits
          your needs and budget.
        </li>
        <li>
          <strong>Tax benefits</strong>: In some cases, you may be able to
          deduct your disability insurance premiums from your taxable income.
          This can save you money on your taxes.
        </li>
        <li>
          <strong>Peace of mind</strong>: Knowing that you will have an income
          if you are unable to work can give you peace of mind. This can help
          you focus on your recovery and getting back to work.
        </li>
      </ul>
    ),
    description:
      "Disability insurance is a type of insurance that provides income if you are unable to work due to illness or injury. It can help you cover your living expenses, such as mortgage payments, bills, and groceries, while you're unable to work.",
  },
  {
    name: "Non Medical Insurance",
    id: "non-medical",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Provides coverage for non-medical expenses</strong>:
          Non-medical insurance provides coverage for expenses that are not
          related to your health, such as:
          <ul>
            <li>
              <strong>Travel insurance</strong>: This type of insurance covers
              you for expenses that may occur while you are traveling, such as
              lost luggage, medical expenses, and trip cancellation.
            </li>
            <li>
              <strong>Pet insurance</strong>: This type of insurance covers you
              for the cost of veterinary care, such as routine check-ups,
              vaccinations, and surgery.
            </li>
            <li>
              <strong>Homeowners insurance</strong>: This type of insurance
              covers you for the cost of repairs to your home and belongings if
              they are damaged by fire, theft, or other events.
            </li>
            <li>
              <strong>Auto insurance</strong>: This type of insurance covers you
              for the cost of repairs to your car and the medical expenses of
              others if you are involved in an accident.
            </li>
          </ul>
        </li>
        <li>
          <strong>Can be more affordable than medical insurance</strong>:
          Non-medical insurance is often more affordable than medical insurance,
          as it does not cover the cost of doctor's visits, hospital stays, or
          prescription drugs.
        </li>
        <li>
          <strong>Can provide peace of mind</strong>: Non-medical insurance can
          provide peace of mind knowing that you are covered for unexpected
          expenses.
        </li>
      </ul>
    ),
    description:
      "Non-medical insurance is a type of insurance that covers events other than medical expenses.",
  },
  {
    name: "Drug and Dental",
    id: "drug-and-dental",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>Covers the cost of prescription drugs</strong>: Drug insurance
          covers the cost of prescription drugs, both brand-name and generic.
          The amount of coverage you get will vary depending on your policy.
        </li>
        <li>
          <strong>Can be more affordable than paying out of pocket</strong>:
          Drug insurance can be more affordable than paying out of pocket for
          prescription drugs, especially if you take expensive medications.
        </li>
        <li>
          <strong>Can provide peace of mind</strong>: Drug insurance can provide
          peace of mind knowing that you are covered for the cost of
          prescription drugs.
        </li>
        <li>
          <strong>Covers the cost of dental care</strong>: Dental insurance
          covers the cost of dental care, such as routine check-ups, cleanings,
          and fillings. The amount of coverage you get will vary depending on
          your policy.
        </li>
        <li>
          <strong>Can be more affordable than paying out of pocket</strong>:
          Dental insurance can be more affordable than paying out of pocket for
          dental care, especially if you need major work done.
        </li>
        <li>
          <strong>Can provide peace of mind</strong>: Dental insurance can
          provide peace of mind knowing that you are covered for the cost of
          dental care.
        </li>
      </ul>
    ),
    description:
      "Drug and dental insurance are two types of health insurance that can help you cover the cost of prescription drugs and dental care.",
  },
  {
    name: "Free Insurance Plan",
    id: "free",
    imageUrl: lifeInsurance,
    meta: (
      <ul>
        <li>
          <strong>May be available through your employer</strong>: Some
          employers offer free or low-cost insurance plans to their employees.
          This can be a great way to get coverage without having to pay anything
          out of pocket.
        </li>
        <li>
          <strong>May be available through government programs</strong>: There
          are a number of government programs that offer free or low-cost
          insurance. If you qualify for one of these programs, you may be able
          to get coverage without having to pay anything out of pocket.
        </li>
        <li>
          <strong>May be available through non-profit organizations</strong>:
          There are a number of non-profit organizations that offer free or
          low-cost insurance, such as the United Way and the American Cancer
          Society. These organizations may offer coverage for specific types of
          insurance, such as cancer or disability insurance.
        </li>
      </ul>
    ),
    description:
      "There are no truly free insurance plans available. However, there are some government-sponsored health insurance plans that are available at a low cost or even free to certain people. These plans typically have lower premiums and copays than private health insurance plans, but they may have more restrictions on coverage.",
  },
];

export const travelInsuranceTypes = [
  {
    name: "Insurance for visitors to canada",
    id: "insurance-for-visitors",
    description:
      "Travel insurance can be a valuable asset for visitors to Canada, as it can help to cover the cost of medical expenses, trip cancellation, and other unexpected costs.",
    meta: (
      <ul>
        <li>
          <strong>Medical expenses</strong>: Travel insurance can help to cover
          the cost of medical expenses if you become ill or injured while in
          Canada. This can include the cost of hospitalization, doctor visits,
          and prescription drugs.
        </li>
        <li>
          <strong>Trip cancellation</strong>: Travel insurance can help to cover
          the cost of your trip if you have to cancel your trip due to illness,
          injury, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Baggage loss or damage</strong>: Travel insurance can help to
          cover the cost of lost or damaged baggage.
        </li>
        <li>
          <strong>Trip interruption</strong>: Travel insurance can help to cover
          the cost of your trip if you have to interrupt your trip due to
          illness, injury, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Emergency medical transportation</strong>: Travel insurance
          can help to cover the cost of emergency medical transportation if you
          need to be airlifted to a hospital.
        </li>
      </ul>
    ),
  },
  {
    name: "Travel Insurance for canadians",
    id: "insurance-for-canadians",
    description:
      "Travel insurance is a type of insurance that can help to protect you financially in the event of unexpected events while you are traveling.",
    meta: (
      <ul>
        <li>
          <strong>Medical expenses</strong>: Travel insurance can help to cover
          the cost of medical expenses if you become ill or injured while
          traveling outside of Canada. This can include the cost of
          hospitalization, doctor visits, and prescription drugs.
        </li>
        <li>
          <strong>Trip cancellation</strong>: Travel insurance can help to cover
          the cost of your trip if you have to cancel your trip due to illness,
          injury, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Baggage loss or damage</strong>: Travel insurance can help to
          cover the cost of lost or damaged baggage.
        </li>
        <li>
          <strong>Trip interruption</strong>: Travel insurance can help to cover
          the cost of your trip if you have to interrupt your trip due to
          illness, injury, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Emergency medical transportation</strong>: Travel insurance
          can help to cover the cost of emergency medical transportation if you
          need to be airlifted to a hospital.
        </li>
        <li>
          <strong>Trip delay</strong>: Travel insurance can help to cover the
          cost of your accommodations and expenses if your trip is delayed due
          to weather, mechanical problems, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Lost passport</strong>: Travel insurance can help to cover the
          cost of replacing your passport if it is lost or stolen while you are
          traveling.
        </li>
      </ul>
    ),
  },
  {
    name: "Insurance for students",
    id: "insurance-for-students",
    description:
      "Travel insurance for students is a type of insurance that can help to protect students financially in the event of unexpected events while they are traveling.",
    meta: (
      <ul>
        <li>
          <strong>Medical expenses</strong>: Travel insurance can help to cover
          the cost of medical expenses if you become ill or injured while
          traveling outside of your home country. This can include the cost of
          hospitalization, doctor visits, and prescription drugs.
        </li>
        <li>
          <strong>Trip cancellation</strong>: Travel insurance can help to cover
          the cost of your trip if you have to cancel your trip due to illness,
          injury, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Baggage loss or damage</strong>: Travel insurance can help to
          cover the cost of lost or damaged baggage.
        </li>
        <li>
          <strong>Trip interruption</strong>: Travel insurance can help to cover
          the cost of your trip if you have to interrupt your trip due to
          illness, injury, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Emergency medical transportation</strong>: Travel insurance
          can help to cover the cost of emergency medical transportation if you
          need to be airlifted to a hospital.
        </li>
        <li>
          <strong>Trip delay</strong>: Travel insurance can help to cover the
          cost of your accommodations and expenses if your trip is delayed due
          to weather, mechanical problems, or other unforeseen circumstances.
        </li>
        <li>
          <strong>Lost passport</strong>: Travel insurance can help to cover the
          cost of replacing your passport if it is lost or stolen while you are
          traveling.
        </li>
      </ul>
    ),
  },
];

export const investmentTypes = [
  {
    name: "RRSP",
    id: "rrsp",
    description: "",
    meta: (
      <>
        <ul>
          <li>
            <strong>Tax Deductible Contributions</strong>: Contributions made to
            an RRSP are tax-deductible, meaning you can reduce your taxable
            income by the amount contributed, providing potential tax savings.
          </li>
          <li>
            <strong>Tax-Sheltered Growth</strong>: Investments held within an
            RRSP grow on a tax-sheltered basis. This means you won't be taxed on
            any investment earnings, such as interest, dividends, or capital
            gains, as long as they remain within the RRSP.
          </li>
          <li>
            <strong>Flexible Contribution Limits</strong>: You can contribute up
            to your RRSP contribution limit, which is based on your earned
            income and set by the government. Unused contribution room can be
            carried forward to future years.
          </li>
          <li>
            <strong>Long-Term Retirement Savings</strong>: RRSPs are designed to
            help Canadians save for retirement. They provide a disciplined
            savings vehicle that can help you accumulate wealth over time,
            ensuring a comfortable retirement.
          </li>
          <li>
            <strong>Investment Options</strong>: RRSPs offer a wide range of
            investment options, including stocks, bonds, mutual funds,
            exchange-traded funds (ETFs), and guaranteed investment certificates
            (GICs), allowing you to tailor your investments to your risk
            tolerance and investment goals.
          </li>
          <li>
            <strong>Home Buyers' Plan</strong>: The Home Buyers' Plan (HBP)
            allows first-time homebuyers to withdraw up to a certain amount from
            their RRSPs to use as a down payment on a home, providing a
            tax-advantaged way to fund homeownership.
          </li>
          <li>
            <strong>Lifelong Learning Plan</strong>: The Lifelong Learning Plan
            (LLP) allows individuals to withdraw funds from their RRSPs to
            finance eligible education or training programs for themselves or
            their spouse or common-law partner.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "RESP",
    id: "resp",
    description: "",
    meta: (
      <>
        <ul>
          <li>
            <strong>Tax-Deferred Growth</strong>: Contributions made to an RESP
            grow on a tax-deferred basis, meaning you won't pay taxes on any
            investment earnings until the funds are withdrawn for educational
            purposes.
          </li>
          <li>
            <strong>Canada Education Savings Grant (CESG)</strong>: The CESG is
            a government grant available to eligible RESP beneficiaries. The
            government matches a portion of the contributions made to the RESP,
            providing additional funds to help save for a child's education.
          </li>
          <li>
            <strong>Canada Learning Bond (CLB)</strong>: The CLB is a government
            grant available to families with modest incomes. It provides an
            initial amount and subsequent annual contributions to help kickstart
            education savings for children.
          </li>
          <li>
            <strong>Flexible Contribution Limits</strong>: RESPs have
            contribution limits, but there is no annual limit. You can
            contribute up to a lifetime maximum per beneficiary, allowing you to
            save as much as you want within that limit.
          </li>
          <li>
            <strong>Investment Options</strong>: RESPs offer a variety of
            investment options, including mutual funds, guaranteed investment
            certificates (GICs), stocks, bonds, and exchange-traded funds
            (ETFs). This allows you to choose investments that align with your
            risk tolerance and investment goals.
          </li>
          <li>
            <strong>Post-Secondary Education Withdrawals</strong>: When the
            beneficiary enrolls in a qualifying post-secondary program,
            withdrawals can be made from the RESP to cover educational expenses,
            such as tuition, books, and living costs.
          </li>
          <li>
            <strong>Flexibility for Beneficiary Changes</strong>: If the
            intended beneficiary of the RESP does not pursue post-secondary
            education, you can transfer the funds to another eligible
            beneficiary within the same family without tax consequences.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Buy-Sell Agreements",
    id: "buy-sell",
    description:
      "A buy-sell agreement is a legal contract that outlines the terms and conditions under which the ownership of a business can be transferred from one party to another. This can be useful in a variety of situations, such as when a business owner wants to retire, when a partner dies, or when a business is sold.",
    meta: (
      <ul>
        <li>
          <strong>It can help to ensure the continuity of the business.</strong>{" "}
          If a key owner dies or becomes disabled, the buy-sell agreement will
          ensure that the business can continue to operate without interruption.
        </li>
        <li>
          <strong>
            It can help to protect the interests of the remaining owners.
          </strong>{" "}
          The buy-sell agreement will specify the price that the remaining
          owners will pay for the shares of the departing owner. This can help
          to prevent the departing owner from selling their shares to a third
          party at a lower price.
        </li>
        <li>
          <strong>It can help to avoid disputes among the owners.</strong> The
          buy-sell agreement will specify the terms and conditions under which
          the shares can be transferred. This can help to avoid disputes among
          the owners if a change in ownership occurs.
        </li>
      </ul>
    ),
  },
  {
    name: "Registered Retirement Savings Plan",
    id: "retirement-savings",
    description:
      "A registered retirement savings plan (RRSP) is a tax-deferred retirement savings account in Canada. Contributions to an RRSP are made with pre-tax dollars, which means that you can deduct them from your taxable income. The money in an RRSP grows tax-deferred, which means that you don't pay taxes on the investment earnings until you withdraw the money in retirement.",
    meta: (
      <ul>
        <li>
          <strong>Individual RRSPs</strong>: These are the most common type of
          RRSP. They are held in your name and you have full control over the
          investments.
        </li>
        <li>
          <strong>Group RRSPs</strong>: These are RRSPs that are offered through
          your employer. Your employer may match your contributions, which can
          help you save even more for retirement.
        </li>
        <li>
          <strong>Spousal RRSPs</strong>: These are RRSPs that are set up by one
          spouse for the benefit of the other spouse. This can be a good way to
          save for retirement if one spouse has a higher income than the other.
        </li>
      </ul>
    ),
  },
  {
    name: "RRSP and TFSA",
    id: "rrsp-and-tfsa",
    description:
      "Registered Retirement Savings Plan (RRSP) and Tax-Free Savings Account (TFSA) are both registered investment accounts in Canada that offer tax benefits. They are both popular savings vehicles for Canadians, but they have different features and benefits.",
    meta: (
      <>
        <div>
          <div>RRSP</div>
          <ul>
            <li>
              <strong>Contributions are made with pre-tax dollars.</strong> This
              means that you can deduct your RRSP contributions from your
              taxable income, which can lower your taxes.
            </li>
            <li>
              <strong>The money in an RRSP grows tax-deferred.</strong> This
              means that you don't pay taxes on the investment earnings until
              you withdraw the money in retirement.
            </li>
          </ul>
        </div>
        <div>
          <div>TFSA</div>
          <ul>
            <li>
              <strong>The money in a TFSA grows tax-free.</strong> This means
              that you don't pay taxes on the investment earnings, even when you
              withdraw the money.
            </li>
            <li>
              <strong>
                You can withdraw the money from a TFSA at any time, without
                penalty.
              </strong>
            </li>
            <li>
              <strong>
                The contribution limit for TFSAs is set by the government and it
                increases every year.
              </strong>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    name: "New Immigrant & RRSP",
    id: "new-immigrant",
    description:
      "As a new immigrant to Canada, you may be eligible to contribute to an RRSP. The rules for RRSP eligibility for new immigrants are complex, so it is important to speak to a financial advisor to determine if you are eligible.",
    meta: (
      <div>
        <p>
          Generally speaking, you are eligible to contribute to an RRSP if you
          have lived in Canada for at least 183 days in the past calendar year.
          However, there are some exceptions to this rule.
        </p>
        <p>
          The maximum RRSP contribution limit for new immigrants is the same as
          the maximum RRSP contribution limit for Canadian citizens and
          permanent residents. For 2023, the maximum RRSP contribution limit is
          $29,200 for individuals under 71 years old.
        </p>

        <p>
          If you are a new immigrant and you are considering contributing to an
          RRSP, it is important to speak to a financial advisor to get
          personalized advice. We at Universal Insurance can help you determine
          if you are eligible to contribute to an RRSP, and help you develop a
          retirement savings plan that is right for you.
        </p>
      </div>
    ),
  },
];
