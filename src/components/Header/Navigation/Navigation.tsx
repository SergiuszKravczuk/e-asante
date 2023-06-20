"use client";

import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.css";
import { usePathname } from "next/navigation";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useState } from "react";
import NavigationDropDown from "./NavigationDropDown";

interface NavigationInt {
  onHoverHome: boolean;
  onHoverMore: boolean;
  onMouseEnterHomeHandeler: () => void;
  onMouseLeaveHomeHandler: () => void;
  onMouseEnterMoreHandeler: () => void;
  onMouseLeaveMoreHandler: () => void;
}

const Navigation = (props: NavigationInt) => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center relative">
      <Link
        href="/"
        className={`${classes.link} ${pathname === "/" ? classes.active : ""}`}
      >
        Home
      </Link>
      <Link
        href="/shop"
        className={`${classes.link} ${
          pathname === "/shop" ? classes.active : ""
        } flex justify-between items-center`}
        onMouseEnter={props.onMouseEnterHomeHandeler}
        onMouseLeave={props.onMouseLeaveHomeHandler}
      >
        <p>Sklep</p>
        <div className="text-sm ml-1">
          {props.onHoverHome ? <BiUpArrow /> : <BiDownArrow />}
        </div>
      </Link>
      <Link
        href="/blog"
        className={`${classes.link} ${
          pathname === "/blog" ? classes.active : ""
        }`}
      >
        Blog
      </Link>
      <Link href="/" className="my-4 mx-8">
        <Image src="/img/logo.webp" alt="test" width={100} height={50} />
      </Link>
      <Link
        href="/ubout-us"
        className={`${classes.link} ${
          pathname === "/about-us" ? classes.active : ""
        }`}
      >
        O nas
      </Link>
      <Link
        href="/contact"
        className={`${classes.link} ${
          pathname === "/contact" ? classes.active : ""
        }`}
      >
        Kontakt
      </Link>
      <div
        className={`${classes.link} flex justify-between items-center`}
        onMouseEnter={props.onMouseEnterMoreHandeler}
        onMouseLeave={props.onMouseLeaveMoreHandler}
      >
        <p>Więcej</p>
        <div className="text-sm ml-1">
          {props.onHoverMore ? <BiUpArrow /> : <BiDownArrow />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
