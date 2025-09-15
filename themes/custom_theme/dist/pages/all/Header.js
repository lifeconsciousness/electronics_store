import React from "react";
import { ChevronDown, Globe } from "lucide-react";
import Dropdown from "./Dropdown";
import CatalogDropdown from "./CatalogDropdown";
import Logo from "./Logo";
import Area from "@evershop/evershop/components/common";
export default function Header() {
    return /*#__PURE__*/ React.createElement("header", {
        className: "w-full font-sans text-2xl"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "bg-[#2f2f2f] text-white px-10 py-6 flex items-center justify-between xl:px-56"
    }, /*#__PURE__*/ React.createElement(Logo, null), /*#__PURE__*/ React.createElement(Area, {
        id: "header-new",
        noOuter: true,
        coreComponents: [
            {
                component: {
                    default: Area
                },
                props: {
                    id: "icon-wrapper",
                    className: "icon-wrapper flex justify-between space-x-4 mr-3 "
                },
                sortOrder: 20
            }
        ]
    })), /*#__PURE__*/ React.createElement("div", {
        className: "bg-blue-600 bg-orange-600 text-white text-xl font-semibold px-10 py-4 flex items-center justify-between xl:px-56"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center w-full md:w-auto"
    }, /*#__PURE__*/ React.createElement(CatalogDropdown, null), /*#__PURE__*/ React.createElement("div", {
        className: "hidden md:flex gap-4 md:gap-10 flex-wrap"
    }, /*#__PURE__*/ React.createElement("button", {
        className: "flex items-center gap-1"
    }, "MANUFACTURERS", /*#__PURE__*/ React.createElement(ChevronDown, {
        className: "w-5 h-5"
    })), /*#__PURE__*/ React.createElement("button", null, "BESTSELLERS"), /*#__PURE__*/ React.createElement("button", null, "SPECIAL-DEALS"))), /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-12"
    }, /*#__PURE__*/ React.createElement(Dropdown, {
        button: /*#__PURE__*/ React.createElement("button", {
            className: "flex items-center gap-2 rounded-xl pl-4 pr-3 py-2 hover:bg-white/10"
        }, /*#__PURE__*/ React.createElement(Globe, {
            className: ""
        }))
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "space-y-2"
    }, /*#__PURE__*/ React.createElement("li", {
        className: "flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"
    }, "NL"), /*#__PURE__*/ React.createElement("li", {
        className: "flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"
    }, "EN"))))));
}

