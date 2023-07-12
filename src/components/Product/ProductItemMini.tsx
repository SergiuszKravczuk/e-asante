import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdSavedSearch } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

import { useAppDispatch } from "@/app/GlobalRedux/store";
import { addProductToCart } from "@/app/GlobalRedux/CartSlice/CartSlice";
import ProductDropDown from "./ProductDropDown/ProductDropDown";
import { useLazyGetProductByIdQuery } from "@/api/wordPress-api";

interface ProductItemMiniInt {
  product: any;
}

const ProductItemMini = ({ product }: ProductItemMiniInt) => {
  // useQuery is product has variantion
  const [trigger] = useLazyGetProductByIdQuery();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [productVariantions, setProductVariantions] = useState<any>([]);

  // event handling
  const [moreIsClicked, setMoreIsClicked] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isVariant, setIsVariant] = useState<boolean>(false);
  const [isHasAlternativeImage, setIsHasAlternativeImage] =
    useState<boolean>(false);
  const [isHasPromotion, setIsHasPromotion] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product.images[1] !== undefined && product.images[1]) {
      setIsHasAlternativeImage(true);
    }

    if (product.regularPrice !== product.price) {
      setIsHasPromotion(true);
    }
  }, []);

  // event handling

  const onMouseEnterHeandler = () => {
    setIsHover(true);
  };

  const onMouseLeaveHeandler = () => {
    setIsHover(false);
  };

  // Adding product in cart
  const addProductHandler = (product: any) => {
    if (product.variations.length > 0) {
      setIsVariant(true);
    } else {
      dispatch(addProductToCart(product));
    }
  };

  // useQuery is product has variantion
  const productMoreHandler = async (product: any) => {
    setIsLoading(true);
    if (product.variations.length > 0) {
      const requests = product.variations.map((id: number) => trigger(id));
      const results = await Promise.all(requests);

      const productsVariation = results.map((result) => {
        if (result.isSuccess) {
          return result.data;
        }
        setIsError(true);
        return null;
      });
      setProductVariantions(productsVariation);
    }
    setIsLoading(false);
    setMoreIsClicked(true);
  };

  return (
    <>
      <div
        className="w-[130px] h-[330px] my-4 cursor-pointer md:w-[200px] md:h-[400px] relative overflow-hidden"
        onMouseEnter={onMouseEnterHeandler}
        onMouseLeave={onMouseLeaveHeandler}
      >
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <div className="w-[130px] h-[230px] rounded-md relative overflow-hidden md:w-[200px] md:h-[300px]">
            {isHasPromotion && (
              <div className="absolute top-2 left-2 bg-dGray px-2 py-1 rounded-xl text-white text-[0.6rem]">
                Promocja
              </div>
            )}
            {isHasAlternativeImage ? (
              <Image
                src={`${
                  isHover ? product.images[1].src : product.images[0].src
                }`}
                alt={`${
                  isHover ? product.images[1].alt : product.images[0].alt
                }`}
                width={130}
                height={230}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <Image
                src={`${product.images[0].src}`}
                alt={`${product.images[0].alt}`}
                width={130}
                height={230}
                className="w-full h-full object-cover rounded-md"
              />
            )}
            {isVariant && (
              <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 text-white text-center font-philosopher py-2">
                Wybierz kolor i rozmiar
              </div>
            )}
            {isError && (
              <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 text-white text-center font-philosopher py-2">
                Coś poszło nie tak
              </div>
            )}
          </div>
          <div className="text-center font-philosopher text-sm my-2">
            {product.name}
          </div>
          {isHasPromotion ? (
            <div className="flex justify-between text-sm font-bold">
              <div className="line-through font-light">
                {(+product.regularPrice).toFixed(2)} zł
              </div>
              <div>{(+product.price).toFixed(2)} zł</div>
            </div>
          ) : (
            <div className="text-sm font-bold text-right">
              {(+product.price).toFixed(2)} zł
            </div>
          )}
        </Link>
        <div
          className={`absolute top-0 duration-300 ${
            isHover ? "right-0" : "-right-[100%]"
          } ${isVariant && "right-0"}`}
        >
          <div className="w-8 h-8 bg-white my-2 rounded-full mr-2 border-[1px] border-gray-400 flex justify-center items-center hover:bg-black hover:text-white duration-200 hover:border-black">
            <AiOutlineHeart />
          </div>
          <div
            className={`w-8 h-8 relative bg-white my-2 rounded-full mr-2 border-[1px] border-gray-400 flex justify-center items-center hover:bg-black hover:text-white duration-200 text-xl hover:border-black ${
              isVariant && "animate-ping"
            } ${isLoading && "animate-pulse"}`}
            onClick={() => productMoreHandler(product)}
          >
            <MdSavedSearch />
          </div>
          <div
            className="w-8 h-8 bg-white my-2 rounded-full mr-2 border-[1px] border-gray-400 flex justify-center items-center hover:bg-black hover:text-white duration-200 hover:border-black"
            onClick={() => addProductHandler(product)}
          >
            <BsCart3 />
          </div>
        </div>
      </div>
      {moreIsClicked && <ProductDropDown product={product} />}
    </>
  );
};

export default ProductItemMini;
