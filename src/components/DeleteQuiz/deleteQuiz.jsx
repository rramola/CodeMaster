import React from 'react';
import axios from 'axios';

export default function DeleteQuiz({quizId, handleGoBack}){
  const axiosDeleteData = async(id) => {
    await axios.delete(`http://localhost:9000/deleteItem/${id}`);
  }

  function handleSubmitter() {
    axiosDeleteData([quizId])
  }

  function handleReturn(){
    handleGoBack();
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

