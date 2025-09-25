import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="text-orange-600 text-4xl">💡</div>
      <div className="text-3xl font-bold">
        <span className="text-orange-600"></span>
        <span className="text-gray-300">BALT DRIVE TECHNOLOGY</span>
      </div>
    </a>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
