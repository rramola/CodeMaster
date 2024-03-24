import {React, useEffect, useState} from 'react';
import axios from 'axios';

export default function DeleteQuiz({quizId}){
  const axiosDeleteData = async(id) => {
    await axios.delete(`http://localhost:9000/deleteItem/${id}`);
  }

  function handleSubmitter() {
    axiosDeleteData([quizId])
  }

  return(
    <div>
      <form onSubmit={handleSubmitter}>
        <h1>Delete Quiz</h1>
        <button>Submit</button>
      </form>
    </div>
  )
}

