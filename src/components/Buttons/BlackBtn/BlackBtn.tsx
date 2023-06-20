interface BlackBtnInt {
  text: string;
}

const BlackBtn = ({ text }: BlackBtnInt) => {
  return (
    <div className="bg-black text-white uppercase text-sm py-2 px-4 cursor-pointer hover:bg-gray-700 duration-200 ease-linear font-semibold">
      {text}
    </div>
  );
};

export default BlackBtn;
