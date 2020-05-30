import React from "react";

const ScoreBoard = ({ score, highscore }) => {
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
    </div>
  );
};

export default ScoreBoard;
