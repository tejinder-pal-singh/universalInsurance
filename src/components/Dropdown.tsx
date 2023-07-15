import MenuItems from "./MenuItems";
const Dropdown = ({
  submenus,
  dropdown,
  depthLevel,
}: {
  submenus: any;
  dropdown: any;
  depthLevel: any;
}) => {
  depthLevel = depthLevel + 1;

  return (
    <ul
      className={` absolute right-0 left-auto text-lg shadow-lg py-2 px-0 list-none bg-white rounded-lg  min-w-[12rem] ${
        depthLevel > 1 ? "absolute left-full -top-2 " : ""
      } ${dropdown ? "block" : "hidden"}`}
    >
      {submenus.map((submenu: any, index: any) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
