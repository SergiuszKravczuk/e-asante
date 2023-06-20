import classes from "./MobileMenuFooter.module.css";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const MobileMenuFooter = () => {
  return (
    <footer className={classes.footer}>
      <Link href="/" className={classes.footer__icon}>
        <FaFacebookF />
      </Link>
      <Link href="/" className={classes.footer__icon}>
        <FaTwitter />
      </Link>
      <Link href="/" className={classes.footer__icon}>
        <FaInstagram />
      </Link>
    </footer>
  );
};

export default MobileMenuFooter;
