import React from "react";

const ScoreBoard = ({ score, questions }) => {
  const handleStartAgain = () => {
    window.location.reload();
  };
  return (
    <div className="score_board">
      <h2>
        Your score is {score}/{questions}
      </h2>
      <button className="btn start_again" onClick={handleStartAgain}>
        Start Again
      </button>
    </div>
  );
};

export default ScoreBoard;
