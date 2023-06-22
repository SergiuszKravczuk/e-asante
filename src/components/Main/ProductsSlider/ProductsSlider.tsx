"use client";

import { useEffect, useState } from "react";

interface ProductsSliderInt {
  mainData: any;
}

const ProductsSlider = ({ mainData }: ProductsSliderInt) => {
  const [products, setProducts] = useState<any>([]);
  const [loadDone, setLoadDone] = useState<boolean>(false);
  const [data, setData] = useState<any>();
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
          regularPrice: productFiltered[0].regular_price,
          price: productFiltered[0].price,
        };
        firstProductTable.push(product);
      });
      secondProductsFilds.forEach((id: number) => {
        const productFiltered = products.filter((prod: any) => prod.id === id);
        const product = {
          id: productFiltered[0].id,
          images: productFiltered[0].images,
          name: productFiltered[0].name,
          regularPrice: productFiltered[0].regular_price,
          price: productFiltered[0].price,
        };
        secondProductTable.push(product);
      });
      thirdProductsFilds.forEach((id: number) => {
        const productFiltered = products.filter((prod: any) => prod.id === id);
        const product = {
          id: productFiltered[0].id,
          images: productFiltered[0].images,
          name: productFiltered[0].name,
          regularPrice: productFiltered[0].regular_price,
          price: productFiltered[0].price,
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
      };
      setData(data);
    }
  }, [loadDone, data]);
  console.log(data);

  return <section className="max-w-[1480px] w-11/12 mx-auto py-4"></section>;
};

export default ProductsSlider;
