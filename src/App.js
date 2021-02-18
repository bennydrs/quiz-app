import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Questionaire from "./components/Questionaire";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [answered, setAnswered] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));

        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    setAnswered(answer);
    if (!showAnswers) {
      // check answer
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleStartAgain = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      {questions.length > 0 ? (
        <div className="container">
          {currentIndex >= questions.length ? (
            <div className="score_board">
              <h2>
                Your score is {score}/{questions.length}
              </h2>
              <button className="btn start_again" onClick={handleStartAgain}>
                Start Again
              </button>
            </div>
          ) : (
            <Questionaire
              data={questions[currentIndex]}
              showAnswers={showAnswers}
              handleAnswer={handleAnswer}
              answered={answered}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
