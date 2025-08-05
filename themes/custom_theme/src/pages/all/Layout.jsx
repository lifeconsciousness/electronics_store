import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";
import { useEffect } from "react";
import Footer from "./Footer";
import { LayoutGrid } from "lucide-react";
import Logo from "./Logo";
import Header from "./Header";

export default function Layout() {
  const path = window.location.pathname;

  useEffect(() => {
    console.log("Current path:", path);
  }, []);

  return (
    <>
      <LoadingBar />

      <Header />

      {/* <div className="header">
        <div className="page-width flex justify-between">
          <Area
            id="header"
            noOuter
            coreComponents={[
              {
                component: { default: Area },

                props: {
                  id: "icon-wrapper",

                  className: "icon-wrapper flex justify-between space-x-1",
                },

                sortOrder: 20,
              },
            ]}
          />
        </div>
      </div> */}

      {path === "/" ? (
        <main className="content-custom">
          <Area id="content-custom" className="" noOuter />
        </main>
      ) : (
        <main className="content">
          <Area id="content" className="" noOuter />
        </main>
      )}

      {/* <main className="content-custom">
        <Area id="content-custom" className="" noOuter />
      </main> */}

      <Footer />
    </>
  );
}

export const layout = {
  areaId: "body",
  sortOrder: 0,
};
