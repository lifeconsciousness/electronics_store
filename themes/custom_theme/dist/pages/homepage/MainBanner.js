import React from "react";
import "./MainBanner.scss";
function MainBanner() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "main-banner-home flex items-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "page-width grid grid-cols-1 md:grid-cols-2 gap-2"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-center md:text-left px-2 z-10"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "h1"
    }, "Your reliable electronics distributor since 1998"), /*#__PURE__*/ React.createElement("p", null, "Explore the Most Reliable Electronic Components"), /*#__PURE__*/ React.createElement("p", null), /*#__PURE__*/ React.createElement("a", {
        className: "button button-primary",
        href: ""
    }, "SHOW NOW")), /*#__PURE__*/ React.createElement("div", null)));
}
export default MainBanner;
export const layout = {
    areaId: "content-custom",
    sortOrder: 1
};
