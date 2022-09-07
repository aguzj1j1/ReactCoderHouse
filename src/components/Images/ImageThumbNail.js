import React from "react";

export function ImageThumbNail({image, isActive,  setActiveIndex, index}) {
  return (
    <div
      onClick={() => setActiveIndex(index)}
      className={`transition duration-500 ease-in-out mx-4 rounded p-2 ${
        isActive ? "bg-green-50" : ""
      }`}
      style={{ minWidth: "4rem" }}
    >
      <img
        className={`w-16 h-12 shadow rounded object-cover ${
          isActive ? "border border-green-50" : "border "
        }`}
        src={image}
      />
      <p
        className={`text-xs mt-1 ${
          isActive ? "text-purple-500 font-medium" : "text-gray-500"
        }`}
      >
      </p>
    </div>
  );
}
