import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DeleteQuiz({quizId}){
  console.log(quizId)
  const navigate = useNavigate();
  const axiosDeleteData = async(id) => {
    await axios.delete(`http://localhost:9000/deleteItem/${id}`);
  }

  function handleSubmitter() {
    axiosDeleteData([quizId]);
    navigate('/JsonHandler');
  }

  function handleReturn(){
    navigate('/JsonHandler');
  }

  return(
    <div className='deleteQuizContainer'>
      <h1>Delete Quiz</h1>
      <form onSubmit={handleSubmitter}>
        <button>Delete</button>
        <button type = 'button' onClick = {handleReturn}>Go Back</button>
      </form>
    </div>
  )
}
