import Link from "next/link";

interface WhiteBtnWithAnimationInt {
  href: string;
  text: string;
}

const WhiteBtnWithAnimation = ({ href, text }: WhiteBtnWithAnimationInt) => {
  return (
    <Link
      href={href}
      className="block bg-white px-6 py-2 hover:px-5 duration-200 uppercase font-philosopher text-black hover:bg-dGray hover:text-white"
    >
      {text}
    </Link>
  );
};

export default WhiteBtnWithAnimation;
