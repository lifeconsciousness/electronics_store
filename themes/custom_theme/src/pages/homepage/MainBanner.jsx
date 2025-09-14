import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Background blur */}
        {/* <div className="absolute inset-44 backdrop-blur-md bg-white/30 z-0 w-auto" /> */}

        <div className="text-center md:text-left px-2 z-10">

          <h3 className="h1">
            Your reliable electronics distributor since 1998
          </h3>
          <p>Explore the Most Reliable Electronic Components</p>
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
