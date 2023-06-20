"use client";

import MainSlide from "./MainSlide";

interface MainSliderInt {
  mainData: any;
}

const MainSlider = ({ mainData }: MainSliderInt) => {
  const { first_slide } = mainData;

  console.log(first_slide);
  return (
    <section className="w-full md:bg-sldBg mb-6 relative">
      <MainSlide
        src={first_slide.slide_image.url}
        alt={first_slide.slide_image.alt}
        title={first_slide.slide_title}
        description={first_slide.slide_description}
        link={first_slide.link}
        type="normal"
      />
    </section>
  );
};

export default MainSlider;
