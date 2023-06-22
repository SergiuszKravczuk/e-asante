"use client";

import { title } from "process";
import IconSliderItem from "./IconsSliderItem";

interface IconsSliderInt {
  iconsData: any;
}
interface IconInt {
  imgSrc: string;
  categoryId: number;
  categoryTitle: string;
}

const IconsSlider = ({ iconsData }: IconsSliderInt) => {
  const icons = [
    {
      imgSrc: iconsData.icon_one,
      categoryId: iconsData.icon_one_category.term_id,
      categoryTitle: iconsData.icon_one_category.name,
    },
    {
      imgSrc: iconsData.icon_two,
      categoryId: iconsData.icon_two_category.term_id,
      categoryTitle: iconsData.icon_two_category.name,
    },
    {
      imgSrc: iconsData.icon_three,
      categoryId: iconsData.icon_three_category.term_id,
      categoryTitle: iconsData.icon_three_category.name,
    },
    {
      imgSrc: iconsData.icon_four,
      categoryId: iconsData.icon_four_category.term_id,
      categoryTitle: iconsData.icon_four_category.name,
    },
    {
      imgSrc: iconsData.icon_five,
      categoryId: iconsData.icon_five_category.term_id,
      categoryTitle: iconsData.icon_five_category.name,
    },
    {
      imgSrc: iconsData.icon_six,
      categoryId: iconsData.icon_six_category.term_id,
      categoryTitle: iconsData.icon_six_category.name,
    },
  ];
  return (
    <section className="bg-sldBg  max-w-[1480px] w-11/12 mx-auto py-4">
      <h3 className="font-philosopher text-2xl uppercase text-center mb-6">
        Szukam...
      </h3>
      <div className="flex justify-between items-center flex-wrap w-full">
        {icons.map((icon: IconInt) => (
          <IconSliderItem
            href={`category/${icon.categoryId}`}
            title={icon.categoryTitle}
            img={icon.imgSrc}
            itemId={icon.categoryId}
            key={icon.categoryId}
          />
        ))}
      </div>
    </section>
  );
};

export default IconsSlider;
