import company from "../assets/team.jpg";
import team from "../assets/team.jpeg";

import { ReactComponent as TeamIcon } from "../assets/team.svg";
import { ReactComponent as SolutionIcon } from "../assets/brain.svg";
import { ReactComponent as IdeaIcon } from "../assets/idea.svg";
import { ReactComponent as WorldIcon } from "../assets/world.svg";

const about = [
  {
    title: "Dedicated team",
    desc: "We are apply our passion, integrity, and expertise every day to solving the needs of our clients and finding new ways for them to realize their goals.",
    icon: <TeamIcon />,
  },
  {
    title: "Driven by solution",
    desc: "We are driven by creating the right solutions for our clients using investing art, science, and expertise across the firm, around the world, and across nearly every asset class, strategy, and vehicle.",
    icon: <SolutionIcon />,
  },
  {
    title: "Power of ideas",
    desc: "We believe in the power of ideas over a top-down investing approach or philosophy. We seek out and embrace diverse thinking and ideas to create the best outcomes for our clients and their differing needs.",
    icon: <IdeaIcon />,
  },
  {
    title: "Solving challenges",
    desc: "We commit to our responsibilities, the role we play in the world, and the challenges we help solve - from the products we create to how we apply ESG principles as investors and how we live them as an organization.",
    icon: <WorldIcon />,
  },
];
const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80",
  },
  {
    name: "Mary Sue",
    designation: "Co-founder",
    imageUrl:
      "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
];
export const About = () => {
  return (
    <>
      <div className="relative text-justify bg-breeze overflow-hidden">
        <div className="blob absolute h-full w-full backdrop-blur-3xl z-10 "></div>
        <div className="blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-3/4 aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate "></div>

        <div className="navbar-spacer invisible pt-20">navbar plachoder</div>

        <div className="z-20 px-10  pb-10 lg:h-[530px] lg:px-32  hero w-full items-center lg:py-5 flex-col-reverse gap-20 flex lg:flex-row lg:justify-between ">
          <div className="z-20 text-justify heading lg:w-2/3 w-full  text-base">
            <div className="heading w-2/3 text-3xl lg:text-6xl font-bold">
              About Universal Insurance
            </div>
            <span className="text-large text-primary font-bold">
              Universal Insurance Company
            </span>
            , your trusted partner for all your insurance needs. We are
            committed to providing comprehensive coverage and exceptional
            service to individuals, families, and businesses. With our wide
            range of insurance products, we strive to protect what matters most
            to you. Here's why you should choose Universal Insurance Company:
            Extensive Coverage Options: We offer a diverse portfolio of
            insurance products to cater to your specific needs. Whether you're
            looking for auto insurance, home insurance, life insurance, health
            insurance, or business insurance, we have you covered. Our
            comprehensive coverage options ensure that you're protected against
            unexpected events and have peace of mind. Customized Solutions: We
            understand that each individual and business is unique, which is why
            we take a personalized approach to insurance. Our experienced agents
            will work closely with you to assess your requirements and tailor
            insurance solutions that align with your specific circumstances and
            budget. We strive to find the best coverage options at competitive
            rates. Exceptional Customer Service: At Universal Insurance Company,
            we believe in building strong and lasting relationships with our
            clients. Our dedicated team of professionals is committed to
            providing exceptional customer service every step of the way. We are
            here to answer your questions, address your concerns, and provide
            support during the claims process. Your satisfaction is our top
            priority.{" "}
          </div>

          <img
            src={company}
            className="z-10 flex-grow object-fill lg:w-1/3 lg:h-3/4 rounded-r-[6.5rem] rounded-bl-[6.5rem]"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="z-20 lg:px-32 px-10  pt-10  lg:min-h-[750px] hero w-full bg-white flex-col gap-10 flex ">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">
            {about.map((e) => (
              <div
                key={e.title}
                className="flex flex-col items-center text-2xl space-y-3 text-center bg-white rounded-xl dark:bg-gray-800"
              >
                <span className="inline-block p-3 text-secondary bg-primary rounded-full ">
                  {e.icon}
                </span>

                <h1 className="text-xl font-semibold  capitalize">{e.title}</h1>

                <p className="text-gray-500 text-xl dark:text-gray-300">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="z-20   py-5   w-full h-[24rem] ">
            <img
              src={team}
              className="object-cover  w-full h-full rounded-r-[6.5rem] rounded-bl-[6.5rem]"
              alt=""
            />
          </div>
          <div className="text-xl">
            <ul>
              <li>
                <strong>Industry Experts:</strong> Our team members are
                experienced professionals with in-depth knowledge of the
                insurance industry. They stay up-to-date with the latest trends,
                regulations, and best practices to ensure that our clients
                receive accurate and relevant advice.
              </li>
              <li>
                <strong>Customer-Focused Approach:</strong> We prioritize the
                needs and satisfaction of our clients, and our team embodies
                this commitment. Our customer service representatives, agents,
                and brokers are dedicated to building strong relationships with
                our clients, providing personalized guidance, and offering
                prompt and efficient support.
              </li>
              <li>
                <strong>Collaborative Teamwork:</strong> We foster a culture of
                collaboration and teamwork at{" "}
                <span className="text-primary">
                  Universal Insurance Company
                </span>
                . Our team members work together seamlessly, leveraging their
                individual strengths and expertise to deliver comprehensive
                solutions.
              </li>
              <li>
                <strong>Continuous Learning and Development:</strong> Our team
                is committed to continuous learning and professional
                development. We invest in training and educational opportunities
                to enhance the skills and knowledge of our team members.
              </li>
              <li>
                <strong>Integrity and Trust:</strong> Trust is the foundation of
                our relationships with our clients, and our team members uphold
                the highest standards of integrity and professionalism. We
                believe in transparent communication, ethical business
                practices, and maintaining the confidentiality of our clients'
                information.
              </li>
            </ul>
          </div>
        </div>

        <div className="z-20 lg:px-32 px-10  py-10  hero w-full  flex-col gap-10 flex ">
          <div className="heading w-2/3 font-bold text-2xl lg:text-2xl">
            Our team
          </div>
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((e) => (
              <div key={e.name} className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={e.imageUrl}
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-xl font-medium ">{e.name}</h3>
                  <span className="mt-1 text-base font-medium ">
                    {e.designation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
