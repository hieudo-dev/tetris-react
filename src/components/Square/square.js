import React from "react";

const Square = ({ className, color }) => {
  return (
    <div
      className={`${className +
        (color !== "none" ? " bg-" + color + "-600" : "")}`}
    />
  );
};

export default Square;
