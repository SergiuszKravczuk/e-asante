import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./HeaderMainSection.module.css";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";

import { setIsCliked } from "@/app/GlobalRedux/CartSlice/CartSlice";
import { selectIsCartDropDownClicked } from "@/app/GlobalRedux/CartSlice/CartSlice";

import LeftMainSection from "../LeftMainSection/LeftMainSection";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchMenu from "../SearchMenu/SearchMenu";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import CartDropDown from "../Cart/CartDropDown";
import BlurEl from "@/components/BlurEl/BlurEl";
import Navigation from "../Navigation/Navigation";
import NavigationDropDown from "../Navigation/NavigationDropDown";

interface HeaderMainSectionInt {
  logo: string;
  mobileMenu: any;
  navigation: any;
  navigationSettings: any;
}

const HeaderMainSection = ({
  logo,
  mobileMenu,
  navigation,
  navigationSettings,
}: HeaderMainSectionInt) => {
  const [windowWidth, setWindowWidth] = useState<number>(991);
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isCartClicked = useAppSelector(selectIsCartDropDownClicked);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handlerIsSearchClicked = (value: boolean) => {
    setIsSearchClicked(value);
  };

  const cartDropDownHandler = () => {
    dispatch(setIsCliked(true));
  };

  // navigation
  const [onHoverHome, setOnHoverHome] = useState(false);
  const [onHoverMore, setOnHoverMore] = useState(false);

  const onMouseEnterHomeHandeler = () => {
    setOnHoverHome(true);
  };
  const onMouseLeaveHomeHandler = () => {
    setOnHoverHome(false);
  };
  const onMouseEnterMoreHandeler = () => {
    setOnHoverMore(true);
  };
  const onMouseLeaveMoreHandler = () => {
    setOnHoverMore(false);
  };
  // -----
  return (
    <section data-testid="headerMain" className={classes.container}>
      <LeftMainSection
        setIsKliked={handlerIsSearchClicked}
        windowWidth={windowWidth}
      />
      {windowWidth < 990 ? (
        <Link href="/" className="my-4">
          <Image src="/img/logo.webp" alt="test" width={100} height={50} />
        </Link>
      ) : (
        <Navigation
          onHoverHome={onHoverHome}
          onHoverMore={onHoverMore}
          onMouseEnterHomeHandeler={onMouseEnterHomeHandeler}
          onMouseLeaveHomeHandler={onMouseLeaveHomeHandler}
          onMouseEnterMoreHandeler={onMouseEnterMoreHandeler}
          onMouseLeaveMoreHandler={onMouseLeaveMoreHandler}
        />
      )}

      <div className="flex justify-end items-center text-[1.7rem]">
        <Link
          href="/login"
          className="cursor-pointer hover:scale-125 duration-200 linear mr-1 md:mr-4"
        >
          <AiOutlineUser />
        </Link>
        <div
          className="cursor-pointer hover:scale-125 duration-200 linear"
          onClick={cartDropDownHandler}
        >
          <CgShoppingBag />
        </div>
      </div>
      {windowWidth < 990 ? <MobileMenu /> : ""}
      {isSearchClicked && <SearchMenu setIsKliked={handlerIsSearchClicked} />}
      {isCartClicked && <CartDropDown />}
      {isCartClicked || isSearchClicked ? <BlurEl /> : ""}
      <NavigationDropDown
        onHover={onHoverHome}
        onMouseEnterHomeHandeler={onMouseEnterHomeHandeler}
        onMouseLeaveHomeHandler={onMouseLeaveHomeHandler}
        navigationData={navigation}
        navigationSettings={navigationSettings}
      />
    </section>
  );
};

export default HeaderMainSection;
