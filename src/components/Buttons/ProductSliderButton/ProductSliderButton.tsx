interface ProductButtonInt {
  text: string;
  active: boolean;
  onClick: () => void;
}

const ProductButtonSlider = ({ text, active, onClick }: ProductButtonInt) => {
  return (
    <button
      type="button"
      className={`text-dGray uppercase text-md font-bold my-2 mx-2 border-dGray hover:border-b-[2px] hover:md:border-[2px] text-center md:p-3 hover:md:px-2 md:duration-200 ${
        active ? "border-b-[2px] md:border-[2px]" : "border-b-none"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ProductButtonSlider;
