"use client";

import BlackBtn from "@/components/Buttons/BlackBtn/BlackBtn";
import ProductButtonSlider from "@/components/Buttons/ProductSliderButton/ProductSliderButton";
import TextLoader from "@/components/Loader/TextLoader";
import ProductItemMini from "@/components/Product/ProductItemMini";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ProductsSliderInt {
  mainData: any;
}

const ProductsSlider = ({ mainData }: ProductsSliderInt) => {
  const [products, setProducts] = useState<any>([]);
  const [loadDone, setLoadDone] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [firstBtnValue, setFirstBtnValue] = useState<boolean>(true);
  const [secondBtnValue, setSecondBtnValue] = useState<boolean>(false);
  const [thirdBtnValue, setThirdBtnValue] = useState<boolean>(false);

  useEffect(() => {
    if (data !== undefined) {
      return;
    }
    const firstProductsFilds = [];
    const secondProductsFilds: number[] = [];
    const thirdProductsFilds = [];

    for (let elKey in mainData.first_product_fild) {
      firstProductsFilds.push(mainData.first_product_fild[elKey]);
    }
    for (let elKey in mainData.second_product_fild) {
      secondProductsFilds.push(mainData.second_product_fild[elKey]);
    }
    for (let elKey in mainData.third_product_fild) {
      thirdProductsFilds.push(mainData.third_product_fild[elKey]);
    }
    const productsTableId = [
      firstProductsFilds,
      secondProductsFilds,
      thirdProductsFilds,
    ];
    // fetch product function
    const fetchProduct = async (id: number) => {
      const consumerKey = process.env.CLIENT_WOOCOMERCE_KEY?.toString();
      const consumerSecret = process.env.PRIVATE_WOOCOMERCE_KEY?.toString();

      const headers = new Headers();
      headers.append(
        "Authorization",
        `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
      );
      headers.append("Content-Type", "application/json");

      try {
        const res = await fetch(
          `https://e-asante.pl/wp-json/wc/v3/products/${id}`,
          {
            headers,
          }
        );
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    };

    // fetch products
    const productsData: any[] = [];
    const countingProducts: any[] = [];
    if (products.length === 0) {
      productsTableId.forEach((productsFieldTable) => {
        productsFieldTable.forEach((productId) => {
          setLoadDone(true);
          if (loadDone) {
            fetchProduct(+productId).then((product: any) => {
              if (product !== undefined) {
                countingProducts.push(product);
                const filteredProducts = productsData.filter(
                  (el: any) => el.id === productId
                );
                if (filteredProducts.length === 0) {
                  productsData.push(product);
                }
              }
              if (countingProducts.length === 12) {
                setProducts(productsData);
                setLoadDone(false);
              }
            });
          }
        });
      });
    }

    const firstProductTable: any = [];
    const secondProductTable: any = [];
    const thirdProductTable: any = [];
    if (products.length > 0 && !loadDone) {
      firstProductsFilds.forEach((id: number) => {
        const productFiltered = products.filter((prod: any) => prod.id === id);
        const product = {
          id: productFiltered[0].id,
          images: productFiltered[0].images,
          name: productFiltered[0].name,
          regularPrice: +productFiltered[0].regular_price,
          price: +productFiltered[0].price,
          attributes: productFiltered[0].attributes,
          variations: productFiltered[0].variations,
        };
        firstProductTable.push(product);
      });
      secondProductsFilds.forEach((id: number) => {
        const productFiltered = products.filter((prod: any) => prod.id === id);
        const product = {
          id: productFiltered[0].id,
          images: productFiltered[0].images,
          name: productFiltered[0].name,
          regularPrice: +productFiltered[0].regular_price,
          price: +productFiltered[0].price,
          attributes: productFiltered[0].attributes,
          variations: productFiltered[0].variations,
        };
        secondProductTable.push(product);
      });
      thirdProductsFilds.forEach((id: number) => {
        const productFiltered = products.filter((prod: any) => prod.id === id);

        const product = {
          id: productFiltered[0].id,
          images: productFiltered[0].images,
          name: productFiltered[0].name,
          regularPrice: +productFiltered[0].regular_price,
          price: +productFiltered[0].price,
          attributes: productFiltered[0].attributes,
          variations: productFiltered[0].variations,
        };
        thirdProductTable.push(product);
      });
    }
    if (
      !loadDone &&
      firstProductTable.length > 0 &&
      secondProductTable.length > 0 &&
      thirdProductTable.length > 0
    ) {
      const data = {
        title: mainData.products_title,
        description: mainData.products_description,
        firstProductTable,
        secondProductTable,
        thirdProductTable,
        buttons: mainData.product_buttons,
      };
      setData(data);
    }
  }, [loadDone, data]);

  const firstBtnHandler = () => {
    setFirstBtnValue(true);
    setSecondBtnValue(false);
    setThirdBtnValue(false);
  };
  const secondBtnHandler = () => {
    setFirstBtnValue(false);
    setSecondBtnValue(true);
    setThirdBtnValue(false);
  };
  const thirdBtnHandler = () => {
    setFirstBtnValue(false);
    setSecondBtnValue(false);
    setThirdBtnValue(true);
  };

  if (data === undefined) {
    return (
      <section className="max-w-[1480px] w-11/12 mx-auto py-4 my-6">
        <h3 className="font-philosopher uppercase text-2xl text-center">
          <TextLoader />
        </h3>
      </section>
    );
  }

  return (
    <section className="max-w-[1480px] w-11/12 mx-auto py-4 my-6">
      <h3 className="font-philosopher uppercase text-2xl text-center">
        {data.title}
      </h3>
      <p className="center my-4 text-center">{data.description}</p>
      <div className="flex justify-center items-start flex-wrap">
        <ProductButtonSlider
          text={data.buttons.button_one}
          active={firstBtnValue}
          onClick={firstBtnHandler}
        />
        <ProductButtonSlider
          text={data.buttons.button_two}
          active={secondBtnValue}
          onClick={secondBtnHandler}
        />
        <ProductButtonSlider
          text={data.buttons.button_three}
          active={thirdBtnValue}
          onClick={thirdBtnHandler}
        />
      </div>
      <section className="my-4">
        {firstBtnValue && (
          <div className="flex justify-between items-start flex-wrap w-full">
            {data.firstProductTable.map((productEl: any) => (
              <ProductItemMini product={productEl} key={productEl.id} />
            ))}
          </div>
        )}
        {secondBtnValue && (
          <div className="flex justify-between items-start flex-wrap">
            {data.secondProductTable.map((productEl: any) => (
              <ProductItemMini product={productEl} key={productEl.id} />
            ))}
          </div>
        )}
        {thirdBtnValue && (
          <div className="flex justify-between items-start flex-wrap">
            {data.thirdProductTable.map((productEl: any) => (
              <ProductItemMini product={productEl} key={productEl.id} />
            ))}
          </div>
        )}
      </section>
      <div className="w-[200px] mx-auto">
        <Link href="/shop">
          <BlackBtn text="Sklep" icon={<AiOutlineArrowRight />} />
        </Link>
      </div>
    </section>
  );
};

export default ProductsSlider;
