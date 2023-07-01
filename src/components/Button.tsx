export const Button = ({
  children,
  onClick,
}: {
  onClick?: () => void;
  children: any;
}) => {
  return (
    <button
      className="  bg-secondary
    text-white
    text-[20px]
    py-[15px]
    px-[25px]
 
    rounded-[5px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
