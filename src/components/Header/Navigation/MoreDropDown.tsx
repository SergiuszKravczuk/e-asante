import Link from "next/link";

interface MoreDropDownInt {
  onHoverMore: boolean;
  onMouseEnterMoreHandeler: () => void;
  onMouseLeaveMoreHandler: () => void;
}

const MoreDropDown = ({
  onHoverMore,
  onMouseEnterMoreHandeler,
  onMouseLeaveMoreHandler,
}: MoreDropDownInt) => {
  return (
    <div
      className={`p-4 cursor-pointer w-[250px] h-[200px] bg-white absolute top-[74%] -right-[10%] border-gray-100 border-x-[1px] border-b-[1px] ${
        onHoverMore ? "block" : "hidden"
      }`}
      onMouseEnter={onMouseEnterMoreHandeler}
      onMouseLeave={onMouseLeaveMoreHandler}
    >
      <Link
        href="/private-policy"
        className="block text-dGray hover:text-black my-1 text-md"
      >
        Polityka prywatności
      </Link>
      <Link
        href="/shiping-and-return"
        className="block text-dGray hover:text-black my-1 text-md"
      >
        Warunki dostawy i zwrotów
      </Link>
    </div>
  );
};

export default MoreDropDown;
