"use client";

import HeaderMainSection from "./HeaderMainSection/HeaderMainSection";
import TopBar from "./TopBar/TopBar";
import { useAppDispatch } from "@/app/GlobalRedux/store";
import { setMobileMenuData } from "@/app/GlobalRedux/MobileMenuSlice/MobileMenuSlice";

import { useEffect, useState } from "react";

interface HeaderInt {
  mobileMenu: any;
  topbar: any;
  logo: string;
  navigation: any;
  navigationSettings: any;
}

const Header = ({
  topbar,
  mobileMenu,
  logo,
  navigation,
  navigationSettings,
}: HeaderInt) => {
  const dispatch = useAppDispatch();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    dispatch(setMobileMenuData(mobileMenu));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    setScrollY(scrollPosition);
  };
  return (
    <header
      className={`w-full z-20 bg-white ${
        scrollY > 160 ? "fixed top-0 left-0" : "relative"
      }`}
    >
      {scrollY < 160 ? <TopBar topbar={JSON.parse(topbar)} /> : ""}
      <HeaderMainSection
        logo={logo}
        mobileMenu={mobileMenu}
        navigation={navigation}
        navigationSettings={navigationSettings}
      />
    </header>
  );
};

export default Header;
