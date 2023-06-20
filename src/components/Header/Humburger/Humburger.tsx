import classes from "./Humburger.module.css";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import {
  setIsClicked,
  selectIsClicked,
} from "@/app/GlobalRedux/HumburgerSlice/HumburgerSlice";
const Humburger = () => {
  const dispatch = useAppDispatch();

  const isClicked = useAppSelector(selectIsClicked);

  const handleOnClickOpen = () => {
    dispatch(setIsClicked(true));
  };
  const handleOnClickClose = () => {
    dispatch(setIsClicked(false));
  };
  if (!isClicked) {
    return (
      <div
        data-testid="header__leftSectionMobileMenu"
        className={classes.container}
        onClick={handleOnClickOpen}
      >
        <VscMenu />
      </div>
    );
  }
  return (
    <div
      data-testid="header__leftSectionMobileMenu"
      className={classes.container}
      onClick={handleOnClickClose}
    >
      <GrClose />
    </div>
  );
};

export default Humburger;
