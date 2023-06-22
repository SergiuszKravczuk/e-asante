import Link from "next/link";
import Image from "next/image";

interface IconSliderItemInt {
  href: string;
  title: string;
  img: string;
  itemId: number;
}

const IconSliderItem = ({ href, title, img, itemId }: IconSliderItemInt) => {
  return (
    <Link
      href={href}
      className="block w-1/3 cursor-pointer h-[150px] my-4 md:w-1/6"
      key={itemId}
    >
      <div className="h-[100px] flex justify-center items-center hover:scale-105 duration-300">
        <Image src={img} alt={title} width={80} height={100} />
      </div>
      <div className="w-10/12 mx-auto h-[2px] bg-dGray mt-3 mb-2 sm:w-1/2"></div>
      <div className="text-center font-philosopher text-md font-bold uppercase">
        {title}
      </div>
    </Link>
  );
};

export default IconSliderItem;
