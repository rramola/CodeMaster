import React, {useState, useEffect} from "react";
import axios from "axios";

export default function JsonHandler({quizId}) {
    const [singleQuiz, setSingleQuiz] = useState({});
    let questions = [];
    let answers = [];
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
        <h1>{singleQuiz.language} Questions</h1>
          <div className = 'centeringQuestions'>
            {questions.map((each, index) => <p>{index + 1}. {each}</p>)}
          </div>
          
      </div>
    )

}