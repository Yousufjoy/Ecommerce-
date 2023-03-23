import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Slider = () => {
  const arrowStyle =
    "rounded-full bg-gray justify-center items-center shadow-sm hover:cursor-pointer";
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftArrow div */}
      <div className={arrowStyle}>
        <ArrowLeftIcon style={{ fontSize: "50px" }} />
      </div>

      {/* slide div */}
      <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative"></div>
      {/* rightarrwo div */}
      <div className={arrowStyle}>
        <ArrowRightIcon style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;
