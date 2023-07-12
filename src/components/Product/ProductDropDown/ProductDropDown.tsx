interface ProductDropDownInt {
  product: any;
}
import { useEffect, useState } from "react";

const ProductDropDown = ({ product }: ProductDropDownInt) => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    if (product.variations.length > 0) {
      const variantionProduct: any[] = [];
      const fetchVariantion = async (id: number) => {
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

      product.variations.map((variantId: number) => {
        fetchVariantion(variantId).then((variantProduct: any) => {
          variantionProduct.push(variantProduct);
          if (product.variations.length === variantionProduct.length) {
            setProducts(variantionProduct);
          }
        });
      });
    }
  }, []);
  console.log(products);
  return (
    <>
      <div className="fixed z-40 h-[90vh] w-11/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white overflow-y-scroll"></div>
      <div className="fixed w-[100vw] h-[100vh] bg-gray-400 opacity-50 z-20 top-0 left-0 overflow-hidden"></div>
    </>
  );
};

export default ProductDropDown;
