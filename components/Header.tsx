import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-todoVeryDarkBlue">
      <div className="font-extrabold text-lg text-white">My Todo</div>
      <div className="font-medium text-base text-todoLightGrayishBlue">All</div>
    </div>
  );
};

export default Header;
