import {React, useEffect, useState} from 'react';
import axios from 'axios';

export default function DeleteQuiz({quizId}){
  const [singleQuiz, setSingleQuiz] = useState({});
  const axiosGetOneItem = async(id) => {
    await axios.get(`http://localhost:9000/getOne/${id}`)
    .then((result) => {
    setSingleQuiz(result.data)
    });
  }
  const axiosDeleteData = async(id) => {
    await axios.delete(`http://localhost:9000/deleteItem${id}`);
  }
  function handleSubmitter(e){
    e.preventDefault()
    console.log(quizId)
    axiosDeleteData()
  };

  useEffect(() => {
    axiosGetOneItem([quizId]);
  }, []);

  return(
    <div>
      <form onSubmit={handleSubmitter}>
        <h1>Delete Quiz</h1>
        <button>Submit</button>
      </form>
    </div>
  )
}

