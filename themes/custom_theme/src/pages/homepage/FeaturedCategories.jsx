import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-28">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat border-black">
          <img src="/relay.jpg" alt="Shop men" />
          <a
            className="absolute underline top-[20px] left-[20px] px-2"
            href="#">
            RELAYS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="/astronomical-clock.jpg" alt="Shop women" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            ASTRONOMICAL AND DIGITAL CLOCKS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="/energy-meter.jpg" alt="Shop kids" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            ELECTRIC ENERGY CONSUMPTION METERS
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content-custom",
  sortOrder: 5,
};
