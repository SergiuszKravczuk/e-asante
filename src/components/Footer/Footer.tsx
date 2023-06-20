import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import WhiteBtn from "../Buttons/BlackBtn/WhiteBtn";
import SectionCategories from "./SectionCategories/SectionCategories";
import SectionFooterMenu from "./SectionFooterMenu/SectionFooterMenu";

interface FooterInt {
  footerCategories: any;
}

const Footer = ({ footerCategories }: FooterInt) => {
  return (
    <footer className="bg-black text-white pt-4 md:flex md:flex-wrap md:justify-center md:items-start">
      <div className="md:w-1/4">
        <Link href="/" className="flex justify-center ">
          <Image
            src="/img/logoWhite.webp"
            alt="e-asante sklep"
            width={200}
            height={150}
          />
        </Link>
        <section className="flex justify-center items-center mb-6">
          <Link
            href="/"
            className={`w-10 h-10 bg-white flex text-black justify-center items-center rounded-full text-lg hover:text-xl duration-200 ease-linear mx-2`}
          >
            <FaFacebookF />
          </Link>
          <Link
            href="/"
            className={`w-10 h-10 bg-white flex text-black justify-center items-center rounded-full text-lg hover:text-xl duration-200 ease-linear mx-2`}
          >
            <FaTwitter />
          </Link>
          <Link
            href="/"
            className={`w-10 h-10 bg-white flex text-black justify-center items-center rounded-full text-lg hover:text-xl duration-200 ease-linear mx-2`}
          >
            <FaInstagram />
          </Link>
        </section>
      </div>
      <form className="flex flex-col items-center md:w-1/4 md:order-4 md:mt-4 md:items-start">
        <label className="font-philosopher uppercase text-lg md:text-left md:w-11/12">
          Zapisz się do newslettera
        </label>
        <input
          type="email"
          name="newsletterEmail"
          id="newsletterEmail"
          className="my-4 bg-gray-800 placeholder:text-white outline-none px-4 py-2 border-[1px] border-gray-600 w-10/12 max-w-xs md:w-11/12"
          placeholder="Address Email"
        />
        <div className="w-56">
          <WhiteBtn text="Zapisz się" />
        </div>
      </form>
      <SectionCategories footerCategories={footerCategories} />
      <SectionFooterMenu />
      <div className="py-4 w-10/12 mx-auto md:order-5 md:w-11/12">
        <div className="w-full  h-[1px] bg-gray-800 mb-4"></div>
        <p className="text-xs">&copy; 2023, e-asante.com</p>
      </div>
    </footer>
  );
};

export default Footer;
