import React from "react";
function FeaturedCategories() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "page-width"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "mb-2 mt-28"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-center"
    }, "OUR CATEGORIES")), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-2"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "relative col-span-1 row-span-2 men-cat border-black"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/relay.jpg",
        alt: "Shop men"
    }), /*#__PURE__*/ React.createElement("a", {
        className: "absolute underline top-[20px] left-[20px] px-2",
        href: "#"
    }, "RELAYS")), /*#__PURE__*/ React.createElement("div", {
        className: "relative col-span-1 row-span-1 women-cat"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/astronomical-clock.jpg",
        alt: "Shop women"
    }), /*#__PURE__*/ React.createElement("a", {
        className: "absolute underline top-[20px] left-[20px] bg-white px-2",
        href: "#"
    }, "ASTRONOMICAL AND DIGITAL CLOCKS")), /*#__PURE__*/ React.createElement("div", {
        className: "relative col-span-1 row-span-1 kid-cat"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/energy-meter.jpg",
        alt: "Shop kids"
    }), /*#__PURE__*/ React.createElement("a", {
        className: "absolute underline top-[20px] left-[20px] bg-white px-2",
        href: "#"
    }, "ELECTRIC ENERGY CONSUMPTION METERS"))));
}
export default FeaturedCategories;
export const layout = {
    areaId: "content-custom",
    sortOrder: 5
};
