import React from "react";

const Questionaire = ({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <>
      <div className="question">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answers">
        {answers.map((answer, i) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "correct"
              : "incorrect"
            : "white";

          return (
            <button
              key={i}
              className={`answer ${bgColor}`}
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => handleAnswer(answer)}
              disabled={showAnswers}
            />
          );
        })}
        <button
          onClick={handleNextQuestion}
          className="next"
          disabled={!showAnswers}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Questionaire;
