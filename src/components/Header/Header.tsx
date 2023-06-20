"use client";

import HeaderMainSection from "./HeaderMainSection/HeaderMainSection";
import TopBar from "./TopBar/TopBar";
import { useAppDispatch } from "@/app/GlobalRedux/store";
import { setMobileMenuData } from "@/app/GlobalRedux/MobileMenuSlice/MobileMenuSlice";

import { useEffect } from "react";

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

  useEffect(() => {
    dispatch(setMobileMenuData(mobileMenu));
  }, []);
  return (
    <header className="h-full">
      <TopBar topbar={JSON.parse(topbar)} />
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
