import Link from "next/link";
import Image from "next/image";

interface NavigationDropDownInt {
  onHover: boolean;
  onMouseEnterHomeHandeler: () => void;
  onMouseLeaveHomeHandler: () => void;
  navigationData: any;
  navigationSettings: any;
}

const NavigationDropDown = ({
  onHover,
  onMouseEnterHomeHandeler,
  onMouseLeaveHomeHandler,
  navigationData,
  navigationSettings,
}: NavigationDropDownInt) => {
  console.log(navigationSettings.product[0]);

  return (
    <div
      className={`absolute top-[74%] left-0 w-full bg-white  cursor-pointer p-4 text-dGray flex justify-between items-start ${
        onHover ? "block" : "hidden"
      }`}
      onMouseEnter={onMouseEnterHomeHandeler}
      onMouseLeave={onMouseLeaveHomeHandler}
    >
      <nav className="w-1/2 flex justify-around items-start">
        {navigationData.map((el: any) => (
          <div key={el.id}>
            <Link
              href={`/category/${el.id}`}
              className="font-philosopher mb-2 cursor-pointer hover:text-black text-xl block"
            >
              {el.title}
            </Link>
            {el.child_items && el.child_items.length > 0
              ? el.child_items.map((childEl: any) => (
                  <Link
                    key={childEl.id}
                    href={`category/${childEl.id}`}
                    className="block my-1 hover:text-black duration-200"
                  >
                    {childEl.title}
                  </Link>
                ))
              : ""}
          </div>
        ))}
      </nav>
      <aside className="bg-blue-300 w-1/2">
        <div>
          <div>
            <Image
              src={`${navigationSettings.first}`}
              alt={navigationSettings.firsttitle}
              width={100}
              height={200}
              priority
            />
          </div>
          <p>{navigationSettings.firsttitle}</p>
          <div>
            <Image
              src={`${navigationSettings.second}`}
              alt={navigationSettings.secondtitle}
              width={100}
              height={200}
              priority
            />
          </div>
          <p>{navigationSettings.firsttitle}</p>
        </div>
        <div>
          <div>{/* <Image src={``}/> */}</div>
        </div>
      </aside>
    </div>
  );
};

export default NavigationDropDown;
