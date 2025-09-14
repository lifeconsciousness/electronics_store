import React from "react";
const highlights = [
    {
        title: "20 years of expertise",
        description: "Providing quality electronics solutions since 2005.",
        icon: "💡"
    },
    {
        title: "Attractive prices without middlemen",
        description: "We work directly with manufacturers to offer the best deals.",
        icon: "🤝"
    },
    {
        title: "Payment on invoice for businesses & authorities",
        description: "Flexible payment options tailored to your organization.",
        icon: "📃"
    },
    {
        title: "Fast delivery from our own Warehouse",
        description: "Efficient shipping straight from our facility.",
        icon: "🚚"
    }
];
const Highlights = ()=>{
    return /*#__PURE__*/ React.createElement("section", {
        className: "mx-8 px-4 py-10 xl:mx-56"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-5xl mx-auto"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-3xl font-bold text-center text-gray-800 mb-10"
    }, "Why Choose Us?"), /*#__PURE__*/ React.createElement("ul", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-10"
    }, highlights.map((item, index)=>/*#__PURE__*/ React.createElement("li", {
            key: index,
            className: "flex items-start gap-4"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "text-4xl mt-1"
        }, item.icon), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h3", {
            className: "text-xl font-semibold text-gray-800"
        }, item.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-gray-600"
        }, item.description)))))));
};
export default Highlights;
export const layout = {
    areaId: 'content-custom',
    sortOrder: 10
};
