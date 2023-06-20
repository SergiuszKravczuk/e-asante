import { useAppDispatch } from "@/app/GlobalRedux/store";
import { setIsCliked } from "@/app/GlobalRedux/CartSlice/CartSlice";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import BlackBtn from "@/components/Buttons/BlackBtn/BlackBtn";

const CartDropDown = () => {
  const dispatch = useAppDispatch();

  const closeDropDownCartHandler = () => {
    dispatch(setIsCliked(false));
  };
  return (
    <section
      className={`fixed right-[0] top-[0] max-w-xs min-w-[300px] bg-white h-[100vh] z-20`}
    >
      <header>
        <div className="flex justify-between items-center flex-wrap">
          <div className="font-philosopher text-2xl text-gray-800 ml-6 my-2">
            Twój koszyk
          </div>
          <div
            className="flex justify-center items-center cursor-pointer mr-4"
            onClick={closeDropDownCartHandler}
          >
            <div>Wróć</div>
            <div className="ml-1">{<AiOutlineArrowRight />}</div>
          </div>
          <div className="h-[1px] w-11/12 mx-auto bg-gray-300"></div>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center">
        <p className="my-6 font-philosopher text-xl text-gray-800">
          Twój koszyk jest pusty
        </p>
        <Link href="/shop" className="mb-6">
          <BlackBtn text="Kontynuj zakupy" />
        </Link>
        <p className="font-philosopher tracking-wider mb-4">Masz już konto?</p>
        <p className="text-sm text-center mx-2">
          <Link
            href="/login"
            className="cursor-pointer border-b-[1px] border-black hover:border-b-[2px]"
          >
            Zaloguj się
          </Link>
          , <span>aby dokonać szybszego zamówienia.</span>
        </p>
      </div>
    </section>
  );
};

export default CartDropDown;
