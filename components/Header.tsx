import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-4 px-8 items-center bg-todoVeryDarkBlue">
      <div className="font-extrabold text-2xl text-white">My Todo</div>
      <div className="font-medium text-base text-todoLightGrayishBlue">All</div>
    </div>
  );
};

export default Header;
