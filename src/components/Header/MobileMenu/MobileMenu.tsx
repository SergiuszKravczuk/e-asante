import classes from "./MobileMenu.module.css";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "@/app/GlobalRedux/store";
import { selectIsClicked } from "@/app/GlobalRedux/HumburgerSlice/HumburgerSlice";
import MobileSubMenu from "./MobileSubMenu";
import MobileWishListIcon from "./MobileWishListIcon";
import MobileMenuFooter from "./MobileMenuFooter";

import {
  setIsMobileMenuOpen,
  selectMobileMenuData,
  addMobileMenuWay,
} from "@/app/GlobalRedux/MobileMenuSlice/MobileMenuSlice";
import TextLoader from "@/components/Loader/TextLoader";
import BlurEl from "@/components/BlurEl/BlurEl";

const MobileMenu = () => {
  const [menuItem, setMenuItem] = useState<any>();
  const dispatch = useAppDispatch();
  const menuMobileData = useAppSelector(selectMobileMenuData);
  const isClicked = useAppSelector(selectIsClicked);

  const openSubmenu = () => {
    dispatch(setIsMobileMenuOpen(true));
    dispatch(addMobileMenuWay(menuItem.id));
  };

  useEffect(() => {
    if (menuMobileData.length > 0) {
      const parentItem = menuMobileData.filter(
        (item: any) => +item.parent === 0
      );

      setMenuItem(parentItem[0]);
    }
  }, [menuMobileData]);

  if (menuItem !== undefined) {
    return (
      <>
        <nav
          className={`${classes.container} ${isClicked ? classes.active : ""}`}
        >
          <div className={classes.linkContainer}>
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <div
              className={`${classes.link} ${classes.subLink}`}
              onClick={openSubmenu}
            >
              <span>{menuItem.title}</span>
              <div className={classes.subLink__icon}>
                <AiOutlineArrowRight />
              </div>
            </div>
            <Link href="/blog" className={classes.link}>
              Blog
            </Link>
            <Link href="/about-us" className={classes.link}>
              O nas
            </Link>
            <Link href="/contact" className={classes.link}>
              Kontakt
            </Link>
            <MobileSubMenu />
          </div>
          <MobileWishListIcon />
          <MobileMenuFooter />
        </nav>
        {isClicked && <BlurEl />}
      </>
    );
  }

  return (
    <nav className={`${classes.container}`}>
      <TextLoader />
    </nav>
  );
};

export default MobileMenu;
