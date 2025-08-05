import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout() {
    const path = window.location.pathname;
    useEffect(()=>{
        console.log("Current path:", path);
    }, []);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(LoadingBar, null), /*#__PURE__*/ React.createElement(Header, null), path === "/" ? /*#__PURE__*/ React.createElement("main", {
        className: "content-custom"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "content-custom",
        className: "",
        noOuter: true
    })) : /*#__PURE__*/ React.createElement("main", {
        className: "content"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "content",
        className: "",
        noOuter: true
    })), /*#__PURE__*/ React.createElement(Footer, null));
}
export const layout = {
    areaId: "body",
    sortOrder: 0
};
