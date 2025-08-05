// components/CatalogDropdown.tsx
import { LayoutGrid, ChevronRight } from "lucide-react";
import Dropdown from "./Dropdown";
import React from "react";
const categories = [
    "Laptops & Computers",
    "Smartphones & Electronics",
    "Home Appliances",
    "Gaming",
    "Fashion & Accessories"
];
export default function CatalogDropdown() {
    return /*#__PURE__*/ React.createElement(Dropdown, {
        button: /*#__PURE__*/ React.createElement("button", {
            className: "flex items-center gap-2 border-white border-2 rounded-xl px-4 py-2 text-white text-xl hover:bg-white/10"
        }, /*#__PURE__*/ React.createElement(LayoutGrid, null), "CATALOG"),
        width: "size-max"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "space-y-2"
    }, categories.map((cat, idx)=>/*#__PURE__*/ React.createElement("li", {
            key: idx,
            className: "flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-xl"
        }, cat, /*#__PURE__*/ React.createElement(ChevronRight, {
            className: "w-5 h-5 text-gray-400"
        })))));
}
