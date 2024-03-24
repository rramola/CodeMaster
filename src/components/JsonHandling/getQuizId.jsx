import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function QuizID({handleButtonClick}){
    const [data, setData] = useState([]);
    const [quizId, setQuizId] = useState(null);
    const [showJsonHandler, setShowJson] = useState(false);
    
    function handleSubmit(e){
        const selectedQuiz = e.target.querySelector('#categorySelector').value;
        handleButtonClick(selectedQuiz);
        document.querySelector('.appContainer').classList.add('hidden')
        e.preventDefault();
    }
    
    const axiosGetAllData = async() => {
        await axios.get('http://localhost:9000/api')
        .then(res => {
          const returnedApiData = res.data;
          setData(returnedApiData);
        })
      }

      useEffect(() => {
        axiosGetAllData();
      }, []);

    return (
        <div className="appContainer">
            <form className="selectorForm" onSubmit = {handleSubmit}>
                <select id="categorySelector" className="quizDropdown">
                    {data.map(item => <option key={item} value={item.id}>{item.language}</option>)}
                </select>
                    {/* <button value="1">View Quizzes</button>
                    <button value="2">Create Quiz</button>
                    <button value="3">Modify Quiz</button>
                    <button value="4">Delete Quiz</button> */}
                <button>Submit</button>
            </form>               
        </div>
    )
}