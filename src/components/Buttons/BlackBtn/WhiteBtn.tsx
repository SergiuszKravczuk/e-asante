interface WhiteBtnInt {
  text: string;
}

const WhiteBtn = ({ text }: WhiteBtnInt) => {
  return (
    <button
      type="submit"
      className="text-black bg-white mb-4 px-4 py-2 font-black uppercase w-full hover:bg-gray-800 hover:text-white duration-200 ease-linear"
    >
      {text}
    </button>
  );
};

export default WhiteBtn;
