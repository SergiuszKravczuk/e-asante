import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavigationDropDownInt {
  onHover: boolean;
  onMouseEnterHomeHandeler: () => void;
  onMouseLeaveHomeHandler: () => void;
  navigationData: any;
  navigationSettings: any;
}

const NavigationDropDown = ({
  onHover,
  onMouseEnterHomeHandeler,
  onMouseLeaveHomeHandler,
  navigationData,
  navigationSettings,
}: NavigationDropDownInt) => {
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const fetchProduct = async () => {
      const consumerKey = process.env.CLIENT_WOOCOMERCE_KEY?.toString();
      const consumerSecret = process.env.PRIVATE_WOOCOMERCE_KEY?.toString();

      const headers = new Headers();
      headers.append(
        "Authorization",
        `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
      );
      headers.append("Content-Type", "application/json");

      const res = await fetch(
        `https://e-asante.pl/wp-json/wc/v3/products/${navigationSettings.product[0].ID}`,
        {
          headers,
        }
      );

      if (!res.ok) {
        return;
      }

      const productData = await res.json();
      setProduct(productData);
    };

    fetchProduct();
  }, []);
  return (
    <div
      className={`absolute top-[74%] left-0 w-full bg-white cursor-pointer p-4 text-dGray flex justify-between items-start border-b-gray-100 border-b-[1px] ${
        onHover ? "block" : "hidden"
      }`}
      onMouseEnter={onMouseEnterHomeHandeler}
      onMouseLeave={onMouseLeaveHomeHandler}
    >
      <nav className="w-1/2 flex justify-around items-start">
        {navigationData.map((el: any) => (
          <div key={el.ID}>
            <Link
              href={`/category/${el.id}`}
              className="font-philosopher mb-2 cursor-pointer hover:text-black text-xl block"
            >
              {el.title}
            </Link>
            {el.child_items && el.child_items.length > 0
              ? el.child_items.map((childEl: any) => (
                  <Link
                    href={`category/${childEl.id}`}
                    className="block my-1 hover:text-black duration-200"
                    key={childEl.ID}
                  >
                    {childEl.title}
                  </Link>
                ))
              : ""}
          </div>
        ))}
      </nav>
      <aside className="w-1/2 flex justify-around items-start">
        <div className="w-[31%]">
          <div className="w-full h-[120px] xl:h-[160px]">
            <Image
              src={navigationSettings.first_img}
              alt={navigationSettings.firsttitle}
              width={150}
              height={200}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-philosopher text-dGray my-2 text-md text-center h-10 xl:text-lg xl:h-14">
            {navigationSettings.firsttitle}
          </h4>
          <p className="text-dGray text-sm xl:text-base">
            {navigationSettings.first_desctiption}
          </p>
        </div>
        <div className="w-[31%]">
          <div className="w-full h-[120px] xl:h-[160px]">
            <Image
              src={navigationSettings.second}
              alt={navigationSettings.secondtitle}
              width={150}
              height={200}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-philosopher text-dGray my-2 text-md text-center h-10 xl:text-lg xl:h-14">
            {navigationSettings.secondtitle}
          </h4>
          <p className="text-dGray text-sm xl:text-base">
            {navigationSettings.second_description}
          </p>
        </div>

        {product !== undefined ? (
          <Link href={`product/${product.ID}`} className="w-[31%]">
            <div className="w-full h-[110px] rounded-md xl:h-[150px] block pointer">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                width={150}
                height={200}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h4 className="font-philosopher text-dGray my-2 text-md text-center xl:text-lg xl:h-14">
              {product.name}
            </h4>
            <p className="text-right text-dGray text-sm lg:text-base">
              {(+product.regular_price).toFixed(2)} zł
            </p>
          </Link>
        ) : (
          ""
        )}
      </aside>
    </div>
  );
};

export default NavigationDropDown;
