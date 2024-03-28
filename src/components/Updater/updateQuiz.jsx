import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function EditQuiz({quizId, showSplash}){
    const [singleQuiz, setSingleQuiz] = useState({});
    const navigate = useNavigate();

    const axiosGetOneItem = async(id) => {
      await axios.get(`http://localhost:9000/getOne/${id}`)
      .then((result) => {
      setSingleQuiz(result.data)
      });
    }

    let questions = singleQuiz.questions;

    const axiosUpdateItem = async(updateObject) => {
        await axios.put(`http://localhost:9000/updateOne`, updateObject)
      };
    
    function handleSubmiter(e){
      e.preventDefault();
      const newQuestion = e.target.querySelector('#createQuestion').value;
      const newAnswer =  e.target.querySelector('#createAnswer').value;
      if (!isNaN(newQuestion.trim())) {
      }
      else {
        questions[newQuestion] = newAnswer;
        axiosUpdateItem( {
          "id": (singleQuiz.id),
          "language": (singleQuiz.language),
          "questions": (questions)
          })
        navigate('/QuizID')
      };
      }
    
    function handleGoBack(){
      navigate('/QuizID');
    }


    useEffect(() => {
      axiosGetOneItem([quizId]);
    }, [quizId]);
// S
// s
  return (
    <div className="updateContainer">
      <form className="selectorForm" onSubmit={handleSubmiter}>
          <h1>Question Creator</h1>
          <textarea placeholder='Please type new question here' id="createQuestion" required>
          </textarea>
          <textarea placeholder='Please type answer here' id="createAnswer" required>
          </textarea>
          <button>Submit</button>
          <button onClick={handleGoBack}>Go Back</button>
      </form>               
    </div> 
  )
}
