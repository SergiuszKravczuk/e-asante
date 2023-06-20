"use client";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const SectionFooterMenu = () => {
  const [isCliked, setIsCliked] = useState<boolean>(false);
  const onClickHandler = () => {
    setIsCliked(!isCliked);
  };
  return (
    <div className="w-11/12 mx-auto my-8 md:w-1/4 md:mt-2">
      <div
        className="flex justify-between cursor-pointer items-center my-2"
        onClick={onClickHandler}
      >
        <p className="font-philosopher text-lg uppercase tracking-wide">
          Szybka navigacja
        </p>
        <div className="md:hidden">
          {isCliked ? <BiUpArrow /> : <BiDownArrow />}
        </div>
      </div>
      <ul
        className={`ml-2 ${
          isCliked ? "block" : "hidden"
        } duration-200 ease-linear md:block`}
      >
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/">Home</Link>
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/about-us">O nas</Link>
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/contact">Kontakt</Link>
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/private-policy">Polityka prywatności</Link>
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/private-policy">Polityka prywatności</Link>
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          <Link href="/shiping-and-return">Warunki dostawy i zwrotów</Link>
        </li>
      </ul>
    </div>
  );
};

export default SectionFooterMenu;
