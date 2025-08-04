import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left px-2 ">
          <h3 className="h1 ">Your reliable electronics distributor & online store</h3>
          <p>Discover the Latest Trends and Elevate Your Wardrobe Today</p>
          <p></p>
          <a className="button button-primary" href="">
            SHOW NOW
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content-custom",
  sortOrder: 1,
};
