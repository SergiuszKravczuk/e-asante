"use client";

import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./SearchMainSection.module.css";
import { useRouter } from "next/navigation";
import TextLoader from "@/components/Loader/TextLoader";
import { useGetProductsBySearchQuery } from "@/api/general-settingsApi";
import Link from "next/link";
import Image from "next/image";

interface SearchMainSectionInt {
  inputValue: string;
}

const SearchMainSection = ({ inputValue }: SearchMainSectionInt) => {
  const router = useRouter();

  const clickPushBySearchPagehandler = () => {
    router.push(`/search`);
  };

  const { data, isLoading } = useGetProductsBySearchQuery(inputValue);

  if (isLoading) {
    return (
      <div className="absolute left-0 top-full border-x-[1px] border-b-[1px] border-solid border-gray-300 max-h-[70vh] w-full bg-white overflow-y-scroll">
        <TextLoader />
      </div>
    );
  }

  let categories: any = [];

  if (data !== undefined) {
    for (const el of data) {
      for (const item of el.categories) {
        const filtered = categories.filter(
          (filterEl: any) => filterEl.id === item.id
        );
        if (filtered.length === 0) {
          categories.push(item);
        }
      }
    }
  }

  const helpPhrases = categories.slice(0, 5);

  return (
    <div className="absolute left-0 top-full border-x-[1px] border-b-[1px] border-solid border-gray-300 max-h-[70vh] w-full bg-white overflow-y-scroll z-20 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:max-h-[80vh]">
      {data !== undefined && data.length !== 0 ? (
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <div className="p-4 uppercase text-gray-400 text-xs tracking-widest border-gray-300">
            Rekomendowane
            <div className="w-full mx-auto h-[1px] bg-gray-300 mt-1"></div>
          </div>
          <div className="px-4 lowercase text-sm">
            {helpPhrases.map((item: any) => (
              <Link
                href={`category/${item.name}`}
                key={item.id}
                className="my-1 text-xs lowercase tracking-wide cursor-pointer block"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {data !== undefined && data.length !== 0 ? (
        <>
          <div className="col-start-2 col-end-3 row-start-1 row-end-3">
            <div className="p-4 uppercase text-gray-400 text-xs tracking-widest border-gray-300">
              Produkty
              <div className="w-full mx-auto h-[1px] bg-gray-300 mt-1"></div>
            </div>
            {data.map((product: any) => (
              <Link
                href={`product/${product.id}`}
                key={product.id}
                className="flex justify-start items-center hover:bg-gray-50 mx-4 mt-0 mb-4 hover:underline duration-200 ease-linear"
              >
                <Image
                  src={product.images[0].src}
                  width={50}
                  height={100}
                  alt={product.images[0].alt}
                />
                <p className="ml-4 text-dGray text-sm capitalize">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-3">
            <div className="p-4 uppercase text-gray-400 text-xs tracking-widest border-gray-300">
              Pages
              <div className="w-full mx-auto h-[1px] bg-gray-300 mt-1"></div>
            </div>
            <div className="mx-4">
              <Link
                href="/blog"
                className="block my-4 text-dGray cursor-pointer text-sm hover:underline duration-200 ease-linear"
              >
                Blog
              </Link>
              <Link
                href="/about-us"
                className="block my-4 text-dGray cursor-pointer text-sm hover:underline duration-200 ease-linear"
              >
                O nas
              </Link>
            </div>
          </div>
        </>
      ) : null}

      <div
        className={`col-start-1 col-end-3 row-start-3 row-end-4  flex justify-between items-center cursor-pointer border-t-[1px] hover:bg-gray-100 h-10 overflow-hidden px-4 transition-colors ${classes.searchFor}`}
        onClick={clickPushBySearchPagehandler}
      >
        <p>Szukaj dla "{inputValue}"</p>
        <div className={classes.icon}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SearchMainSection;
