import React from "react";
import "./MainBanner.scss";
function MainBanner() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "main-banner-home flex items-center relative"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "absolute inset-0 backdrop-blur-md md:bg-white/30 z-0 md:hidden"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "page-width grid grid-cols-1 md:grid-cols-2 gap-2 relative z-10"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-center md:text-left px-4 py-8 md:py-2"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "h1 font-black  drop-shadow-2xl md:text-current md:drop-shadow-none text-shadow-lg mb-4"
    }, "Your reliable electronics distributor since 1998"), /*#__PURE__*/ React.createElement("p", {
        className: "md:text-current text-2xl font-extrabold drop-shadow-xl md:drop-shadow-none mb-6"
    }, "Explore the Most Reliable Electronic Components"), /*#__PURE__*/ React.createElement("p", null), /*#__PURE__*/ React.createElement("a", {
        className: "button button-primary font-bold text-xl px-8 py-4",
        href: "/relays"
    }, "SHOW NOW")), /*#__PURE__*/ React.createElement("div", null)));
}
export default MainBanner;
export const layout = {
    areaId: "content-custom",
    sortOrder: 1
};

