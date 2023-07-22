interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
  children: any;
  className?: string;
}
export const Button = ({ children, onClick, className, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={` ${className && className} 
    text-[20px]
    py-[15px]
    px-[25px]
 first-letter:capitalize
    rounded-[5px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
