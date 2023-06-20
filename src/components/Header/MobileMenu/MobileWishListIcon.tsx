import classes from "./MobileWishListIcon.module.css";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const MobileWishListIcon = () => {
  return (
    <Link href="/wishlist" className={classes.wishlist}>
      <div className={classes.whishlist__icon}>
        <AiOutlineHeart />
      </div>
      <span>Lista życień</span>
    </Link>
  );
};

export default MobileWishListIcon;
