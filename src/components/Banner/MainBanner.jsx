import React from "react";
import BannerImg from "./bannerImg.jpg"
import FilterForm from "./FilterForm";


const MainBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
     
     <img
     src={BannerImg}
     alt="banner-Image"
     />
      
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 flex items-center justify-center">
       <FilterForm/>
      </div>
    </div>
  );
};

export default MainBanner;
