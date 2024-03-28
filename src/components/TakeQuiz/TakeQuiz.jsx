import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

const TakeQuiz = ({ handleGoBack }) => {
  const quizData = useLocation();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [finalGrade, setFinalGrade] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (quizData.state.questions) {
      const allQuestions = Object.entries(quizData.state.questions);
      const selectedQuestions = [];
      while (selectedQuestions.length < 5) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        selectedQuestions.push(allQuestions[randomIndex]);
        allQuestions.splice(randomIndex, 1);
      }
      setQuestions(selectedQuestions);
    }
  }, [quizData.state.questions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    gradeQuiz(e);
  };

  const gradeQuiz = (e) => {
    let numberCorrect = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] && answers[i].toLowerCase() === questions[i][1].toLowerCase()) {
        numberCorrect++;
      }
    }
    setFinalGrade(Math.round((100 / questions.length) * numberCorrect));
    setWasSubmitted(true);
  };

  const handleAnswerChange = (e, index) => {
    setAnswers({ ...answers, [index]: e.target.value });
  };

  const handleGoHome = () => {
    navigate('/QuizID');
  };

  return (
    <div className ='takeTheQuiz'>
      {!wasSubmitted ? (
        <form onSubmit={handleSubmit}>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <p>{question[0]}</p>
                <input type="text" name="" id="" value={answers[index] || ''} onChange={(e) => handleAnswerChange(e, index)} required/>
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
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default TakeQuiz;
