import Image from "next/image";
import Link from "next/link";
import BlackBtn from "@/components/Buttons/BlackBtn/BlackBtn";

interface MainSliderInt {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

const MainSlide = (props: MainSliderInt) => {
  return (
    <div
      className={`w-full h-[530px] bg-sldBg ablosute top-0 left-0 z-10 md:grid md:grid-cols-2 md:grid-row-3 md:h-[400]`}
    >
      <div className="w-full h-[300px] bg-sldBg relative md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4 md:h-full md:w-2/3">
        <div
          className={`w-[200px] h-[300px] absolute top-[50%] -translate-y-1/2 z-10 left-1/4 md:w-full md:h-full`}
        >
          <Image
            src={`${props.src}`}
            alt={props.alt}
            width={300}
            height={300}
            className="object-cover md:w-full md:h-full"
          />
        </div>
      </div>
      <div className="md:col-end-2 md:row-start-2 md:row-end-3">
        <h3 className="text-center font-philosopher my-2 text-2xl">
          {props.title}
        </h3>
        <p className="text-center text-xl text-ellipsis overflow-hidden px-2 line-clamp-3">
          {props.description}
        </p>
        <div className="flex justify-center items-start my-4">
          <Link href={props.link}>
            <BlackBtn text="Zobacz" icon={props.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSlide;
