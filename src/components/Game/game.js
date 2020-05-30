import React, { useState } from "react";
import Board from "../Board/board";
import ScoreBoard from "../ScoreBoard/score_board";
import Help from "../Help/help";
import { useDrag } from "react-use-gesture";

const Game = () => {
  const [ended, setEnded] = useState(true);
  const [toggling, setToggling] = useState(false);
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [swipeX, setSwipeX] = useState(0);
  const [tap, setTap] = useState(0);

  const bind = useDrag(
    ({ swipe: [swipeX], tap }) => {
      // position will either be -1, 0 or 1
      if (swipeX) setSwipeX(swipeX);
      if (tap) setTap(tap ? 1 : 0);
    },
    { swipeDistance: 1 }
  );

  const addScore = x => {
    setScore(score + x);
  };

  const newGame = () => {
    setEnded(false);
    setScore(0);
  };

  const endGame = () => {
    const curScore = score;
    setEnded(true);
    setHighscore(Math.max(highscore, curScore));
  };

  const toggleEnd = () => {
    setToggling(false);
    setSwipeX(0);
    setTap(0);
  };

  return (
    <div className="grid h-screen" {...bind()}>
      <div className="m-6 sm:m-10 grid grid-cols-1 sm:grid-cols-4 my-auto bg-blue-900">
        <Help />

        <Board
          toggling={toggling}
          toggleEnd={() => toggleEnd()}
          ended={ended}
          swipeX={swipeX}
          tap={tap}
          newGameHandler={() => newGame()}
          endGameHandler={() => endGame()}
          clearedLines={lines => addScore(lines)}
        />
        <ScoreBoard
          state={ended ? "Start" : "Play"}
          score={score}
          highscore={highscore}
          toggleHandler={() => {
            setToggling(true);
          }}
        />
      </div>
    </div>
  );
};

export default Game;
