import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function EditQuiz({quizId, showSplash}){
    const [singleQuiz, setSingleQuiz] = useState({});
    const [invalidInput, setinvalidInput] = useState(false);

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


      if (!isNaN(newQuestion.trim())){
        e.preventDefault();
        setinvalidInput(true);
      } 
      else {
        questions[newQuestion] = newAnswer;
        axiosUpdateItem( {
          "id": (singleQuiz.id),
          "language": (singleQuiz.language),
          "questions": (questions)
          })
      }
    };


    useEffect(() => {
      axiosGetOneItem([quizId]);
    }, []);


  return (
    <div className="updateContainer">
      <form className="selectorForm" onSubmit={handleSubmiter}>
          <h1>Question Creator</h1>
          <div className='updateFormInputContainer'>
            <input placeholder='Please type new question here' id="createQuestion" required>
            </input>
            <input placeholder='Please type answer here' id="createAnswer" required>
            </input>
          </div>
          <button>Submit</button>
      </form>               
    </div> 
  )
}