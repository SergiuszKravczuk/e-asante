import Image from "next/image";
import Link from "next/link";

interface CartInt {
  products: any[];
}

const Cart = ({ products }: CartInt) => {
  console.log(products);
  return (
    <section>
      {products.map((product: any) => (
        <div
          key={product.id}
          className="w-11/12 mx-auto h-[180px] my-4 border-b-[1px] py-2 border-b-gray-300 flex justify-between items-center"
        >
          <Link
            href={`/product/${product.id}`}
            className="block cursor-pointer mr-4 w-[120px] h-[150px] bg-black"
          >
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width={100}
              height={150}
              className="h-full w-auto"
            />
          </Link>
          <div className="h-[150px] w-3/4">
            <h3 className="font-philosopher text-sm font-bold">
              {product.name}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cart;
