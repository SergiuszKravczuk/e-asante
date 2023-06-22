import Image from "next/image";
import classes from "./CategorySliderItem.module.css";
import WhiteBtnWithAnimation from "@/components/Buttons/BlackBtn/WhiteBtnWithAnimation";

interface CategorySliderItemInt {
  categoryItemData: any;
}

const CategorySliderItem = ({ categoryItemData }: CategorySliderItemInt) => {
  const category = categoryItemData.category[0];

  return (
    <>
      <div
        className={`w-[300px] h-[300px] relative my-32 ${classes.container} mx-auto`}
      >
        <div
          className={`w-[280px] h-[280px] rounded-full absolute bg-sldBg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <div
          className={`absolute w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <Image
            src={`${categoryItemData.category_image}`}
            alt={category.name}
            width={450}
            height={350}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className={`w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2`}>
          <Image
            src="/img/bgCaterory_slider.webp"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="w-full absolute bottom-[40px] left-0 flex justify-center">
          <WhiteBtnWithAnimation
            href={`/category/${category.term_id}`}
            text={category.name}
          />
        </div>
      </div>
    </>
  );
};

export default CategorySliderItem;
