import React from "react";

const Questionaire = ({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  answered,
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

          const selected = answered === answer ? "answered" : "";

          return (
            <button
              key={i}
              className={`answer ${bgColor} ${selected}`}
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => handleAnswer(answer)}
              disabled={showAnswers}
            />
          );
        })}
        <button
          onClick={handleNextQuestion}
          className="btn next"
          disabled={!showAnswers}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Questionaire;
