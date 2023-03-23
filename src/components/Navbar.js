import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  const style = "text-[20px] cursor-pointer ml-[25px]";

  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center ">
        {/* left div */}

        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">EN</div>
          <div className="searchInput flex border-[2px] border-solid border-lightgray rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="input outline-none" />
            <SearchIcon className="text-base" />
          </div>
        </div>
        {/* Logo*/}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">Summer Kings!</div>
        </div>

        {/* Right Div */}
        <div className="right flex flex-1 items-center justify-end">
          <div className={style}> Register</div>
          <div className={style}>Sign in</div>
          <div className={style}>
            {" "}
            <ShoppingCartOutlinedIcon className="w-8 h-8" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
