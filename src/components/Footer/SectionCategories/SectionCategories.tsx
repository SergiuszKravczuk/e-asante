"use client";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useState } from "react";

const SectionCategories = () => {
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
          Kategorije
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
          Test1
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          Test2
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          Test3
        </li>
        <li className="my-4 cursor-pointer hover:text-gray-300 duration-200 ease-linear">
          Test4
        </li>
      </ul>
    </div>
  );
};

export default SectionCategories;
