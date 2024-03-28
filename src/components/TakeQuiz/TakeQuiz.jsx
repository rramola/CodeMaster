import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

const TakeQuiz = ({ handleGoBack }) => {
  const quizData = useLocation();
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [finalGrade, setFinalGrade] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    gradeQuiz(e);
  };

  const gradeQuiz = (e) => {
    const numberOfQuestions = e.target.elements.length - 1;
    let numberCorrect = 0;
    for (let i = 0; i < numberOfQuestions; i++) {
      if (e.target.elements[i].value.toLowerCase() === e.target.elements[i].dataset.answer.toLowerCase()) {
        numberCorrect++;
      }
    }
    setFinalGrade(Math.round((100 / numberOfQuestions) * numberCorrect));
    setWasSubmitted(true);
  };

  const handleGoHome = () => {
    navigate('/QuizID');
  };

  return (
    <div>
      {!wasSubmitted ? (
        <form onSubmit={handleSubmit}>
          <ul>
            {Object.keys(quizData.state.questions).map((question) => (
              <li key={question}>
                <p>{question}</p>
                <input type="text" name="" id="" data-answer={quizData.state.questions[question]} />
              </li>
            ))}
          </ul>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <h1>Final Grade: {finalGrade}%</h1>
        </div>
      )}
      <button onClick={handleGoBack}>Go Home</button>
    </div>
  );
};

export default TakeQuiz;
