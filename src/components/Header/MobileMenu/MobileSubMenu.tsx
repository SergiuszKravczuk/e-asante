import classes from "./MobileSubMenu.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";

import {
  selectWhatMobileMenuIdIsClicked,
  setWhatMobileMenuIdIsClicked,
  selectMobileMenyWay,
  removeMobileMenuWay,
  selectMobileMenuData,
  addMobileMenuWay,
  setIsMobileMenuOpen,
  selectIsMobileMenuOpen,
} from "@/app/GlobalRedux/MobileMenuSlice/MobileMenuSlice";

const MobileSubMenu = () => {
  const [parentItem, setParentItem] = useState<any>();
  const [menuItems, setMenuItems] = useState<any>();
  const dispatch = useAppDispatch();

  const mobileMenuWay = useAppSelector(selectMobileMenyWay);

  const isOpen = useAppSelector(selectIsMobileMenuOpen);
  const mobileMenuData = useAppSelector(selectMobileMenuData);

  useEffect(() => {
    const parentItem = mobileMenuData.find(
      (item: any) => item.id === mobileMenuWay[mobileMenuWay.length - 1]
    );
    if (parentItem) {
      setParentItem(parentItem);
    }

    const menuItems = mobileMenuData.filter((item: any) => {
      return +item.parent === mobileMenuWay[mobileMenuWay.length - 1];
    });
    if (menuItems) {
      setMenuItems(menuItems);
    }
  }, [mobileMenuWay, mobileMenuData]);

  const handleBack = () => {
    dispatch(removeMobileMenuWay());
    dispatch(
      setWhatMobileMenuIdIsClicked(mobileMenuWay[mobileMenuWay.length - 1])
    );

    if (mobileMenuWay.length === 1) {
      dispatch(setIsMobileMenuOpen(false));
    }
  };
  const handleOpen = (itemId: number) => {
    dispatch(
      setWhatMobileMenuIdIsClicked(mobileMenuWay[mobileMenuWay.length - 1])
    );
    dispatch(addMobileMenuWay(itemId));
  };

  if (mobileMenuWay.length === 0) {
    return <div></div>;
  }

  return (
    <div
      className={`${classes.containerSubMenu} ${isOpen ? classes.active : ""}`}
    >
      <>
        <div className={classes.linkBack} onClick={handleBack}>
          <div className={classes.linkBack__icon}>
            <AiOutlineArrowLeft />
          </div>
          <div>{parentItem?.title}</div>
        </div>
        {menuItems.map((item: any) => {
          const filteredData = mobileMenuData.filter(
            (itemData: any) => +itemData.parent === item.id
          );
          if (filteredData.length > 0) {
            return (
              <div
                key={item.id}
                className={`${classes.subLink} ${classes.link}`}
                onClick={() => handleOpen(item.id)}
              >
                <div>{item.title}</div>
                <div className={classes.subLink__icon}>
                  <AiOutlineArrowRight />
                </div>
              </div>
            );
          } else {
            return (
              <Link
                key={item.id}
                href={`/category/${item.id}`}
                className={classes.link}
              >
                {item.title}
              </Link>
            );
          }
        })}
      </>
    </div>
  );
};

export default MobileSubMenu;
