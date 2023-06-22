"use client";

import CategorySliderItem from "./CategorySliderItem";

interface CategorySliderInt {
  mainData: any;
}

const CategorySlider = ({ mainData }: CategorySliderInt) => {
  const {
    category_title,
    category_description,
    categories_slider,
    categories_second_slide,
    categories_third_slide,
  } = mainData;
  return (
    <section className="max-w-[1440px] w-full my-10 mx-auto">
      <h3 className="font-philosopher text-2xl my-4 text-center uppercase">
        {category_title}
      </h3>
      <p className="text-center mx-2 capitalize md:w-1/2 md:mx-auto mb-4">
        {category_description}
      </p>
      <div className="md:flex justify-around cursor-pointer">
        <CategorySliderItem categoryItemData={categories_slider} />
        <CategorySliderItem categoryItemData={categories_second_slide} />
        <CategorySliderItem categoryItemData={categories_third_slide} />
      </div>
    </section>
  );
};

export default CategorySlider;
