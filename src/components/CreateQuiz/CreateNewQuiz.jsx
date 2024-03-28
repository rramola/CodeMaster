import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CreateNewQuiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { num, language } = useLocation().state;

  function handleGoBack(){
    navigate('/DetermineNumberOfNewQuestions');
  }

  function handleSubmit(e) {
    const questionsObject = {};
    for (let i = 1; i <= num; i ++) {
      const question = e.target.querySelector(`input[name="Question ${i}"]`).value;
      const answer = e.target.querySelector(`input[name="Answer ${i}"]`).value;
      questionsObject[question] = answer;
    }
    const newObject = {
      language: language,
      questions: questionsObject
    };
    // question input validation. it will validate correctly but once you close the alert it goes to home screen. then throws react router dom error.
    // seems like it is keeping the path of the question creator and it's causing routing issues.
    for (const [question, answer] of Object.entries(newObject.questions)) {
      if (!isNaN(question)) {
        alert('Question can not be a number')
        return
      }
    };
    const axiosPostData = (newObject) => {
      axios.post(`http://localhost:9000/addItem`, newObject)
      .then(response => {
        console.log(response);
      });
    };
    axiosPostData(newObject);
    navigate('/QuizID')
  }

  return (
    <div className='submitFormContainer'>
      <h1>Enter {language} Questions & Answers</h1>
      <form onSubmit={handleSubmit} className='submitQuizForm'>
        {Array.from({ length: num }, (_, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                name={`Question ${index + 1}`}
                placeholder={`Question ${index + 1}:`}
                required />
              <input
                type="text"
                name={`Answer ${index + 1}`}
                placeholder={`Answer ${index + 1}:`}
                required />
            </div>
          );
        })}
        <div className='createButtonContainer'>
          <button type='submit'>Submit</button>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      </form>
    </div>
  );
}
