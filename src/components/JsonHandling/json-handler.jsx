import React, {useState, useEffect} from "react";
import axios from "axios"

export default function JsonHandler({quizId}) {
    const [singleQuiz, setSingleQuiz] = useState({});
    let questions = []
    const axiosGetOneItem = async(id) => {
      await axios.get(`http://localhost:9000/getOne/${id}`)
      .then((result) => {
      setSingleQuiz(result.data)
      });
    }

    useEffect(() => {
      axiosGetOneItem([quizId]);
    }, []);

    let myCurrentObject = singleQuiz.questions;

    for (const item in myCurrentObject) {
      questions.push(item)
    }

    return (
      <div className="questionsContainer">
        <h1>CurrentQuiz Questions:</h1>
          {questions.map(each => <p>Question: {each}</p>)}
      </div>
    )

}