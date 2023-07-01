export const Button = ({
  children,
  onClick,
  className,
}: {
  onClick?: () => void;
  children: any;
  className?: string;
}) => {
  return (
    <button
      className={` ${className && className} 
    text-[20px]
    py-[15px]
    px-[25px]
 
    rounded-[5px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
