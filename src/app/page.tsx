import MainSlider from "@/components/Main/MainSlider/MainSlider";

export default async function Home() {
  const mainData = await getMainData();
  return (
    <main className="h-[200vh]">
      {" "}
      <MainSlider mainData={mainData.acf} />
    </main>
  );
}

async function getMainData() {
  const res = await fetch("https://e-asante.pl/wp-json/acf/v3/posts/80");

  return await res.json();
}
