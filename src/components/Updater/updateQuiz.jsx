import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function EditQuiz({quizId}){
    const [singleQuiz, setSingleQuiz] = useState({});
    const [invalidQuesion, setinvalidQuestion] = useState(false);
    const questions = singleQuiz.questions || {};

    const axiosGetOneItem = async(id) => {
      await axios.get(`http://localhost:9000/getOne/${id}`)
      .then((result) => {
      setSingleQuiz(result.data)
      });
    }
    const axiosUpdateItem = async(updateObject) => {
      await axios.put(`http://localhost:9000/updateOne`, updateObject)
    };

    function handleDivClick() {
      setinvalidQuestion(false);
  };

    function handleSubmiter(e){
      e.preventDefault();
      const newQuestion = e.target.querySelector('#createQuestion').value;
      const newAnswer =  e.target.querySelector('#createAnswer').value;

      if (!isNaN(newQuestion)) {
        setinvalidQuestion(true);
        return;
      }

      questions[newQuestion] = newAnswer;

      axiosUpdateItem( {
        "id": (singleQuiz.id),
        "language": (singleQuiz.language),
        "questions": (questions)
        })
    };

    useEffect(() => {
      axiosGetOneItem([quizId]);
    }, [quizId]);


    return (
      <div className="updateContainer">
        <form className="selectorForm" onSubmit={handleSubmiter}>
          <h1>Question Creator</h1>
          <div className="textAreaContainer">
            <textarea placeholder='Please type new question here' id="createQuestion" required></textarea>
            <textarea placeholder='Please type answer here' id="createAnswer" required></textarea>
          </div>
          <button>Submit</button>
        </form>
        {invalidQuesion &&
          <div className='hiddenDiv' onClick={handleDivClick}>
            <p>Please enter a valid question! Question cannot be solely a number.</p>
          </div>
        }
      </div>
    );
    
}

