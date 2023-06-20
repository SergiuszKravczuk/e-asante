import Image from "next/image";
import Link from "next/link";
import BlackBtn from "@/components/Buttons/BlackBtn/BlackBtn";

interface MainSliderInt {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  type: string;
}

const MainSlide = (props: MainSliderInt) => {
  return (
    <div className={`w-full h-[500px] ablosute top-0 left-0 bg-red-100 z-10`}>
      <div className="w-full h-[300px] bg-sldBg relative">
        <div
          className={`w-[200px] h-[300px] absolute top-[50%] -translate-y-1/2 z-10 ${
            props.type === "normal" ? "left-1/4" : "right-1/4"
          }`}
        >
          <Image
            src={`${props.src}`}
            alt={props.alt}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
      <h3 className="text-center font-philosopher my-2 text-2xl">
        {props.title}
      </h3>
      <p className="text-center text-xl text-ellipsis overflow-hidden px-2 line-clamp-3">
        {props.description}
      </p>
      <div className="flex justify-center items-start my-4">
        <Link href={props.link}>
          <BlackBtn text="Zobacz" />
        </Link>
      </div>
    </div>
  );
};

export default MainSlide;
