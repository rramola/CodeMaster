import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';

export default function EditQuiz({quizId}){
    const [singleQuiz, setSingleQuiz] = useState({});
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
      const newQuestion = e.target.querySelector('#createQuestion').value;
      const newAnswer =  e.target.querySelector('#createAnswer').value;
      document.querySelector('.modifierContainer');
      questions[newQuestion] = newAnswer;
      axiosUpdateItem( {
        "id": (singleQuiz.id),
        "language": (singleQuiz.language),
        "questions": (questions)
        })
      e.preventDefault();
    };

    useEffect(() => {
      axiosGetOneItem([quizId]);
    }, []);

  return (
    <div className="modifierContainer">
      <form className="selectorForm" onSubmit={handleSubmiter}>
          <h1>Question creator</h1>
          <textarea placeholder='Please type new question here' id="createQuestion">
          </textarea>
          <textarea placeholder='Please type answer here' id="createAnswer">
          </textarea>
          <button>Submit</button>
      </form>               
    </div> 
  )
}

