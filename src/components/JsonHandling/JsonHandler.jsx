import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JsonHandler({quizId, handleGoBack}) {
    const [singleQuiz, setSingleQuiz] = useState({});
    let questions = [];
    let answers = [];
    const navigate = useNavigate();

    const axiosGetOneItem = async(id) => {
      await axios.get(`http://localhost:9000/getOne/${id}`)
      .then((result) => {
      setSingleQuiz(result.data)
      });
    }

    function returnHome(){
      handleGoBack();
    }

    function handleDeleteQuiz(){
      navigate('/deleteQuiz')
    }

    function handleUpdateQuiz(){
      navigate('/UpdateQuiz')
    }

    function handleTakeQuiz() {
      singleQuiz != {} ? navigate('/TakeQuiz', {state: singleQuiz}): alert("There was a problem!");
    }

    useEffect(() => {
      axiosGetOneItem([quizId]);
    }, [quizId]);

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
          <button onClick={handleTakeQuiz} >Take Quiz</button>
          <button onClick={handleUpdateQuiz}>Update Quiz</button>
          <button onClick={handleDeleteQuiz}>Delete Quiz</button>
      </div>
    );
};