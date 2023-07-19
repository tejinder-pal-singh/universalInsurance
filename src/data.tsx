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
          support to ensure you get proper guidance whenever and whereever you
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
          <strong>
            <em>Financial security for your loved ones.</em>
          </strong>
          If you die, your life insurance policy will pay a death benefit to
          your beneficiaries. This money can help them cover your final expenses
          and maintain their financial security.
        </li>
        <li>
          <strong>
            <em>Tax benefits.</em>
          </strong>
          In many cases, you can deduct your life insurance premiums from your
          taxable income. Additionally, the death benefit may be tax-free to
          your beneficiaries.
        </li>
        <li>
          <strong>
            <em>Peace of mind.</em>
          </strong>
          Knowing that your loved ones will be financially secure if you die can
          give you peace of mind. This can help you focus on living your life to
          the fullest.
        </li>
        <li>
          <strong>
            <em>Investment potential.</em>
          </strong>
          Some life insurance policies offer investment features, such as the
          ability to grow your money tax-deferred. This can be a way to save for
          retirement or other long-term goals.
        </li>
        <li>
          <strong>
            <em>Flexibility.</em>
          </strong>
          There are many different types of life insurance policies available,
          so you can choose one that fits your needs and budget. You can also
          choose to add riders to your policy to increase your coverage or add
          benefits, such as disability or critical illness coverage.
        </li>

        <li>
          <strong>
            <em>Premium payment options.</em>
          </strong>
          You can choose to pay your premiums monthly, quarterly, semi-annually,
          or annually.
        </li>
        <li>
          <strong>
            <em>Policy term.</em>
          </strong>
          The policy term is the length of time your policy will be in effect.
          You can choose a term that fits your needs, such as 10 years, 20
          years, or even a lifetime.
        </li>
        <li>
          <strong>
            <em>Sum assured.</em>
          </strong>
          The sum assured is the amount of money that will be paid out to your
          beneficiaries if you die. You can choose a sum assured that is based
          on your current financial needs and goals.
        </li>
        <li>
          <strong>
            <em>Nominee.</em>
          </strong>
          The nominee is the person who will receive the death benefit if you
          die. You can choose any adult as your nominee, such as your spouse,
          child, or other family member.
        </li>
        <li>
          <strong>
            <em>Claim settlement process.</em>
          </strong>
          If you die, your beneficiaries will need to file a claim with the life
          insurance company. The claim settlement process is usually quick and
          easy.
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
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
          insurance, such as Medicare and Medicaid. If you qualify for one of
          these programs, you may be able to get coverage without having to pay
          anything out of pocket.
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
      "All across the world, the ownership and responsibility of the bread-earner towards the future of his/her family is extremely crucial. Irrespective of the field you work for, the well-being and financial security of your family will always be at the fore-front. No matter what your current savings look like, it doesn’t take enough time before your funds dry out in the event of an unfortunate incident.",
  },
];

export const travelInsuranceTypes = [
  {
    name: "Insurance for visitors to canada",
    id: "insurance-for-visitors",
  },
  {
    name: "Travel Insurance for canadians",
    id: "insurance-for-canadians",
  },
  {
    name: "Insurance for students",
    id: "insurance-for-students",
  },
];
