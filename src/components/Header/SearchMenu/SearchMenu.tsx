import { GrClose } from "react-icons/gr";
import classes from "./SearchMenu.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import SearchMainSection from "./SearchMainSection";
import { ChangeEvent, useState } from "react";

interface SearchMenuInt {
  setIsKliked: (value: boolean) => void;
}

const SearchMenu = ({ setIsKliked }: SearchMenuInt) => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [ifChangeInput, setIfChangeInput] = useState<boolean>(false);

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
    if (event.target.value.length > 0) {
      setIfChangeInput(true);
    } else {
      setIfChangeInput(false);
    }
  };
  return (
    <div
      className={`w-[100vw] fixed top-0 left-0 h-[60px] bg-white ${classes.container} flex justify-center items-center z-20`}
    >
      <div
        className={`flex justify-between items-center border-[1px] border-solid border-gray-500 text-dGray rounded-3xl transition-shadow ${classes.searchInput} w-9/12 h-10`}
      >
        <input
          type="search"
          name="searchInpt"
          id="searchInpt"
          className="rounded-3xl outline-none pl-4 placeholder:text-gray-500 w-full"
          placeholder="Szukaj"
          onChange={onChangeInputHandler}
          value={searchInputValue}
        />
        <div className="pr-4 text-2xl text-gray-500 cursor-pointer hover:scale-110 transition-transform">
          <AiOutlineSearch />
        </div>
      </div>
      <div
        className="text-2xl ml-2 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => setIsKliked(false)}
      >
        <GrClose />
      </div>
      {ifChangeInput && <SearchMainSection inputValue={searchInputValue} />}
    </div>
  );
};

export default SearchMenu;
