import { Variants, motion } from "framer-motion";
import "./styles.css";
const revealParent: Variants = {
  initial: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const revealWordings: Variants = {
  initial: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
      when: "beforeChildren",
    },
  },
};
const spanWordings: Variants = {
  initial: { opacity: 0, x: -10 },
  reveal: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};

function Wordings({ big, small }: { big: string; small: string }) {
  return (
    <motion.div
      variants={revealWordings}
      className="flex gap-2 items-center gap text-secondary"
    >
      <div className="text-2xl">{big} </div>
      <motion.div variants={spanWordings} className="text-lg">
        {small}
      </motion.div>
    </motion.div>
  );
}
export const Banner = () => {
  return (
    <motion.div
      variants={revealParent}
      initial={"initial"}
      animate={"reveal"}
      className="lg:px-32  px-10 py-5 z-30 overflow-x-auto  gap-5 bg-white  w-full flex items-center justify-between home-stats-section"
    >
      <Wordings big="10+" small="Years of leadership" />
      <Wordings big={`100's`} small="of Customers Served" />
      <Wordings big="115+" small="Customer testimonials" />
      <Wordings big="24" small="Hours Service" />
    </motion.div>
  );
};
