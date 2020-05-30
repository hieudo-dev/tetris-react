import React from "react";

const ScoreBoard = ({ score, highscore, toggleHandler, state }) => {
  return (
    <div className="flex sm:flex-col flex-row mt-10 sm:my-auto">
      <div className="flex-1 text-base text-center text-white">SCORE</div>
      <div className="flex-1 text-base text-center text-green-500 font-bold">
        {score}
      </div>
      <div className="flex-1 text-base text-center text-white">HIGHSCORE</div>
      <div className="flex-1 text-base text-center text-green-500 font-bold">
        {highscore}
      </div>
      <div className="flex flex-1">
        <button
          className="text-base text-white shadow rounded border border-opacity-25 bg-green-500 mx-auto sm:mt-6 w-16"
          onClick={toggleHandler}
        >
          {state}
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
