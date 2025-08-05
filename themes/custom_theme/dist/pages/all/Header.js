import React from "react";
import { User, ShoppingCart, Search, ChevronDown, Globe } from "lucide-react";
import Dropdown from "./Dropdown";
import CatalogDropdown from "./CatalogDropdown";
export default function Header() {
    return /*#__PURE__*/ React.createElement("header", {
        className: "w-full font-sans text-2xl"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "bg-[#2f2f2f] text-white px-10 py-6 flex items-center justify-between xl:px-56"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-3"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-orange-600 text-4xl"
    }, "💡"), /*#__PURE__*/ React.createElement("div", {
        className: "text-3xl font-bold"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-orange-600"
    }, "ele"), /*#__PURE__*/ React.createElement("span", {
        className: "text-gray-300"
    }, "ctronics"))), /*#__PURE__*/ React.createElement("div", {
        className: "flex-1 mx-10 w-full max-w-5xl flex bg-white rounded-r text-xl"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "relative w-full flex items-center justify-center"
    }, /*#__PURE__*/ React.createElement(Search, {
        className: "left-4 text-gray-500 ml-4",
        size: 20
    }), /*#__PURE__*/ React.createElement("input", {
        type: "text",
        placeholder: "Find",
        className: "w-full pl-14 pr-4 py-3 rounded-l bg-white text-black text-xl outline-none"
    })), /*#__PURE__*/ React.createElement("button", {
        className: "bg-orange-600 hover:bg-orange-700 text-white px-6 text-xl rounded-r"
    }, "SEARCH")), /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-10 text-xl"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "/account"
    }, /*#__PURE__*/ React.createElement("button", {
        className: "flex flex-col items-center"
    }, /*#__PURE__*/ React.createElement(User, {
        className: "w-6 h-6 mb-1"
    }), /*#__PURE__*/ React.createElement("span", null, "Account"))), /*#__PURE__*/ React.createElement("a", {
        href: "/cart"
    }, /*#__PURE__*/ React.createElement("button", {
        className: "flex flex-col items-center"
    }, /*#__PURE__*/ React.createElement(ShoppingCart, {
        className: "w-6 h-6 mb-1"
    }), /*#__PURE__*/ React.createElement("span", null, "Basket"))))), /*#__PURE__*/ React.createElement("div", {
        className: "bg-orange-600 text-white text-xl font-semibold px-10 py-4 flex items-center justify-between xl:px-56"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex gap-10 items-center"
    }, /*#__PURE__*/ React.createElement(CatalogDropdown, null), /*#__PURE__*/ React.createElement("button", null, "STOCK CLEARANCE"), /*#__PURE__*/ React.createElement("button", {
        className: "flex items-center gap-1"
    }, "MANUFACTURERS", /*#__PURE__*/ React.createElement(ChevronDown, {
        className: "w-5 h-5"
    })), /*#__PURE__*/ React.createElement("button", null, "SPECIAL-DEALS")), /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-12"
    }, /*#__PURE__*/ React.createElement("span", null, "EUR"), /*#__PURE__*/ React.createElement(Dropdown, {
        button: /*#__PURE__*/ React.createElement("button", {
            className: "flex items-center gap-2 border-2 rounded-xl px-4 py-2 hover:bg-white/10"
        }, /*#__PURE__*/ React.createElement(Globe, {
            className: "mr-2"
        }))
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "space-y-2"
    }, /*#__PURE__*/ React.createElement("li", {
        className: "flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"
    }, "NL"), /*#__PURE__*/ React.createElement("li", {
        className: "flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"
    }, "EN"))))));
}

