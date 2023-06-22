import CategorySlider from "@/components/Main/CategorySlider/CategorySlider";
import IconsSlider from "@/components/Main/IconsSlider/IconsSlider";
import MainSlider from "@/components/Main/MainSlider/MainSlider";
import ProductsSlider from "@/components/Main/ProductsSlider/ProductsSlider";

export default async function Home() {
  const mainData = await getMainData();
  return (
    <main className="mx-auto">
      <MainSlider mainData={mainData.acf} />
      <CategorySlider mainData={mainData.acf} />
      <IconsSlider iconsData={mainData.acf.icons} />
      <ProductsSlider mainData={mainData.acf} />
    </main>
  );
}

async function getMainData() {
  const res = await fetch("https://e-asante.pl/wp-json/acf/v3/posts/80");

  return await res.json();
}
