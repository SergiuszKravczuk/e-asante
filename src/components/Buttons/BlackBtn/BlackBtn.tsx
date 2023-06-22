interface BlackBtnInt {
  text: string;
  icon?: React.ReactNode;
}

const BlackBtn = ({ text, icon }: BlackBtnInt) => {
  if (icon) {
    return (
      <div className="bg-black text-white uppercase text-sm py-2 px-4 cursor-pointer hover:bg-gray-700 duration-200 ease-linear font-semibold">
        <div className="flex justify-between items-center">
          <div>{text}</div>
          <div className="ml-2">{icon}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black text-white uppercase text-sm py-2 px-4 cursor-pointer hover:bg-gray-700 duration-200 ease-linear font-semibold">
      {text}
    </div>
  );
};

export default BlackBtn;
