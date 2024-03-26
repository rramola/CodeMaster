import React from 'react';
import axios from 'axios';

export default function DeleteQuiz({quizId}){
  const axiosDeleteData = async(id) => {
    await axios.delete(`http://localhost:9000/deleteItem/${id}`);
  }

  function handleSubmitter() {
    axiosDeleteData([quizId])
  }

  function handleReturn(){
    return(
      <></>
    )
  }

  return(
    <div className='deleteQuizContainer'>
      <h1>Delete Quiz</h1>
      <form onSubmit={handleSubmitter}>
        <button>Delete</button>
        <form onSubmit = {handleReturn}>
          <button>Go Back</button>
        </form>
      </form>
    </div>
  )
}

