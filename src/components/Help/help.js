import React from "react";

const Help = () => {
  return (
    <div className="hidden sm:block items-center justify-center text-gray-100 sm:my-10">
      <div className="my-2">
        <div className="font-extrabold">Space </div>
        <div className="description"> Start/Pause/Restart the game</div>
      </div>
      <div className="my-2">
        <div className="font-extrabold">Up Arrow </div>
        <div className="description"> Rotate CounterClockwise</div>
      </div>
      <div className="my-2">
        <div className="font-extrabold">Left Arrow </div>
        <div className="description"> Move Left</div>
      </div>
      <div className="my-2">
        <div className="font-extrabold">Right Arrow </div>
        <div className="description"> Move Right</div>
      </div>
    </div>
  );
};

export default Help;
