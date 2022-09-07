import React from "react";

export function CarouselSlide({ image }) {
  return (
    <img
      className="w-64 object-cover p-16"
      src={image}
      style={{
        height: "30rem",
        marginRight: "4%",
        minWidth: "100%"
      }}
    />
  );
}
