import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import classes from "./LeftMainSection.module.css";
import Humburger from "../Humburger/Humburger";

interface LeftMainSectionInt {
  setIsKliked: (value: boolean) => void;
  windowWidth: number;
}

const LeftMainSection = ({ setIsKliked, windowWidth }: LeftMainSectionInt) => {
  return (
    <div data-testid="header__leftSection" className={classes.container}>
      {windowWidth < 990 && <Humburger />}
      <div
        data-testid="header__leftSectionSearchIcon"
        className={classes.searchBar}
        onClick={() => setIsKliked(true)}
      >
        <AiOutlineSearch />
      </div>
      <div
        data-testid="header__leftSectionWishList"
        className={classes.wishList}
      >
        <AiOutlineHeart />
      </div>
    </div>
  );
};

export default LeftMainSection;
