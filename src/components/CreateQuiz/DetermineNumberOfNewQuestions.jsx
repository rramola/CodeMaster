import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DetermineNumberofQuestions() {
  const [data, setData] = useState([]);
  const [showExistingQuizDiv, setShowExistingQuizDiv] = useState(false);
  const navigate = useNavigate();

  const axiosGetAllData = async () => {
    await axios.get('http://localhost:9000/api')
      .then(res => {
        const returnedApiData = res.data;
        setData(returnedApiData);
      })
  }

  useEffect(() => {
    axiosGetAllData();
  }, []);

  const nameList = data.map(item => item.language.toLowerCase());

  function handleSubmit(e) {
    e.preventDefault();
    let num = Number(document.querySelector('#number').value);
    let language = document.querySelector('#language').value;
    language = language.charAt(0).toUpperCase() + language.slice(1);

    if (nameList.includes(language.toLowerCase()) || !isNaN(language)) {
      setShowExistingQuizDiv(true);
      return;
    }
    navigate('/CreateNewQuiz', { state: { num, language } })
  }

  function handleGoBack(){
    navigate('/QuizID')
  }

  function handleDivClick() {
    setShowExistingQuizDiv(false);
  }

  return (
    <div className='newTestFormContainer'>
      <h1>Create A New Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id='language'
            type='text'
            placeholder='Enter language name:'
            required />

          <input
            id='number'
            type='number'
            min="1"
            max="10"
            placeholder='Number of Questions:'
            required />
            <div className='determineQuestionsButtonContainer'>
            <   button type='submit'>Submit</button>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
         
        </div>
      </form>
      {showExistingQuizDiv && (
        <div id='hiddenDiv' className='hiddenDiv' onClick={handleDivClick}>
          <p>
            <p>Please make sure you're using a valid coding language for the name!</p>
            <p>Hint: Are you trying to create a quiz we already have? </p>
            <p className = 'closeMessage'>*Click here to close this message*</p>
          </p>
        </div>
      )}
    </div>
  );
}
